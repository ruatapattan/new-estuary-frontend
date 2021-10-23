import { Avatar, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ForumIcon from "@mui/icons-material/Forum";
import { styled } from "@mui/system";

const pplArr = [
	{
		name: "james",
		profilePic: "https://res.cloudinary.com/dbaavttgh/image/upload/v1634099288/nps3akzuq75qpmgvddk3.png",
	},
	{
		name: "jane",
	},
	{
		name: "jess",
	},
	{
		name: "jake",
		profilePic: "https://res.cloudinary.com/dbaavttgh/image/upload/v1634107021/biaqxtxz0b47ndc6ybpj.jpg",
	},
	{
		name: "mike",
	},
	{
		name: "rachael",
	},
	{
		name: "sandra",
	},
	{
		name: "james",
	},
	{
		name: "james",
	},
	{
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
					<PeopleItem button key={item}>
						<ListItemIcon>
							<Avatar sx={{ background: "inherit" }} src={item.profilePic} />
						</ListItemIcon>
						<ListItemText primary={item.name} />
					</PeopleItem>
				))}
			</List>
		</>
	);
}

export default SidebarPeople;
