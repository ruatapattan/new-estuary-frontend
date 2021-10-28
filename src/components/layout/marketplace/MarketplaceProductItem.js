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

function MarketplaceProductItem({ item }) {
	const { user } = useContext(AuthContext);
	const [isLiked, setIsLiked] = useState(false);
	const [currentLikeCount, setCurrentLikeCount] = useState(0);
	console.log("item", item);
	// console.log(item.usersLiked);

	console.log("likecount", currentLikeCount);

	// too many rerender here
	useEffect(() => {
		item.usersLiked.map((elem) => {
			if (+elem.userId === +user.id && elem.status === true) {
				setIsLiked(true);
			}
		});
		setCurrentLikeCount(item.Likes);
	}, []);

	const handleClickLike = async () => {
		if (item.usersLiked.length === 0) {
			alert("first like");
			axios.post("/like", { productId: item.id }).then((res) => {
				setIsLiked((cur) => !cur);
				setCurrentLikeCount((cur) => cur + 1);
			});
		} else {
			item.usersLiked.map((elem) => {
				if (+elem.userId === +user.id) {
					axios.put(`/like/${elem.id}`, { isLiked: !isLiked }).then((res) => {
						setIsLiked((cur) => !cur);
						setCurrentLikeCount((cur) => (elem.status === true ? cur - 1 : cur + 1));
					});
				} else {
					axios.post("/like", { productId: item.id }).then((res) => {
						setIsLiked((cur) => !cur);
						setCurrentLikeCount((cur) => cur + 1);
					});
				}
			});
		}
	};

	const handleClickUnLike = async () => {
		item.usersLiked.map((elem) => {
			if (+elem.userId === +user.id) {
				axios.put(`/like/${elem.id}`, { isLiked: !isLiked }).then((res) => {
					setIsLiked((curr) => !curr);
					setCurrentLikeCount((cur) => (elem.status === true ? cur - 1 : cur + 1));
				});
				// axios.delete(`/following/${item.id}`).then(res => {
				//   window.location.reload();
				// });
			}
		});
	};

	return (
		<Grid key={item} item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
			<Link to={item.id} className="expSlider" key={item.id} style={{ textDecoration: "none", height: "400px" }}>
				<Card sx={{ maxWidth: 345, height: "400px" }}>
					<CardActionArea>
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
							{isLiked ? (
								<IconButton aria-label="add to favorites" onClick={handleClickUnLike}>
									<FavoriteIcon sx={{ fontSize: "1.5rem", color: "red" }} />
									<Typography>{currentLikeCount}</Typography>
								</IconButton>
							) : (
								<IconButton aria-label="add to favorites" onClick={handleClickLike}>
									<FavoriteBorderIcon sx={{ fontSize: "1.5rem" }} />
									<Typography>{currentLikeCount}</Typography>
								</IconButton>
							)}
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
			</Link>
		</Grid>
	);
}

export default MarketplaceProductItem;
