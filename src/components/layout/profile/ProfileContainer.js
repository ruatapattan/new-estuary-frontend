import React from "react";
import { Box } from "@mui/system";
import SideBarProfileL from "../sidebar/SideBarProfileL";
import ProfileForm from "../profile/ProfileForm";
import Banner from "./Banner";
function ProfileContainer() {
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
      <ProfileForm />
    </Box>
  );
}

export default ProfileContainer;
