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
	);
}

export default CarouselSlideButtons;
