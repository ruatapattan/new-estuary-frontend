import { Avatar, Card, CardActionArea, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { Box, display } from "@mui/system";
import { useState } from "react";
import { useHistory } from "react-router";
import Slider from "react-slick";
import SampleNextArrow from "./arrows/SampleNextArrow";
import SamplePrevArrow from "./arrows/SamplePrevArrow";

function Carousel3D({ trendingCreators }) {
	const history = useHistory();
	const [imgIdx, setImgIdx] = useState(0);
	const settingsOverlap = {
		className: "center",
		centerMode: true,
		infinite: true,
		lazyLoad: false,
		slidesToShow: 3,
		speed: 500,
		variableWidth: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		beforeChange: (cur, next) => setImgIdx(next),
		responsive: [
			// {
			// 	breakpoint: 900,
			// 	settings: {
			// 		slidesToShow: slides > 1 ? slides - 1 : 1,
			// 		slidesToScroll: slides > 1 ? slides - 1 : 1,
			// 		// initialSlide: 2,
			// 	},
			// },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	console.log(trendingCreators);

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
					{trendingCreators?.map((item, idx) => (
						<Card
							key={item.id}
							className={idx === imgIdx ? "slide activeSlide" : "slide"}
							sx={{ width: "500px", height: "50vh" }}
						>
							<CardActionArea sx={{ width: "500px", height: "50vh", display: "flex" }}>
								<Box
									sx={{
										width: "50%",
										height: "100%",
										"&:hover *": { bgcolor: "rgba(255, 255, 255, 0.7)", visibility: "visible" },
									}}
								>
									<Link
										href={`/product/${item.Products.id}`}
										sx={{
											width: "50%",
											height: "100%",
											display: "flex",
											visibility: "hidden",
											justifyContent: "center",
											alignItems: "center",
											textDecoration: "none",
											color: "#242A38",
											fontWeight: "bold",
											fontSize: "1.5rem",
											padding: "1rem",
										}}
										position="absolute"
									>
										Check out this product!
									</Link>
									<CardMedia
										// onClick={() => history.push(`/product/${item.Products.id}`)}
										component="img"
										image={item.Products.coverPic}
										alt="green iguana"
										sx={{ width: "100%", height: "100%" }}
									/>
								</Box>
								<CardContent
									// onClick={() => history.push(`/profile/${item.id}`)}
									sx={{
										width: "50%",
										height: "100%",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										"&:hover *": { bgcolor: "rgba(255, 255, 255, 0.9)", visibility: "visible" },
									}}
								>
									<Link
										href={`/product/${item.Products.id}`}
										sx={{
											width: "50%",
											height: "100%",
											display: "flex",
											visibility: "hidden",
											justifyContent: "center",
											alignItems: "center",
											textDecoration: "none",
											color: "#242A38",
											fontWeight: "bold",
											fontSize: "1.5rem",
											padding: "1rem",
											textAlign: "right",
										}}
										position="absolute"
									>
										Check out this creator!
									</Link>
									<Avatar
										sx={{ mb: 1, width: 100, height: 100 }}
										alt="Remy Sharp"
										src={item.profilePic}
									/>
									<Typography gutterBottom variant="h5" component="div">
										{item.username}
									</Typography>
									<hr width="100%" color="slateblue" />
									<Box
										display="flex"
										flexDirection="column"
										alignItems="flex-start"
										justifyContent="space-evenly"
										width="100%"
										height="100%"
									>
										<Box
											display="flex"
											alignItems="center"
											justifyContent="flex-start"
											width="100%"
										>
											<Typography variant="body2" color="text.secondary">
												Latest Product:
											</Typography>
											<Typography
												variant="body1"
												sx={{ marginLeft: "0.5rem" }}
												color="text.primary"
											>
												{item.Products.name}
											</Typography>
										</Box>
										<Box
											display="flex"
											alignItems="center"
											justifyContent="flex-start"
											width="100%"
										>
											<Typography variant="body2" color="text.secondary">
												Followers:
											</Typography>
											<Typography
												variant="body1"
												sx={{ marginLeft: "0.5rem" }}
												color="text.primary"
											>
												{item.followerCount}
											</Typography>
										</Box>
									</Box>
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
