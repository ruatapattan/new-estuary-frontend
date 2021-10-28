import { border, Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import axios from "../../../config/axios";

import { AuthContext } from "../../../contexts/AuthContext";
function Banner() {
  const Name = styled("div")(({ theme }) => ({
    color: "white",
    padding: theme.spacing(2, 0),
  }));

  let { user } = useContext(AuthContext);

  const [getUser, setGetUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/profile/${user.id}`);
        const resUser = res.data.user;
        setGetUser(resUser);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  console.log(getUser);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "50vh", backgroundColor: "#232836" }}
    >
      <Stack display="flex" justifyContent="center" alignItems="center">
        <Avatar sx={{ width: 120, height: 120 }}>{getUser.profilePic}</Avatar>
        <Name>{getUser.username}</Name>
      </Stack>
    </Box>
  );
}

export default Banner;
