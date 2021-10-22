import React from "react";
import { Box, minWidth } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import OutlinedInput from "@mui/material/OutlinedInput";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TuneIcon from "@mui/icons-material/Tune";
import { Button, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function ProfileForm() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  return (
    <Box
      className="BOXXXXXXXXX"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      sx={{ width: { xs: "90%", sm: "90%", md: "90%" } }}
      border="5px solid pink"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: { xs: "90%", sm: "90%", md: "90%" } }}
        border="5px solid blue"
        flexWrap="wrap"

        // height="5vh"
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{
              width: "250px",
              height: "48px",
              margin: "2rem",
            }}
          />
        </Search>
        <FormControl sx={{ margin: "2rem", width: 250 }}>
          <InputLabel id="demo-simple-select-label">Single items</InputLabel>
          <Select>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: "2rem", width: 250 }}>
          <InputLabel id="demo-simple-select-label">
            Recently Received
          </InputLabel>
          <Select>
            <MenuItem>1</MenuItem>
            <MenuItem>2</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ width: { xs: "90%", sm: "90%", md: "90%" } }}
      >
        <Card
          sx={{
            width: { xs: "10%", sm: "20%", md: "30%" },
            height: { xs: "10%", sm: "20%", md: "30%" },
            margin: 2,
            display: "flex",
            flexWrap: "wrap",
            minWidth: "250px",
          }}
        >
          <CardActionArea>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon />
                </IconButton>
              }
            />
            <CardMedia
              component="img"
              height="194"
              image="https://picsum.photos/id/237/200/300"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: { xs: "10%", sm: "20%", md: "30%" },
            height: { xs: "10%", sm: "20%", md: "30%" },
            margin: 2,
            display: "flex",
            flexWrap: "wrap",
            minWidth: "250px",
          }}
        >
          <CardActionArea>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon />
                </IconButton>
              }
            />
            <CardMedia
              component="img"
              height="194"
              image="https://picsum.photos/id/237/200/300"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: { xs: "10%", sm: "20%", md: "30%" },
            height: { xs: "10%", sm: "20%", md: "30%" },
            margin: 2,
            display: "flex",
            flexWrap: "wrap",
            minWidth: "250px",
          }}
        >
          <CardActionArea>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon />
                </IconButton>
              }
            />
            <CardMedia
              component="img"
              height="194"
              image="https://picsum.photos/id/237/200/300"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: { xs: "10%", sm: "20%", md: "30%" },
            height: { xs: "10%", sm: "20%", md: "30%" },
            margin: 2,
            display: "flex",
            flexWrap: "wrap",
            minWidth: "250px",
          }}
        >
          <CardActionArea>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon />
                </IconButton>
              }
            />
            <CardMedia
              component="img"
              height="194"
              image="https://picsum.photos/id/237/200/300"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            width: { xs: "10%", sm: "20%", md: "30%" },
            height: { xs: "10%", sm: "20%", md: "30%" },
            margin: 2,
            display: "flex",
            flexWrap: "wrap",
            minWidth: "250px",
          }}
        >
          <CardActionArea>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreHorizIcon />
                </IconButton>
              }
            />
            <CardMedia
              component="img"
              height="194"
              image="https://picsum.photos/id/237/200/300"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}

export default ProfileForm;
