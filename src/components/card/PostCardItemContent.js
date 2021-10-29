import React from 'react';

import Avatar from '@mui/material/Avatar';
import { dividerClasses } from '@mui/material';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditDialogPost from './EditDialogPost';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import CardMedia from '@mui/material/CardMedia';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

// =========================== function for carosaul ======================================
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      style={{ ...style, color: '#242A38' }}
      className={className}
      onClick={onClick}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      style={{ ...style, color: '#242A38' }}
      className={className}
      onClick={onClick}
      onClick={onClick}
    />
  );
}

function PostCardItemContent() {
  //===========================  setting carousel ======================================
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ShowEditPost, setShowEditPost] = useState(false);
  const open = Boolean(anchorEl);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditPost = () => {
    setShowEditPost(true);
  };

  return (
    <>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
            sx={{ width: 40, height: 40 }}></Avatar>
        }
        title='Sarah'
        // title={item.User.firstName}
        subheader='September 14, 2016'
        subheader={
          <Typography color='text.disabled' variant='body2'>
            September 14, 2016
            {/* {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(item.createdAt))} */}
          </Typography>
        }
        // {page === 'mypost'? (): (null)}
        action={
          <div>
            <Button
              id='demo-positioned-button'
              aria-controls='demo-positioned-menu'
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              <MoreHorizIcon />
            </Button>
            <Menu
              id='demo-positioned-menu'
              aria-labelledby='demo-positioned-button'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}>
              <MenuItem onClick={() => setOpenDialog(true)}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
            {/* <EditDialogPost open={openDialog} setOpen={setOpenDialog} post={item} /> */}
          </div>
        }
      />

      <CardContent>
        {/* <p> {item.content}</p> */}
        <Typography variant='body2' color='text.secondary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat quaerat quibusdam facilis quisquam
          aliquam nulla veritatis fuga ea nihil.
          {/* {item.content} */}
        </Typography>
      </CardContent>

      <Box
        sx={{
          margin: 'auto',
          backgroundColor: '#EFF1F3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '300px',
          // height: '350px',
        }}>
        <Box
          style={{
            width: '500px',
            backgroundColor: '#EFF1F3',
          }}>
          <Slider {...settings}>
            {/* {item.PostPictures.map((picItem) => ( */}
            <CardMedia
              sx={{ width: '100%', objectFit: 'cover' }}
              component='img'
              // component={type}
              height='300px'
              width='100%'
              //   image={picItem.pic}
              // image={item.PostPicture.pic}
              image='https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
              frameborder='0'
              // image={link}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            />
            {/* ))} */}
          </Slider>
        </Box>

        <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '10px', p: '16px' }}>
          <Grid item>
            <ThumbUpOutlinedIcon />
            <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
              2
            </Typography>
          </Grid>
          <Grid item>
            <ChatBubbleOutlineOutlinedIcon />
            <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
              5
            </Typography>
          </Grid>
          <Grid item>
            <ShareOutlinedIcon />
            <Typography sx={{ display: 'inline' }} variant='body2' color='text.secondary'></Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default PostCardItemContent;
