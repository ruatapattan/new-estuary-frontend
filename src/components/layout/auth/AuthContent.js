import React from "react";
import { Button, Grid, Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";

import { GradientBox } from "../../../style";
import LoginInputForm from "./login/LoginInputForm";
import SignupInputForm from "./signup/SignupInputForm";

function AuthContent({ pageType }) {
	const hide = { display: { xs: "none", sm: "flex" } };

	return (
		<Grid container spacing={0} sx={{ height: "100%" }} justifyContent="center">
			<Grid item xs={6} sx={{ width: "100%", ...hide }}>
				<GradientBox
					sx={{
						height: "100%",
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					{pageType === "signup" ? (
						<>
							<Typography
								variant="h4"
								sx={{ width: "100%", wordWrap: "break-word", p: 1, color: "white" }}
							>
								JOIN THE LARGEST ART COMMUNITY IN THE WORLD
							</Typography>
							<Typography sx={{ width: "100%", wordWrap: "break-word", p: 1, color: "white" }}>
								Get free access to 370 million pieces of art. Showcase, promote, sell & share your work
								with over 61 million members.
							</Typography>
						</>
					) : (
						<>
							<Typography
								variant="h4"
								sx={{ width: "100%", wordWrap: "break-word", p: 1, color: "white" }}
							>
								WELCOME TO ESTUARY
							</Typography>
							<Typography sx={{ width: "100%", wordWrap: "break-word", p: 1, color: "white" }}>
								It's nice to see you again! Login to continue to your account.
							</Typography>
						</>
					)}
				</GradientBox>
			</Grid>
			<Grid item xs={12} sm={6} sx={{ p: 1 }}>
				{pageType === "signup" ? <SignupInputForm /> : <LoginInputForm />}
			</Grid>
		</Grid>
	);
}

export default AuthContent;
