import {
	Avatar,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	IconButton,
	Link,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { AuthContext } from "../../../contexts/AuthContext";
import { createdAgo } from "../../../services/getTimeService";
import { useContext, useEffect, useState } from "react";
import axios from "../../../config/axios";
import { useHistory } from "react-router-dom";
import { SocketContext } from "../../../contexts/SocketContext";

function MarketplaceProductItem({ item }) {
	const history = useHistory();
	const { sendNotification } = useContext(SocketContext);
	const { user } = useContext(AuthContext);
	const [isLiked, setIsLiked] = useState(false);
	const [currentLikeCount, setCurrentLikeCount] = useState(0);
	const [usersLiked, setUsersLiked] = useState([]);
	const [firstLike, setFirstLike] = useState(false);
	const [filteredUsersLiked, setFilteredUsersLiked] = useState([]);
	console.log(item.name, item.id, item);
	console.log("user", user);

	// console.log("likecount", currentLikeCount);

	// too many rerender here

	useEffect(() => {
		setUsersLiked(item.usersLiked);
		setCurrentLikeCount(item.Likes);
	}, []);

	useEffect(() => {
		const filtered = [];
		usersLiked.forEach((elem) => {
			if (+elem.userId === +user.id) {
				if (elem.status === true) {
					setIsLiked(true);
				}
				filtered.push(elem);
			}
		});
		setFilteredUsersLiked(filtered);
	}, [usersLiked]);

	useEffect(() => {
		if (firstLike) {
			// alert("first like effect");
			const fetch = async () => {
				const newLikeList = await axios.get(`/marketplace/likesbyproduct/${item.id}`);
				console.log(newLikeList.data);
				setUsersLiked(newLikeList.data.usersLiked);
			};
			fetch();
		}
	}, [firstLike]);
	// console.log(`effect ${item.name}`, usersLiked);

	// console.log("filteredLikes", item.name, filteredUsersLiked);
	// console.log("current user", user.username, "id", user.id);

	const handleClickLike = async () => {
		if (filteredUsersLiked.length === 0) {
			// alert("first like");
			axios
				.post("/like", { productId: item.id })
				.then((res) => {
					setIsLiked((cur) => !cur);
					setCurrentLikeCount((cur) => cur + 1);
					setFirstLike((cur) => !cur);
					return res;
				})
				.then((res2) => {
					if (user.id !== item.User.id) {
						// alert("notify like");
						console.log(res2);
						sendNotification(
							user.id,
							user.username,
							item.User.id,
							"liked",
							"product",
							"likeId",
							res2.data.likeId
						);
					}
				});
		} else {
			// alert("not first");
			axios.put(`/like/${filteredUsersLiked[0].id}`, { isLiked: !isLiked }).then((res) => {
				const currentType = isLiked;
				setIsLiked((cur) => !cur);
				setCurrentLikeCount((cur) => (currentType ? cur - 1 : cur + 1));
			});
		}
	};

	return (
		<Grid key={item} item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
			<Box
				// href={`/product/${item.id}`}
				className="expSlider"
				key={item.id}
				style={{ textDecoration: "none", height: "400px" }}
			>
				<Card sx={{ maxWidth: 345, height: "400px" }}>
					<CardActionArea onClick={() => history.push(`/product/${item.id}`)}>
						<CardMedia
							component="img"
							sx={{ width: 280, height: 258 }}
							image={item.coverPic}
							alt="green iguana"
						/>
						<CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
							<Box>
								<Typography color="text.primary" gutterBottom variant="h5" component="div">
									{item.name}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									By: {item.User.username}
								</Typography>
							</Box>
							<Box>
								<Typography color="text.secondary" gutterBottom variant="body1" component="div">
									Price
								</Typography>
								<Typography variant="body2" color="text.secondary">
									{(+item?.price)?.toFixed(0)} {`\u0E3F`}
								</Typography>
							</Box>
						</CardContent>
					</CardActionArea>
					<CardActions
						disableSpacing
						sx={{
							padding: 0,
							display: "flex",
							justifyContent: "space-between",
							paddingX: "0.5rem",
						}}
					>
						<Box>
							<IconButton aria-label="add to favorites" onClick={handleClickLike}>
								{isLiked ? (
									<FavoriteIcon sx={{ fontSize: "1.5rem", color: "red" }} />
								) : (
									<FavoriteBorderIcon sx={{ fontSize: "1.5rem" }} />
								)}
								<Typography>{currentLikeCount}</Typography>
							</IconButton>
							<IconButton aria-label="share">
								<ShareIcon sx={{ fontSize: "1.5rem" }} />
								{/* <Typography>{item.Shares}</Typography> */}
							</IconButton>
						</Box>
						<Box>
							{Math.round(createdAgo(item.createdAt).time)} {createdAgo(item.createdAt).unit} Ago
						</Box>
					</CardActions>
				</Card>
			</Box>
		</Grid>
	);
}

export default MarketplaceProductItem;
