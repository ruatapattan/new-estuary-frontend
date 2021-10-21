import { Box } from "@mui/system";
import React from "react";
import SideBar from "../sidebar/SideBarL";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

function HomeContainer() {
	return (
		<Box
			sx={{
				width: "100%",
				height: "150vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "flex-start",
			}}
		>
			{/* side bar */}
			<SideBar />

			{/* Box content card */}
			<Box sx={{ display: "flex", justifyContent: "center", width: "100%", mt: "20px" }}>
				{/* Card ขอบเขต Card */}
				<Card sx={{ maxWidth: "100%" }}>
					{/* CardHeader */}
					<CardHeader
						avatar={
							<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
								R
							</Avatar>
						}
						// action={
						//   <IconButton aria-label='settings'>
						//     <MoreVertIcon />
						//   </IconButton>
						// }
						title="Shrimp and Chorizo Paella"
						// subheader='September 14, 2016'
					/>

					{/* Card content*/}
					<CardContent>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat quaerat quibusdam
							facilis quisquam aliquam nulla veritatis fuga ea nihil.
						</p>

						{/* <Typography variant='body2' color='text.secondary'>
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography> */}
					</CardContent>

					{/* Card media*/}
					<Box sx={{ width: "90%", margin: "auto" }}>
						<CardMedia
							sx={{ height: "100%", width: "100%", objectFit: "contain" }}
							component="img"
							height="194"
							image="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
							alt="Paella dish"
						/>
					</Box>

					<Box sx={{ display: "flex", justifyContent: "space-between", mt: "10px", p: "16px" }}>
						<div>
							<ThumbUpOutlinedIcon /> <span>Like</span>
						</div>
						<div>
							<ChatBubbleOutlineOutlinedIcon /> <span>comment 5</span>
						</div>
						<div>
							<ShareOutlinedIcon /> <span>copy link</span>
						</div>
					</Box>

					{/* <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                R
              </Avatar>
            }
            title='Shrimp and Chorizo Paella'
          /> */}

					{/* CardActions */}
					<Box sx={{ p: "16px" }}>
						<cardActionsClasses>
							<Grid container>
								<Grid item xs={3}>
									<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
										R
									</Avatar>
								</Grid>
								<Grid item xs={9}>
									<TextField sx={{ width: "80%", height: "50%" }} />
								</Grid>
							</Grid>
						</cardActionsClasses>
					</Box>
				</Card>
			</Box>
		</Box>
	);
}

export default HomeContainer;
