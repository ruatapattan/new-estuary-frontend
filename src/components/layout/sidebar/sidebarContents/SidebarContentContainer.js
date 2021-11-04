import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WavesIcon from "@mui/icons-material/Waves";
import { useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import SidebarNavHeader from "./SidebarNavHeader";
import SidebarNavigation from "./sidebarContentItems/SidebarNavigation";
import SidebarPeople from "./sidebarContentItems/SidebarPeople";
import { Button, Collapse, Typography } from "@mui/material";
import SidebarCommunity from "./sidebarContentItems/SidebarCommunity";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ForumIcon from "@mui/icons-material/Forum";
import StarsIcon from "@mui/icons-material/Stars";
import PersonIcon from "@mui/icons-material/Person";
import SidebarFilter from "./sidebarContentItems/SidebarFilter";
import { SidebarContext } from "../../../../contexts/SidebarContext";
import { UserContext } from "../../../../contexts/UserContext";
import { AuthContext } from "../../../../contexts/AuthContext";
import { styled } from "@mui/system";
import SidebarPeopleItem from "./sidebarContentItems/sidebarPeopleItem/SidebarPeopleItem";
import axios from "../../../../config/axios";

// const navArr = ["Home", "Marketplace", "Ranking", "Community"];

function SidebarContentContainer({ type }) {
	const PeopleItem = styled(ListItem)(({ theme }) => ({
		// backgroundColor: alpha(theme.palette.common.white, 0.15),
		width: "100%",
		color: theme.palette.text.secondary,
	}));

	const NavButton = styled(Button)(({ theme }) => ({
		// backgroundColor: alpha(theme.palette.common.white, 0.15),
		width: "100%",
		color: theme.palette.text.secondary,
		"&:hover": {
			backgroundColor:
				isShowing === "Navigation"
					? theme.palette.secondary.main
					: isShowing === "People"
					? theme.palette.secondary.light
					: theme.palette.text.primary,
			color: "white",
		},
	}));
	const params = useParams();
	// console.log(`params`, params);
	const [open, setOpen] = useState(false);
	const [communityMemberList, setCommunityMemberList] = useState([]);
	const handleClickOpenMemberList = () => {
		setOpen(!open);
	};
	const { chooseNavProfile, setChooseNavProfile } = useContext(SidebarContext);
	const { isShowing, setIsShowing } = useContext(UserContext);
	const { user } = useContext(AuthContext);
	const menu = [
		// { text: "Favorite", icon: FavoriteIcon },
		{
			text: chooseNavProfile === "Create" ? "Profile" : "Create",
			icon: chooseNavProfile === "Create" ? PersonIcon : NoteAddIcon,
		},
		{
			text: chooseNavProfile === "Editprofile" ? "Profile" : "Editprofile",
			icon: chooseNavProfile === "Editprofile" ? PersonIcon : SettingsIcon,
		},
		{
			text: chooseNavProfile === "Wallet" ? "Profile" : "Wallet",
			icon: chooseNavProfile === "Wallet" ? PersonIcon : AccountBalanceWalletIcon,
		},
	];

	const location = useLocation();
	const path = location.pathname;

	// console.log("sidebarpath", path);

	useEffect(() => {
		if (type === "community") {
			const fetch = async () => {
				const result = await axios.get(`/community/${params.id}/allMember`);
				setCommunityMemberList(result.data.communityMemberList);
			};
			fetch();
		}
	}, [type]);

	function handleClickScrollBottom() {
		window.scroll({
			top: document.body.offsetHeight,
			left: 0,
			behavior: "smooth",
		});
	}

	return (
		<>
			<Toolbar />
			<Box sx={{ overflow: "overlay" }}>
				{type === "community" && (
					<>
						<ListItem
							sx={{ display: "flex", justifyContent: "center" }}
							onClick={handleClickOpenMemberList}
						>
							<NavButton variant="text">
								<ListItemText primary={`Member List (${communityMemberList.length})`} />
								{open ? <ExpandLess /> : <ExpandMore />}
							</NavButton>
						</ListItem>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								{/* <p>sdss</p> */}
								{communityMemberList.map((item) => (
									<SidebarPeopleItem type="people" item={item} />
								))}
							</List>
						</Collapse>

						<Divider />
					</>
				)}
				{type === "profile" && +params.id === user?.id && (
					<>
						<List>
							<ListItem>
								<ListItemText
									sx={{ textAlign: "center", color: "text.secondary" }}
									primary="Manage Profile"
								/>
							</ListItem>
							{menu.map((item) => (
								<ListItem button key={item.text} sx={{ color: "rgba(35, 40, 54, 1)" }}>
									{/* <ListItemIcon sx={{ color: "rgba(35, 40, 54, 1)" }}>
								<item.icon />
							</ListItemIcon>
							<ListItemText primary={item.text} /> */}

									<Button
										onClick={() =>
											setChooseNavProfile(
												item.text === "Create"
													? "Create"
													: item.text === "Editprofile"
													? "Editprofile"
													: item.text === "Wallet"
													? "Wallet"
													: "Profile"
											)
										}
										variant="gradient2"
										sx={{
											textTransform: "none",
											width: "100%",
											color: "primary",
											"&:hover": { color: "#fff" },
										}}
									>
										<ListItemIcon
											sx={{
												color: "inherit",
											}}
										>
											<item.icon />
										</ListItemIcon>
										<ListItemText primary={item.text} />
									</Button>
								</ListItem>
							))}
						</List>
						<Divider />
					</>
				)}
				{type === "marketplace" && (
					<>
						<SidebarFilter />
					</>
				)}
				<List
					className="listttttttttt"
					sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignitem: "center" }}
				>
					<SidebarNavHeader isShowing={isShowing} setIsShowing={setIsShowing} />
					{/* <Divider /> */}
					{isShowing === "Navigation" ? (
						<SidebarNavigation />
					) : isShowing === "People" ? (
						<SidebarPeople />
					) : (
						<SidebarCommunity />
					)}
				</List>
			</Box>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "center",
					alignitem: "center",
					cursor: "pointer",
				}}
				onClick={handleClickScrollBottom}
			>
				<KeyboardArrowDownIcon fontSize="large" color="primary" />
				<Typography color="text.secondary">Scroll To Bottom</Typography>
			</Toolbar>
		</>
	);
}

export default SidebarContentContainer;
