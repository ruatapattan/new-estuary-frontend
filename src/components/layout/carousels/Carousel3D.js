import { Avatar, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
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

function Carousel3D() {
	const [imgIdx, setImgIdx] = useState(0);
	const settingsOverlap = {
		className: "center",
		centerMode: true,
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		variableWidth: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		beforeChange: (cur, next) => setImgIdx(next),
	};

	return (
		<Box
			className="carouselOuterBox"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			// border="1px solid black"
			sx={{ mt: 10, height: "70vh" }}
			boxSizing="border-box"
		>
			<Typography variant="h4">Trending Creators</Typography>
			<Box width="90%" display="block" justifyContent="center">
				<Slider {...settingsOverlap} className="carouselBox" style={{ cursor: "pointer" }}>
					{imgArr.map((item, idx) => (
						<Card
							key={idx}
							className={idx === imgIdx ? "slide activeSlide" : "slide"}
							sx={{ width: "500px", height: "50vh" }}
						>
							<CardActionArea sx={{ width: "500px", height: "50vh", display: "flex" }}>
								<CardMedia
									component="img"
									image={item}
									alt="green iguana"
									sx={{ width: "50%", height: "100%" }}
								/>
								<CardContent
									sx={{
										width: "50%",
										height: "100%",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Avatar
										sx={{ mb: 5, width: 100, height: 100 }}
										alt="Remy Sharp"
										src="https://res.cloudinary.com/dbaavttgh/image/upload/v1634099288/nps3akzuq75qpmgvddk3.png"
									/>
									<Typography gutterBottom variant="h5" component="div">
										Lizard
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Lizards are a widespread group of squamate reptiles, with over 6,000 species,
										ranging across all continents except Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				</Slider>
			</Box>
		</Box>
	);
}

export default Carousel3D;
