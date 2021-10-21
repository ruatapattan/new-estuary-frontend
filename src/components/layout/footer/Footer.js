import { Container } from "@mui/material";

function Footer() {
	return (
		<Container sx={{ bgcolor: "red", zIndex: "2" }} maxWidth={false} disableGutters>
			Estuary 2021
		</Container>
	);
}

export default Footer;
