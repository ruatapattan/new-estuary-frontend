import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import MarketProductCard from "../marketplace/MarketProductCard";
import SampleNextArrow from "./arrows/SampleNextArrow";
import SamplePrevArrow from "./arrows/SamplePrevArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/system";
import { createdAgo } from "../../../services/getTimeService";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useState } from "react";
import CarouselSlideButtons from "./CarouselSlideButtons";

function CarouselSlide({ title, products }) {
	const slides = products.length > 2 ? 3 : products.length > 1 ? 2 : 1;
	const settings = {
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		infinite: true,
		lazyLoad: false,
		speed: 300,
		slidesToShow: slides,
		slidesToScroll: slides,
		responsive: [
			// {
			//   breakpoint: 1024,
			//   settings: {
			// 	slidesToShow: 3,
			// 	slidesToScroll: 3,
			// 	infinite: true,
			// 	dots: true
			//   }
			// },
			{
				breakpoint: 900,
				settings: {
					slidesToShow: slides > 1 ? slides - 1 : 1,
					slidesToScroll: slides > 1 ? slides - 1 : 1,
					// initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: slides > 1 ? slides - 2 : 1,
					slidesToScroll: slides > 1 ? slides - 2 : 1,
				},
			},
		],
	};
	return (
		<section className="expSlideContainer">
			<Typography variant="h5" ml="5%">
				{title ?? "All Products"}
			</Typography>
			<Slider {...settings} className="expSlideBox" sx={{ padding: 0 }}>
				{products.map((item, idx) => (
					// <CarouselSlideItem item={item} />

					<Link to="#" className="expSlider" key={idx}>
						<Card sx={{ maxWidth: 345, height: "350px" }}>
							<CardActionArea>
								<CardMedia
									sx={{ width: 245, height: 197.75 }}
									classname="sliderImage"
									component="img"
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
											Price:
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
								{/* <Box>
									<IconButton aria-label="add to favorites">
										<FavoriteIcon sx={{ fontSize: "1.5rem" }} />
										<Typography>{item.Likes}</Typography>
									</IconButton>
									<IconButton aria-label="share">
										<ShareIcon sx={{ fontSize: "1.5rem" }} />
										<Typography>{item.Shares}</Typography>
									</IconButton>
								</Box> */}
								<CarouselSlideButtons item={item} />
								<Box>
									{Math.round(createdAgo(item.createdAt).time)} {createdAgo(item.createdAt).unit} Ago
								</Box>
							</CardActions>
						</Card>
					</Link>

					// <MarketProductCard item={item} />
				))}
			</Slider>
		</section>
	);
}

export default CarouselSlide;
