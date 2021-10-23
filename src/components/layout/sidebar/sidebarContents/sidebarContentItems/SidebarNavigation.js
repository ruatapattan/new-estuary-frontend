import { Button, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ForumIcon from "@mui/icons-material/Forum";
const navArr = [
	{
		name: "Timeline",
		icon: WavesIcon,
	},
	{
		name: "Marketplace",
		icon: ShoppingCartIcon,
	},
	{
		name: "Ranking",
		icon: TrendingUpIcon,
	},
];

function SidebarNavigation() {
	return (
		<>
			{navArr.map((item, index) => (
				<ListItem className="itemmmmmmmm" button key={item} sx={{ justifyContent: "center" }}>
					<Button
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
						<ListItemText primary={item.name} />
					</Button>
				</ListItem>
			))}
		</>
	);
}

export default SidebarNavigation;
