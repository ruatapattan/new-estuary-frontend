import { border, Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import axios from "../../../config/axios";
import AddBoxIcon from "@mui/icons-material/AddBox";
import StarIcon from "@mui/icons-material/Star";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
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
        <Name>
          {getUser.username}
          <IconButton>
            <StarIcon sx={{ fontSize: "2rem", color: "yellow" }} />
          </IconButton>
        </Name>

        <IconButton aria-label="add to favorites">
          <AddBoxIcon sx={{ fontSize: "1.5rem", color: "red" }} />
          <Typography sx={{ color: "white" }}>join community</Typography>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <AddBoxIcon sx={{ fontSize: "1.5rem", color: "red" }} />
          <Typography sx={{ color: "white" }}>visit community</Typography>
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Banner;
