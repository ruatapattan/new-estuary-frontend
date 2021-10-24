import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import MarketProductCard from "../marketplace/MarketProductCard";
import SampleNextArrow from "./arrows/SampleNextArrow";
import SamplePrevArrow from "./arrows/SamplePrevArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box } from "@mui/system";

const imgArr = [
	"https://picsum.photos/id/1/400/300",
	"https://picsum.photos/id/222/400/300",
	"https://picsum.photos/id/22/400/300",
	"https://picsum.photos/id/39/400/300",
	"https://picsum.photos/id/142/400/300",
	"https://picsum.photos/id/34/400/300",
];
function CarouselSlide({ title }) {
	const settings = {
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
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
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					// initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section className="expSlideContainer">
			<Typography variant="h5" ml="5%">
				{title ?? "All Products"}
			</Typography>
			<Slider {...settings} className="expSlideBox">
				{imgArr.map((item, idx) => (
					<Link to="#" className="expSlider" key={idx}>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia component="img" image={item} alt="green iguana" />
								<CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
									<Box>
										<Typography color="text.primary" gutterBottom variant="h5" component="div">
											Art Name
										</Typography>
										<Typography variant="body2" color="text.secondary">
											By: THEVinci
										</Typography>
									</Box>
									<Box>
										<Typography color="text.secondary" gutterBottom variant="body1" component="div">
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
					// <MarketProductCard item={item} />
				))}
			</Slider>
		</section>
	);
}

export default CarouselSlide;
