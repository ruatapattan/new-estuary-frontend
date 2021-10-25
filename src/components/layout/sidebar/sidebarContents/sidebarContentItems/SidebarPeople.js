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

const pplArr = [
	{
		id: "1",
		name: "james",
		profilePic: "https://res.cloudinary.com/dbaavttgh/image/upload/v1634099288/nps3akzuq75qpmgvddk3.png",
	},
	{
		id: "2",
		name: "jane",
	},
	{
		id: "3",
		name: "jess",
	},
	{
		id: "4",
		name: "jake",
		profilePic: "https://res.cloudinary.com/dbaavttgh/image/upload/v1634107021/biaqxtxz0b47ndc6ybpj.jpg",
	},
	{
		id: "5",
		name: "mike",
	},
	{
		id: "6",
		name: "rachael",
	},
	{
		id: "7",
		name: "sandra",
	},
	{
		id: "8",
		name: "james",
	},
	{
		id: "9",
		name: "james",
	},
	{
		id: "10",
		name: "james",
	},
];

function SidebarPeople() {
	const PeopleItem = styled(ListItem)(({ theme }) => ({
		// backgroundColor: alpha(theme.palette.common.white, 0.15),
		width: "100%",
		color: theme.palette.text.secondary,
	}));

	return (
		<>
			<List>
				{pplArr.map((item, index) => (
					<SidebarPeopleItem type="people" item={item} />
				))}
			</List>
		</>
	);
}

export default SidebarPeople;
