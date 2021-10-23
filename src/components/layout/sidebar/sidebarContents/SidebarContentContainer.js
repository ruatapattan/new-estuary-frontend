import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WavesIcon from "@mui/icons-material/Waves";
import { useLocation } from "react-router";
import { useState } from "react";
import SidebarNavHeader from "./SidebarNavHeader";
import SidebarNavigation from "./sidebarContentItems/SidebarNavigation";
import SidebarPeople from "./sidebarContentItems/SidebarPeople";
import { Typography } from "@mui/material";
import SidebarCommunity from "./sidebarContentItems/SidebarCommunity";

// const navArr = ["Home", "Marketplace", "Ranking", "Community"];

function SidebarContentContainer() {
	const [isShowing, setIsShowing] = useState("Navigation");
	const location = useLocation();
	const path = location.pathname;

	// console.log("sidebarpath", path);

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
				<List
					className="listttttttttt"
					sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignitem: "center" }}
				>
					<SidebarNavHeader isShowing={isShowing} setIsShowing={setIsShowing} />
					<Divider />
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
