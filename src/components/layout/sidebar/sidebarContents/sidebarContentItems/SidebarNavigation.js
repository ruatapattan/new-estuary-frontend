import { Button, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ForumIcon from "@mui/icons-material/Forum";
import { useHistory, Link } from "react-router-dom";
const navArr = [
	{
		name: "Timeline",
		icon: WavesIcon,
		path: "/",
	},
	{
		name: "Marketplace",
		icon: ShoppingCartIcon,
		path: "/marketplace",
	},
	{
		name: "Ranking",
		icon: TrendingUpIcon,
		path: "/rank",
	},
];

function SidebarNavigation() {
	const history = useHistory();
	return (
		<>
			{navArr.map((item, index) => (
				<Link to={item.path}>
					<ListItem className="itemmmmmmmm" button key={index} sx={{ justifyContent: "center" }}>
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
				</Link>
			))}
		</>
	);
}

export default SidebarNavigation;
