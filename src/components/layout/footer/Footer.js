import { Container } from "@mui/material";

function Footer() {
	return (
		<Container sx={{ bgcolor: "red", zIndex: "2", height: "10vh" }} maxWidth={false} disableGutters>
			Estuary 2021
		</Container>
	);
}

export default Footer;
