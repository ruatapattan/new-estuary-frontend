import { IconButton, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LoginIcon from "@mui/icons-material/Login";
import WavesIcon from "@mui/icons-material/Waves";
function GuestNav() {
	return (
		<>
			<Box sx={{ display: { xs: "flex", md: "flex" } }}>
				<Link href="/login" underline="none" display="flex" color="white" alignItems="center">
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="primary-search-account-menu"
						aria-haspopup="true"
						color="inherit"
					>
						<LoginIcon />
					</IconButton>
					<Typography>Sign In</Typography>
				</Link>
				<Link href="/signup" underline="none" display="flex" color="white" alignItems="center">
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="primary-search-account-menu"
						aria-haspopup="true"
						color="inherit"
					>
						<WavesIcon />
					</IconButton>
					<Typography>Sign Up</Typography>
				</Link>
			</Box>
		</>
	);
}

export default GuestNav;
