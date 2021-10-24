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
import { styled } from "@mui/system";
import { Button, Grid } from "@mui/material";

import SidebarContentContainer from "./sidebarContents/SidebarContentContainer";
import { GradientDrawer } from "../../../style";
import { SidebarContext } from "../../../contexts/SidebarContext";
import { useContext } from "react";

const drawerWidth = "240px";

// const GradientDrawer = styled(Drawer)`
// 	& > div {
// 		background: rgb(115, 194, 130);
// 		background: linear-gradient(360deg, rgba(34, 189, 205, 1) 0%, rgba(115, 194, 130, 0.5) 100%);
// 	}
// `;
// const GradientDrawer = styled(Drawer);

export default function SideBarProfileL() {
	const { handleDrawerToggle, mobileOpen } = useContext(SidebarContext);

	return (
		<Grid item sx={{ display: { xs: "none", md: "flex" } }}>
			<Box sx={{ display: "flex", position: "relative" }}>
				{/* <CssBaseline /> */}

				{/* <GradientDrawer
					className="drawerDiv"
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						display: { sm: "flex", md: "none" },
						top: "0",
						"& .MuiDrawer-paper": {
							width: drawerWidth,
							boxSizing: "border-box",
							height: "100vh",
							// position: '-webkit-sticky',
							position: "sticky",
							top: "0",
						},
					}}
					// variant="permanent"
					// anchor="left"
				> */}
				<GradientDrawer
					className="drawerDiv"
					sx={{
						// marginTop: "5vh",
						width: drawerWidth,
						flexShrink: 0,
						"& .MuiDrawer-paper": {
							width: { xs: "100vw", sm: drawerWidth },
							boxSizing: "border-box",
						},
						// height: "500px !important",
						display: { sm: "flex", md: "none" },
						// background: "red !important",
					}}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					// anchor="left"
				>
					{/* <Toolbar sx={{ height: "10vh" }} /> */}

					{/* original content */}
					{/* <Box sx={{ overflow: 'auto' }}>
            <Divider />
            <List>
              {menu.map(item => (
                <ListItem button key={item.text} sx={{ color: 'rgba(35, 40, 54, 1)' }}>
                  <ListItemIcon sx={{ color: 'rgba(35, 40, 54, 1)' }}>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box> */}

					<SidebarContentContainer type="profile" />
				</GradientDrawer>
				<GradientDrawer
					className="drawerDiv"
					sx={{
						width: drawerWidth,
						flexShrink: 0,

						display: { sm: "none", md: "flex" },

						top: "0",
						"& .MuiDrawer-paper": {
							width: drawerWidth,
							boxSizing: "border-box",
							height: "100vh",
							// position: '-webkit-sticky',
							position: "sticky",
							top: "0",
						},
					}}
					variant="permanent"
					anchor="left"
				>
					{/* <Toolbar sx={{ height: "10vh" }} /> */}
					<SidebarContentContainer type="profile" />
				</GradientDrawer>
			</Box>
		</Grid>
	);
}
