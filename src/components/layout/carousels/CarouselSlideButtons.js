import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
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

function CarouselSlideButtons({ item }) {
	const { user } = useContext(AuthContext);
	const [isLiked, setIsLiked] = useState(false);
	const [currentLikeCount, setCurrentLikeCount] = useState(0);
	const [usersLiked, setUsersLiked] = useState([]);
	const [firstLike, setFirstLike] = useState(false);

	console.log(item.name, item.id, item);
	// console.log(item.name, item.id, item);
	// console.log(usersLiked);

	// console.log("likecount", currentLikeCount);

	// too many rerender here
	useEffect(() => {
		setUsersLiked(usersLiked);
		usersLiked.map((elem) => {
			if (+elem.userId === +user?.id && elem.status === true) {
				setIsLiked(true);
			}
		});
		setCurrentLikeCount(item.Likes);
	}, []);

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
	console.log(`effect ${item.name}`, usersLiked);

	const handleClickLike = async () => {
		if (usersLiked.length === 0) {
			alert("first like");
			axios.post("/like", { productId: item.id }).then((res) => {
				setIsLiked((cur) => !cur);
				setCurrentLikeCount((cur) => cur + 1);
				setFirstLike((cur) => !cur);
			});
		} else {
			usersLiked.map((elem) => {
				if (+elem.userId === +user.id) {
					axios.put(`/like/${elem.id}`, { isLiked: !isLiked }).then((res) => {
						const currentType = isLiked;
						setIsLiked((cur) => !cur);
						setCurrentLikeCount((cur) => (currentType ? cur - 1 : cur + 1));
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
			<IconButton aria-label="share">
				<ShareIcon sx={{ fontSize: "1.5rem" }} />
				{/* <Typography>{item.Shares}</Typography> */}
			</IconButton>
		</Box>
	);
}

export default CarouselSlideButtons;
