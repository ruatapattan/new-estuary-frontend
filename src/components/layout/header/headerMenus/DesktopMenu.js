import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton, Link, Menu, MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

function DesktopMenu({ anchorEl, handleMenuClose, handleClickSignOut }) {
	const menuId = "primary-search-account-menu";
	const isMenuOpen = Boolean(anchorEl);

	return (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>
				<Link href="/profile" color="text.primary" underline="none" display="flex" alignItems="center">
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
				{/* <Link href="#" underline="none" display="flex" alignItems="center"> */}
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<LogoutIcon />
				</IconButton>
				<p>Sign Out</p>
				{/* </Link> */}
			</MenuItem>
		</Menu>
	);
}

export default DesktopMenu;
