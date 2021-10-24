import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from "@mui/material";

function MarketProductCard({ item }) {
	return (
		// <>
		<Link to="#" className="expSlider" key={item}>
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia component="img" image={item} alt="green iguana" />
					<CardContent>
						<Typography color="text.primary" gutterBottom variant="h5" component="div">
							Lizard
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
							all continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
		// </>
	);
}

export default MarketProductCard;
