import React from "react";

import { Box } from "@mui/system";
import Banner from "../components/layout/profile/Banner";
import CreactProductContainer from "../components/layout/product/CreactProductContainer";
function CreactProduct() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        border="5px solid red"
        // marginLeft="20%"
        width="100%"
      >
        <Banner />
        <CreactProductContainer />
      </Box>
    </>
  );
}

export default CreactProduct;
