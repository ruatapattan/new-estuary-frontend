import React, { useState } from "react";
import { Box, margin, padding, styled } from "@mui/system";
import { Button, TextField } from "@mui/material";
import SideBarProfileL from "../sidebar/SideBarProfileL";
import ProfileEditForm from "./ProfileEditForm";

function ProfileEditContainer() {
  return (
    <Box
      // className="BOXXXXXXXXX"
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#EFF1F3",
      }}
    >
      <SideBarProfileL />
      <ProfileEditForm />
    </Box>
  );
}

export default ProfileEditContainer;
