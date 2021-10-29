import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import { Box, display } from "@mui/system";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { createdAgo } from "../../../../services/getTimeService";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../../../config/axios";

import { AuthContext } from "../../../../contexts/AuthContext";

function CardProfile({
	User,
	id,
	productName,
	picProduct,
	price,
	externalLink,
	description,
	handleClickDelete,
	handleEditProduct,
	category,
	createdAt,
	Likes,
	item_usersLiked,
}) {
	const product = {
		id,
		productName,
		picProduct,
		price,
		externalLink,
		description,
		category,
	};

	// console.log(id);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	//////// like handling //////////////////////////////////
	const { user } = useContext(AuthContext);
	const [isLiked, setIsLiked] = useState(false);
	const [currentLikeCount, setCurrentLikeCount] = useState(0);
	const [usersLiked, setUsersLiked] = useState([]);
	const [firstLike, setFirstLike] = useState(false);

	// console.log(item.name, item.id, item);
	console.log("usersliked", usersLiked);

	// console.log("likecount", currentLikeCount);

	// too many rerender here
	useEffect(() => {
		setUsersLiked(item_usersLiked);
		item_usersLiked.map((elem) => {
			if (+elem.userId === +user?.id && elem.status === true) {
				setIsLiked(true);
			}
		});
		setCurrentLikeCount(Likes);
	}, []);

	useEffect(() => {
		if (firstLike) {
			// alert("first like effect");
			const fetch = async () => {
				const newLikeList = await axios.get(`/marketplace/likesbyproduct/${id}`);
				console.log(newLikeList.data);
				setUsersLiked(newLikeList.data.usersLiked);
			};
			fetch();
		}
	}, [firstLike]);
	// console.log(`effect ${item.name}`, usersLiked);

	const handleClickLike = async () => {
		if (usersLiked.length === 0) {
			alert("first like");
			axios.post("/like", { productId: id }).then((res) => {
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
					axios.post("/like", { productId: id }).then((res) => {
						setIsLiked((cur) => !cur);
						setCurrentLikeCount((cur) => cur + 1);
					});
				}
			});
		}
	};
	/////////////end of like handling/////////////////////////////////////

	return (
		<Card
			sx={{
				width: { xs: "10%", sm: "20%", md: "30%" },
				// height: { xs: '10%', sm: '20%', md: '30%' },
				margin: 2,
				display: "flex",
				flexWrap: "wrap",
				minWidth: "250px",
			}}
		>
			<CardActionArea>
				<CardHeader
					action={
						<div>
							<Button
								id="demo-positioned-button"
								aria-controls="demo-positioned-menu"
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}
							>
								<MoreHorizIcon />
							</Button>
							<Menu
								id="demo-positioned-menu"
								aria-labelledby="demo-positioned-button"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								anchorOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
							>
								<Link
									to={{
										pathname: `/editproduct/${id}`,
										state: { product },
									}}
								>
									<MenuItem onClick={handleClose}>Edit</MenuItem>
								</Link>
								<MenuItem onClick={() => handleClickDelete(id)}>Delete</MenuItem>
							</Menu>
						</div>
					}
				/>

				<CardMedia component="img" height="194" image={picProduct} alt="Paella dish" />

				<CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box>
						<Typography color="text.primary" gutterBottom variant="h5" component="div">
							{productName}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							By: {User.username}
						</Typography>
					</Box>
					<Box>
						<Typography color="text.secondary" gutterBottom variant="body1" component="div">
							Price
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{+price} {`\u0E3F`}
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
					width: "100%",
				}}
			>
				<Box>
					<IconButton aria-label="add to favorites">
						{isLiked ? (
							<FavoriteIcon sx={{ fontSize: "1.5rem", color: "red" }} onClick={handleClickLike} />
						) : (
							<FavoriteBorderIcon sx={{ fontSize: "1.5rem" }} onClick={handleClickLike} />
						)}
						<Typography>{currentLikeCount}</Typography>
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon sx={{ fontSize: "1.5rem" }} />
					</IconButton>
				</Box>
				<Box>
					{Math.round(createdAgo(createdAt).time)} {createdAgo(createdAt).unit}
					Ago
				</Box>
			</CardActions>
			<Typography
				variant="body2"
				color="text.secondary"
				sx={{
					overflow: "hidden",
					textOverflow: "ellipsis",
					paddingBottom: "0.5rem",
					margin: "1rem",
				}}
			>
				{description === "undefined" ? "No description " : description}
			</Typography>
		</Card>
	);
}

export default CardProfile;
