// import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import { removeToken } from "../../../services/localStorage";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { SidebarContext } from "../../../contexts/SidebarContext";
import axios from "../../../config/axios";
import DesktopMenu from "./headerMenus/DesktopMenu";
import GuestNav from "./headerDesktopNavs/GuestNav";
import UserNav from "./headerDesktopNavs/UserNav";
import LogMenu from "./headerMenus/LogMenu";
import ChatContainer from "../../chat/ChatContainer";

import CreateCommunityBackdrop from "./createCommunity/CreateCommunityBackdrop";
import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, MenuItem } from "@mui/material";
import { ChatContext } from "../../../contexts/ChatContext";
import SearchResultContainer from "./headerMenus/search/SearchResultContainer";
import { SocketContext } from "../../../contexts/SocketContext";

const MOCK_CHAT = [
	{
		name: "Jane",
		content:
			" — I'll be in your neighborhood doing errands this I'll be in your neighborhood	doing errands this I'll be in your neighborhood doing errands this",
		profilePic: "",
		chatRoomId: "1",
	},
	{
		name: "Andy",
		content:
			" — Wish I could come, but I'm out of town this I'll be in your neighborhood doing errands this I'll be in your neighborhood doing errands this",
		profilePic: "",
		chatRoomId: "2",
	},
	{
		name: "Sarah",
		content: " — Do you have Paris recommendations? Have you ever…",
		profilePic: "",
		chatRoomId: "3",
	},
];

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
	const { chatRoomInfo } = useContext(ChatContext);
	const { handleDrawerToggle } = useContext(SidebarContext);
	const { userRole, user, setUserRole, setUser } = useContext(AuthContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const [anchorChatLogEl, setAnchorChatLogEl] = useState(null);
	const [anchorNotificationLogEl, setAnchorNotificationLogEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
	const [openBackdrop, setOpenBackdrop] = useState(false);
	const history = useHistory();
	const [searchKeyword, setSearchKeyword] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const { resetNotificationBadge } = useContext(SocketContext);
	// const isMenuOpen = Boolean(anchorEl);
	// const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const location = useLocation();
	const path = location.pathname;

	// console.log(chatRoomInfo);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};
	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	// const handleMobileMenuOpen = (event) => {
	// 	setMobileMoreAnchorEl(event.currentTarget);
	// };

	//chat toggle
	const handleChatLogMenuOpen = (event) => {
		setAnchorChatLogEl(event.currentTarget);
	};

	const handleChatLogMenuClose = () => {
		setAnchorChatLogEl(null);
	};

	//notification toggle
	const handleNotificationMenuOpen = (event) => {
		resetNotificationBadge();
		setAnchorNotificationLogEl(event.currentTarget);
	};

	const handleNotificationMenuClose = () => {
		setAnchorNotificationLogEl(null);
	};

	const handleCloseBackdrop = () => {
		setOpenBackdrop(false);
	};
	const handleToggleBackdrop = () => {
		handleMenuClose();
		setOpenBackdrop(!openBackdrop);
	};

	const handleClickSignOut = async (e) => {
		e.preventDefault();
		removeToken();
		setUser(null);
		setUserRole("guest");
		history.push("/login");
		window.location.reload();
	};

	// search handling
	useEffect(() => {
		if (searchKeyword !== "") {
			const search = async () => {
				const searched = await axios.get(`/header/search/product/${searchKeyword}`);
				setSearchResult(searched.data.searchResult);
			};
			search();
		}
	}, [searchKeyword]);

	const handleInputSearch = (e) => {
		setSearchKeyword(e.target.value);
	};
	console.log(`result`, searchResult);

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
					<Link href="/" style={{ color: "white", textDecoration: "none" }}>
						<Typography variant="h6" noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
							Estuary
						</Typography>
					</Link>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
							value={searchKeyword}
							onChange={handleInputSearch}
						/>
						{searchKeyword !== "" && <SearchResultContainer searchResult={searchResult} />}
					</Search>
					<Box sx={{ flexGrow: 1 }} />
					{userRole === "guest" ? (
						<GuestNav />
					) : (
						<UserNav
							handleProfileMenuOpen={handleProfileMenuOpen}
							// handleMobileMenuOpen={handleMobileMenuOpen}
							handleChatLogMenuOpen={handleChatLogMenuOpen}
							handleNotificationMenuOpen={handleNotificationMenuOpen}
						/>
					)}
				</Toolbar>
			</AppBar>

			{/* currently unused */}
			{/* <MobileMenu
				mobileMoreAnchorEl={mobileMoreAnchorEl}
				isMobileMenuOpen={isMobileMenuOpen}
				handleMobileMenuClose={handleMobileMenuClose}
				handleClickSignOut={handleClickSignOut}
				handleChatLogMenuOpen={handleChatLogMenuOpen}
			/> */}
			<DesktopMenu
				anchorEl={anchorEl}
				handleMenuClose={handleMenuClose}
				handleClickSignOut={handleClickSignOut}
				handleToggleBackdrop={handleToggleBackdrop}
			/>

			{/* for chat */}
			<LogMenu
				log={MOCK_CHAT}
				anchorLogEl={anchorChatLogEl}
				handleLogMenuClose={handleChatLogMenuClose}
				type="chat"
			/>

			{/* for notification */}
			<LogMenu
				anchorLogEl={anchorNotificationLogEl}
				handleLogMenuClose={handleNotificationMenuClose}
				type="notification"
			/>
			{Object.keys(chatRoomInfo).length !== 0 && <ChatContainer />}
			<CreateCommunityBackdrop openBackdrop={openBackdrop} handleCloseBackdrop={handleCloseBackdrop} />
		</>
		// </Box>
	);
}
