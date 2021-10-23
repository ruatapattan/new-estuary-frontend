import { Badge, IconButton, Link, Menu, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsIcon from "@mui/icons-material/Textsms";
import LogoutIcon from "@mui/icons-material/Logout";
const menuId = "primary-search-account-menu";
function MobileMenu({
	handleChatLogMenuOpen,
	mobileMoreAnchorEl,
	isMobileMenuOpen,
	handleMobileMenuClose,
	handleClickSignOut,
}) {
	const mobileMenuId = "primary-search-account-menu-mobile";

	return (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size="large" aria-label="show 17 new notifications" color="inherit">
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleChatLogMenuOpen}>
				<IconButton size="large" aria-label="show 17 new notifications" color="inherit">
					<Badge badgeContent={17} color="error">
						<TextsmsIcon />
					</Badge>
				</IconButton>
				<p>Chat</p>
			</MenuItem>
			<MenuItem>
				<Link href="/profile" underline="none" display="flex" color="text.primary" alignItems="center">
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="primary-search-account-menu"
						aria-haspopup="true"
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
					<p>Profile</p>
				</Link>
			</MenuItem>
			<MenuItem onClick={handleClickSignOut}>
				<Link href="#" underline="none" display="flex" color="text.primary" alignItems="center">
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="primary-search-account-menu"
						aria-haspopup="true"
						color="inherit"
					>
						<LogoutIcon />
					</IconButton>
					<Typography>Sign Out</Typography>
				</Link>
			</MenuItem>
		</Menu>
	);
}

export default MobileMenu;
