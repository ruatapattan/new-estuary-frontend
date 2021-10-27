import React from "react";
import { Box } from "@mui/system";
import CreateProductForm from "./CreateProductForm";
import SideBarProfileL from "../sidebar/SideBarProfileL";
function CreactProductContainer() {
	return (
		<Box
			flexWrap="wrap"
			sx={{
				width: "80%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#EFF1F3",
			}}
		>
			{/* <SideBarProfileL /> */}
			<CreateProductForm />
		</Box>
	);
}

export default CreactProductContainer;
