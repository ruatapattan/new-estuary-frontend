import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Tooltip,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import MarketProductCard from "../marketplace/MarketProductCard";
import SampleNextArrow from "./arrows/SampleNextArrow";
import SamplePrevArrow from "./arrows/SamplePrevArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/system";
import { createdAgo } from "../../../services/getTimeService";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "../../../config/axios";
import { SocketContext } from "../../../contexts/SocketContext";

function CarouselSlideButtons({ item }) {
	const { user } = useContext(AuthContext);
	const { sendNotification } = useContext(SocketContext);
	const [isLiked, setIsLiked] = useState(false);
	const [currentLikeCount, setCurrentLikeCount] = useState(0);
	const [usersLiked, setUsersLiked] = useState([]);
	const [firstLike, setFirstLike] = useState(false);
	const [filteredUsersLiked, setFilteredUsersLiked] = useState([]);
	// console.log(item.name, item.id, item);
	// console.log(usersLiked);

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

	console.log("filteredLikes", item.name, filteredUsersLiked);
	console.log("current user", user.username, "id", user.id);

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
		<Box>
			<IconButton aria-label="add to favorites" onClick={handleClickLike}>
				{isLiked ? (
					<FavoriteIcon sx={{ fontSize: "1.5rem", color: "red" }} />
				) : (
					<FavoriteBorderIcon sx={{ fontSize: "1.5rem" }} />
				)}
				<Typography>{currentLikeCount}</Typography>
			</IconButton>
			<Tooltip title="Copy link">
				<IconButton
					aria-label="share"
					onClick={() => {
						navigator.clipboard.writeText(
							`${window.location.protocol}//${window.location.hostname}:${window.location.port}/product/${item.id}`
						);
					}}
				>
					<ShareIcon sx={{ fontSize: "1.5rem" }} />
				</IconButton>
			</Tooltip>
		</Box>
	);
}

export default CarouselSlideButtons;
