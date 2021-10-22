import React from "react";
import { Box } from "@mui/system";
import Banner from "../components/layout/profile/Banner";
import ProfileContainer from "../components/layout/profile/ProfileContainer";

function Profile() {
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
        <ProfileContainer />
      </Box>
    </>
  );
}

export default Profile;
