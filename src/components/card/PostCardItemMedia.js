import React from 'react';
import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import CardMedia from '@mui/material/CardMedia';
// =========================== function for carosaul ======================================

// const photos = [
//   {
//     name: 'Photo 1',
//     url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
//   },
//   {
//     name: 'Photo 2',
//     url: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=945&q=80',
//   },
//   {
//     name: 'Photo 3',
//     url: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80',
//   },
// ];

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

function PostCardItemMedia({
  // PostPictures

  postItem,
}) {
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
  return (
    <Box
      sx={{
        margin: 'auto',
        backgroundColor: '#EFF1F3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
      }}>
      <Box
        style={{
          width: '500px',
          backgroundColor: '#f6f6f6',
        }}>
        <Slider {...settings}>
          {postItem.PostPictures.map((item) => (
            <CardMedia
              sx={{ width: '100%', objectFit: 'contain' }}
              component='img'
              // component={type}
              height='300px'
              width='100%'
              // image={item.url}
              image={item.pic}
              // image='https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
              frameborder='0'
              // image={link}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default PostCardItemMedia;
