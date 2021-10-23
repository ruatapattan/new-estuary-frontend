// import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar } from "@mui/material";
import TextsmsIcon from "@mui/icons-material/Textsms";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "@mui/material/Link";
import { removeToken } from "../../../services/localStorage";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import WavesIcon from "@mui/icons-material/Waves";
import { useLocation } from "react-router-dom";
import { SidebarContext } from "../../../contexts/SidebarContext";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function Header() {
	const { handleDrawerToggle } = useContext(SidebarContext);
	const { userRole, user, setUserRole, setUser } = useContext(AuthContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
	const history = useHistory();
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const location = useLocation();
	const path = location.pathname;

	console.log(location.pathname);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleClickSignOut = async (e) => {
		e.preventDefault();
		removeToken();
		setUser(null);
		setUserRole("guest");
		history.push("/marketplace");
		window.location.reload();
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
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

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
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
			<MenuItem>
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

	return (
		// <Box sx={{ flexGrow: 1, zIndex: 1500 }}>
		<>
			<AppBar className="bar" position="sticky" sx={{ height: "10vh" }}>
				<Toolbar>
					<IconButton
						onClick={handleDrawerToggle}
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2, display: { sm: "flex", md: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Link to="/" style={{ color: "white" }}>
						<Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
							Estuary
						</Typography>
					</Link>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
					</Search>
					<Box sx={{ flexGrow: 1 }} />
					{userRole === "guest" ? (
						<>
							<Box sx={{ display: { xs: "none", md: "flex" } }}>
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
					) : (
						<>
							<Box sx={{ display: { xs: "none", md: "flex" } }}>
								<IconButton size="large" aria-label="show 17 new notifications" color="inherit">
									<Badge badgeContent={17} color="error">
										<NotificationsIcon />
									</Badge>
								</IconButton>
								<IconButton size="large" aria-label="show 17 new notifications" color="inherit">
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
							<Box sx={{ display: { xs: "flex", md: "none" } }}>
								<IconButton
									size="large"
									aria-label="show more"
									aria-controls={mobileMenuId}
									aria-haspopup="true"
									onClick={handleMobileMenuOpen}
									color="inherit"
								>
									<MoreIcon />
								</IconButton>
							</Box>
						</>
					)}
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</>
		// </Box>
	);
}
