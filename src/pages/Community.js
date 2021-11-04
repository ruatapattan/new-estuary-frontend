import React from "react";
import SideBarL from "../components/layout/sidebar/SideBarL";
import Grid from "@mui/material/Grid";
import CommunityContent from "../components/layout/community/CommunityContent";

function Community() {
	const hide = { display: { xs: "none", md: "flex" } };
	return (
		<>
			<Grid container sx={{ marginBottom: "30px" }}>
				<Grid item xs={2} sx={{ ...hide }}>
					<SideBarL type="community" />
				</Grid>
				<Grid
					item
					xs={12}
					md={10}
					sx={{
						margin: { xs: "auto", md: "initial" },
						display: "flex",
						justifyContent: "center",
						alignItems: "flex-start",
					}}
				>
					<CommunityContent />
				</Grid>
			</Grid>
		</>
	);
}

export default Community;
