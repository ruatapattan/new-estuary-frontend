import { Avatar, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Link, Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import Slider from "react-slick";
import { useState } from "react";
import { CarouselWrapper } from "react-pretty-carousel";
import { CenterTypography } from "../../../style";
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
							<Grid item xs={4}>
								<Link to="#" key={idx} style={{ textDecoration: "none" }}>
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
