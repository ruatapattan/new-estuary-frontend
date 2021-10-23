import { Avatar, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ForumIcon from "@mui/icons-material/Forum";
import GroupIcon from "@mui/icons-material/Group";
import { styled } from "@mui/system";

const communityArr = [
	{
		name: "cgi",
		profilePic: "https://res.cloudinary.com/dbaavttgh/image/upload/v1634099288/nps3akzuq75qpmgvddk3.png",
	},
	{
		name: "jake's fanclub",
	},
	{
		name: "yenkins advocates",
	},
	{
		name: "songwiriting105",
		profilePic: "https://res.cloudinary.com/dbaavttgh/image/upload/v1634107021/biaqxtxz0b47ndc6ybpj.jpg",
	},
];

function SidebarCommunity() {
	const PeopleItem = styled(ListItem)(({ theme }) => ({
		// backgroundColor: alpha(theme.palette.common.white, 0.15),
		width: "100%",
		color: theme.palette.text.secondary,
	}));

	return (
		<>
			<List>
				{communityArr.map((item, index) => (
					<PeopleItem button key={item}>
						<ListItemIcon>
							{item.profilePic ? (
								<Avatar sx={{ background: "inherit" }} src={item.profilePic} />
							) : (
								<Avatar sx={{ background: "inherit" }}>
									<GroupIcon />
								</Avatar>
							)}
						</ListItemIcon>
						<ListItemText primary={item.name} />
					</PeopleItem>
				))}
			</List>
		</>
	);
}

export default SidebarCommunity;
