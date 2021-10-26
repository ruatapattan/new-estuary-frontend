import { CardMedia, Grid, Typography } from '@mui/material';
import { Box, flexbox } from '@mui/system';
import React from 'react';
import CreateComment from '../../card/CreateComment';
import MainComment from '../../card/MainComment';
import SubComment from '../../card/SubComment';
import SideBarL from '../sidebar/SideBarL';
import ProductDetail from './ProductDetail';
import ProductShow from './ProductShow';

// const Product = [
//   {
//     coverPic:
//       'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
//     name: 'Product 1',
//     externalLink: '',
//     description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     price: '100.00',
//     hashtag: ['aaa1', 'aaa2', 'aaa3'],
//     createAt: '20-11-2021',
//     User: {
//       userName: 'Anna',
//       profilePic:
//         'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
//     }
//   }
// ];

// const Comment = [
//   {
//     id: '1',
//     content: 'aaaaa',
//     createAt: '20-11-2021',
//     pic: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
//     User: {
//       profilePic:
//         'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
//     }
//   },
//   {
//     id: '2'
//   }
// ];

function ProductContainer() {
  return (
    <Box
      sx={{
        width: '100%',
        // height: '100vh',
        display: 'flex',
        backgroundColor: '#EFF1F3'
      }}
    >
      <Grid item sx={{ width: { md: '25%', lg: '18%' }, display: { md: 'flex', xs: 'none' } }}>
        <SideBarL />
      </Grid>

      <Box
        sx={{
          width: '100%',
          backgroundColor: '#EFF1F3',
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid red'
          // p: '80px 0px'
        }}
      >
        <Box
          sx={{
            width: { md: '80%', xs: '100%' },
            backgroundColor: 'white',
            boxShadow: 2,
            p: { md: '50px', xs: '50px 0px' }
          }}
        >
          <ProductShow />

          <ProductDetail />

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              // border: '1px solid red',
              p: { md: '0px', xs: '20px' },
              justifyContent: 'flex-start',
              '& p': {
                m: '20px 50px'
              }
            }}
          >
            <p>comment</p>
            <CreateComment />
            <MainComment />
            <SubComment />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductContainer;
