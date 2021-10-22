import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import SampleNextArrow from "./arrows/SampleNextArrow";
import SamplePrevArrow from "./arrows/SamplePrevArrow";
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
								<CardContent>
									<Typography color="text.primary" gutterBottom variant="h5" component="div">
										Lizard
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Lizards are a widespread group of squamate reptiles, with over 6,000 species,
										ranging across all continents except Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
				))}
			</Slider>
		</section>
	);
}

export default CarouselSlide;
