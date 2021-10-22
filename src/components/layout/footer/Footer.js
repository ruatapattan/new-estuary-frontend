import { Container } from "@mui/material";

function Footer() {
	return (
		<Container
			sx={{
				bgcolor: "#242A38",
				color: "white",
				zIndex: "2",
				height: "10vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			maxWidth={false}
			disableGutters
		>
			Estuary 2021
		</Container>
	);
}

export default Footer;
