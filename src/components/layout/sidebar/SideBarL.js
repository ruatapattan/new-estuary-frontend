import { useContext } from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import { styled } from "@mui/system";
import { SidebarContext } from "../../../contexts/SidebarContext";
import SidebarContentContainer from "./sidebarContents/SidebarContentContainer";
import { GradientDrawer } from "../../../style";

const drawerWidth = "240px";

export default function SideBar({ type }) {
	const { handleDrawerToggle, mobileOpen } = useContext(SidebarContext);

	return (
		// <Box sx={{ zIndex: "1", marginRight: "500px" }} className="BoxBarrrrrr">
		<>
			<CssBaseline />

			<GradientDrawer
				className="drawerDiv"
				sx={{
					// marginTop: "5vh",
					// width: drawerWidth,
					width: { xs: "100vw", sm: drawerWidth },

					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
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
				<SidebarContentContainer type={type} />
			</GradientDrawer>
			<GradientDrawer
				className="drawerDiv"
				sx={{
					// marginTop: "5vh",
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
					display: { xs: "none", sm: "none", md: "flex" },
					// background: "red !important",
				}}
				variant="permanent"
				anchor="left"
			>
				<SidebarContentContainer type={type} />
			</GradientDrawer>
		</>
		//</Box>
	);
}
