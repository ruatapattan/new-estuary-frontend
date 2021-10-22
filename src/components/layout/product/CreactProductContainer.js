import React from "react";
import { Box } from "@mui/system";
import CreateProductForm from "./CreateProductForm";
function CreactProductContainer() {
  return (
    <Box
      flexWrap="wrap"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {/* <SideBarProfileL /> */}
      <CreateProductForm />
    </Box>
  );
}

export default CreactProductContainer;
