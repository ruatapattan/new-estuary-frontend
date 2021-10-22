import { Avatar, Card, CardActionArea, CardContent, CardMedia, Container, Link, Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { CarouselWrapper } from "react-pretty-carousel";
import { CenterTypography } from "../../../style";

const imgArr = [
	"https://picsum.photos/id/1/400/300",
	"https://picsum.photos/id/222/400/300",
	"https://picsum.photos/id/22/400/300",
	"https://picsum.photos/id/39/400/300",
	"https://picsum.photos/id/142/400/300",
	"https://picsum.photos/id/34/400/300",
];

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<ArrowForwardIosIcon
			style={{ ...style, color: "#242A38" }}
			className={className}
			onClick={onClick}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<ArrowBackIosIcon
			style={{ ...style, color: "#242A38" }}
			className={className}
			onClick={onClick}
			onClick={onClick}
		/>
	);
}

function MarketplaceContent() {
	const [imgIdx, setImgIdx] = useState(0);
	const settingsOverlap = {
		className: "center",
		centerMode: true,
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		variableWidth: true,
		// variableHeight: true,
		// centerPadding: "0px",
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		beforeChange: (cur, next) => setImgIdx(next),
	};
	const settings = {
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
	};

	return (
		<>
			<Box
				className="carouselOuterBox"
				display="flex"
				justifyContent="center"
				alignItems="center"
				border="1px solid black"
				sx={{ mt: 10, height: "70vh" }}
				boxSizing="border-box"
			>
				<Box width="90%" display="block" justifyContent="center">
					<Slider {...settingsOverlap} className="carouselBox" style={{ cursor: "pointer" }}>
						{/* {imgArr.map((item, idx) => (
							<div key={idx} className={idx === imgIdx ? "slide activeSlide" : "slide"}>
								<img className="image" src={item} alt={item} value={item} />
							</div>
						))} */}
						{imgArr.map((item, idx) => (
							// <div key={idx} className={idx === imgIdx ? "slide activeSlide" : "slide"}>
							// 	<img className="image" src={item} alt={item} value={item} />
							// </div>

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
											Lizards are a widespread group of squamate reptiles, with over 6,000
											species, ranging across all continents except Antarctica
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						))}
					</Slider>
				</Box>
			</Box>
			<section className="expSlideContainer">
				{/* <h3>{title ?? "Your Community"}</h3> */}
				<Slider {...settings} className="expSlideBox">
					{/* {imgArr.map((item, idx) => (
						<Link to="#" className="expSlider" key={idx}>
							<img className="expImage" src={item} alt="" />
						</Link>
					))} */}
					{imgArr.map((item, idx) => (
						<Link to="#" className="expSlider" key={idx}>
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

							{/* <img className="expImage" src={item} alt="" /> */}
						</Link>
					))}
				</Slider>
			</section>
			<section className="expSlideContainer">
				{/* <h3>{title ?? "Your Community"}</h3> */}
				<Slider {...settings} className="expSlideBox">
					{imgArr.map((item, idx) => (
						<Link to="#" className="expSlider" key={idx}>
							<img className="expImage" src={item} alt="" />
						</Link>
					))}
					{/* {imgArr.map((item, idx) => (
					<div className="expSlider" key={idx}>
						<img className="expImage" src={item} alt="" />
					</div>
				))} */}
				</Slider>
			</section>
		</>
	);
}

export default MarketplaceContent;
