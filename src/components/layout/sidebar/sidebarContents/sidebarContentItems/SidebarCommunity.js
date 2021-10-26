import { Avatar, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ForumIcon from "@mui/icons-material/Forum";
import GroupIcon from "@mui/icons-material/Group";
import { styled } from "@mui/system";
import { useContext } from "react";
import SidebarPeopleItem from "./sidebarPeopleItem/SidebarPeopleItem";
import { UserContext } from "../../../../../contexts/UserContext";

const communityArr = [
	{
		id: "1",
		name: "cgi",
		profilePic: "https://res.cloudinary.com/dbaavttgh/image/upload/v1634099288/nps3akzuq75qpmgvddk3.png",
	},
	{
		id: "2",
		name: "jake's fanclub",
	},
	{
		id: "3",
		name: "yenkins advocates",
	},
	{
		id: "4",
		name: "songwiriting105",
		profilePic: "https://res.cloudinary.com/dbaavttgh/image/upload/v1634107021/biaqxtxz0b47ndc6ybpj.jpg",
	},
];

function SidebarCommunity() {
	const { sidebarSocialList } = useContext(UserContext);

	const PeopleItem = styled(ListItem)(({ theme }) => ({
		// backgroundColor: alpha(theme.palette.common.white, 0.15),
		width: "100%",
		color: theme.palette.text.secondary,
	}));

	return (
		<>
			<List>
				{sidebarSocialList.map((item, index) => (
					<SidebarPeopleItem type="community" item={item} />
				))}
			</List>
		</>
	);
}

export default SidebarCommunity;
