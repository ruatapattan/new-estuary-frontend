import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { styled } from "@mui/system";
import { Button } from "@mui/material";

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)`
	& > div {
		background: rgb(115, 194, 130);
		background: linear-gradient(360deg, rgba(64, 169, 223, 1) 0%, rgba(115, 194, 130, 0.5) 100%);
	}
`;
// const StyledDrawer = styled(Drawer);

export default function SideBar() {
	return (
		<Box sx={{ display: "flex", zIndex: "1" }}>
			<CssBaseline />

			<StyledDrawer
				className="drawerDiv"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
					// background: "red !important",
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<List
						className="listttttttttt"
						sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignitem: "center" }}
					>
						{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
							<ListItem className="itemmmmmmmm" button key={text} sx={{ justifyContent: "center" }}>
								<Button variant="gradient" sx={{ width: "100%" }}>
									<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</Button>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{["All mail", "Trash", "Spam"].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Box>
			</StyledDrawer>
		</Box>
	);
}
