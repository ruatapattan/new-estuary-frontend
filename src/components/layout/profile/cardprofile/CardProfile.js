import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import { Box, display } from "@mui/system";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
function CardProfile({ productName, picProduct, price, description }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card
      sx={{
        width: { xs: "10%", sm: "20%", md: "30%" },
        // height: { xs: '10%', sm: '20%', md: '30%' },
        margin: 2,
        display: "flex",
        flexWrap: "wrap",
        minWidth: "250px",
      }}
    >
      <CardActionArea>
        <CardHeader
          action={
            <div>
              <Button
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
              </Menu>
            </div>
          }
        />

        <CardMedia
          component="img"
          height="194"
          image={picProduct}
          alt="Paella dish"
        />

        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              color="text.primary"
              gutterBottom
              variant="h5"
              component="div"
            >
              {productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              By: THEVinci
            </Typography>
          </Box>
          <Box>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="body1"
              component="div"
            >
              {price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {"500"}$
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        sx={{
          padding: 0,
          display: "flex",
          justifyContent: "space-between",

          paddingX: "0.5rem",
          width: "100%",
        }}
      >
        <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon sx={{ fontSize: "1.5rem" }} />
            <Typography>1.1M</Typography>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </Box>
        <Box>3 Days Ago</Box>
      </CardActions>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          paddingBottom: "0.5rem",
        }}
      >
        {description}
      </Typography>
    </Card>
  );
}
{
}

export default CardProfile;
