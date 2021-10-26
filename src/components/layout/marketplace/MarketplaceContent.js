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
import { Box, typography } from "@mui/system";
import Slider from "react-slick";
import { useState } from "react";
import { CarouselWrapper } from "react-pretty-carousel";
import { CenterTypography } from "../../../style";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Carousel3D from "../carousels/Carousel3D";
import CarouselSlide from "../carousels/CarouselSlide";
const imgArr = [
	"https://picsum.photos/id/1/400/300",
	"https://picsum.photos/id/222/400/300",
	"https://picsum.photos/id/22/400/300",
	"https://picsum.photos/id/39/400/300",
	"https://picsum.photos/id/142/400/300",
	"https://picsum.photos/id/34/400/300",
];

function MarketplaceContent({ title }) {
	return (
		<>
			<Carousel3D />
			<CarouselSlide />
			<CarouselSlide />
			<br />
			<Box
				sx={{
					width: "100%",
					// border: "1px solid navy",
				}}
			>
				<Typography variant="h5" ml="5%">
					{title ?? "All Products"}
				</Typography>
				<Box display="flex" justifyContent="center">
					<Grid container spacing={6} sx={{ width: "100%", p: "1rem" }}>
						{imgArr.map((item, idx) => (
							<Grid
								key={item}
								item
								xs={12}
								sm={6}
								md={4}
								sx={{ display: "flex", justifyContent: "center" }}
							>
								{/* <Link to="#" key={idx} style={{ textDecoration: "none" }}>
									<Card sx={{ maxWidth: 345 }}>
										<CardActionArea>
											<CardMedia component="img" image={item} alt="green iguana" />
											<CardContent>
												<Typography gutterBottom variant="h5" component="div">
													Lizard
												</Typography>
												<Typography variant="body2" color="text.secondary">
													Lizards are a widespread group of squamate reptiles, with over 6,000
													species, ranging across all continents except Antarctica
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Link> */}
								<Link to="#" className="expSlider" key={idx} style={{ textDecoration: "none" }}>
									<Card sx={{ maxWidth: 345 }}>
										<CardActionArea>
											<CardMedia component="img" image={item} alt="green iguana" />
											<CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
												<Box>
													<Typography
														color="text.primary"
														gutterBottom
														variant="h5"
														component="div"
													>
														Art Name
													</Typography>
													<Typography variant="body2" color="text.secondary">
														By: THEVinci
													</Typography>
												</Box>
												<Box>
													<Typography
														color="text.secondary"
														gutterBottom
														variant="body1"
														component="div"
													>
														Price
													</Typography>
													<Typography variant="body2" color="text.secondary">
														{"500"}$
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
												<IconButton aria-label="add to favorites">
													<FavoriteIcon sx={{ fontSize: "1.5rem" }} />
													<Typography>1.1M</Typography>
												</IconButton>
												<IconButton aria-label="share">
													<ShareIcon sx={{ fontSize: "1.5rem" }} />
												</IconButton>
											</Box>
											<Box>3 Days Ago</Box>
										</CardActions>
									</Card>
								</Link>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</>
	);
}

export default MarketplaceContent;
