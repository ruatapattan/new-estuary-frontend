import { Avatar, Badge, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import TextsmsIcon from "@mui/icons-material/Textsms";
function UserNav({
	handleProfileMenuOpen,
	// handleMobileMenuOpen,
	handleChatLogMenuOpen,
	handleNotificationMenuOpen,
}) {
	const menuId = "primary-search-account-menu";
	const mobileMenuId = "primary-search-account-menu-mobile";

	return (
		<>
			{/* <Box sx={{ display: { xs: "none", md: "flex" } }}> */}
			<Box sx={{ display: "flex" }}>
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
					onClick={handleNotificationMenuOpen}
				>
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
					onClick={handleChatLogMenuOpen}
				>
					<Badge badgeContent={1} color="error">
						<TextsmsIcon />
					</Badge>
				</IconButton>
				<IconButton
					size="large"
					edge="end"
					aria-label="account of current user"
					aria-controls={menuId}
					aria-haspopup="true"
					onClick={handleProfileMenuOpen}
					color="inherit"
				>
					{/* <AccountCircle /> */}
					<Avatar src="https://res.cloudinary.com/dbaavttgh/image/upload/v1634039431/euopnlkdkag488x5l8jc.png" />
				</IconButton>
			</Box>
			{/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
				<IconButton
					size="large"
					aria-label="show more"
					aria-controls={mobileMenuId}
					aria-haspopup="true"
					onClick={handleMobileMenuOpen}
					color="inherit"
				>
					<Avatar src="https://res.cloudinary.com/dbaavttgh/image/upload/v1634039431/euopnlkdkag488x5l8jc.png" />

				</IconButton>
			</Box> */}
		</>
	);
}

export default UserNav;
