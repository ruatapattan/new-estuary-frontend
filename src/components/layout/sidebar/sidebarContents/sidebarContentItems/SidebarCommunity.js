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
