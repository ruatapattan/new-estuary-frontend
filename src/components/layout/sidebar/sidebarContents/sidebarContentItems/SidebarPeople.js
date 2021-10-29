import {
	Avatar,
	Button,
	Collapse,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Menu,
} from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ForumIcon from "@mui/icons-material/Forum";
import { Box, styled } from "@mui/system";
import { useContext, useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextsmsIcon from "@mui/icons-material/Textsms";
import SidebarPeopleItem from "./sidebarPeopleItem/SidebarPeopleItem";
import { UserContext } from "../../../../../contexts/UserContext";

function SidebarPeople() {
	const { sidebarSocialList } = useContext(UserContext);

	console.log(sidebarSocialList);

	const PeopleItem = styled(ListItem)(({ theme }) => ({
		// backgroundColor: alpha(theme.palette.common.white, 0.15),
		width: "100%",
		color: theme.palette.text.secondary,
	}));

	return (
		<>
			<List>
				{sidebarSocialList.map((item, index) => (
					<SidebarPeopleItem type="people" item={item} />
				))}
			</List>
		</>
	);
}

export default SidebarPeople;
