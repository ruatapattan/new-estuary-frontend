import { Avatar, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function RankList({ color }) {
  const linkStyle = {
    ml: { md: '0', xs: '30px' },
    background: '-webkit-linear-gradient( rgba(115, 194, 130, 1) 0%, rgba(64, 169, 223, 1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',

    ':hover': {
      background: '-webkit-linear-gradient( rgba(64, 169, 223, 0.5) 100%,rgba(115, 194, 130, 0.5) 0%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  };

  const countLikeStyle = {
    ml: { md: '0', xs: '30px' },
    background: '-webkit-linear-gradient( rgba(115, 194, 130, 1) 0%, rgba(64, 169, 223, 1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  //   const linkStyle = { color: 'rgb(34, 189, 205, 1) ' };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: color,
        p: { md: '15px 30px', xs: '15px 20px' },
        display: 'flex',
        alignItems: 'center'
        // border: '1px solid red'
      }}
    >
      <Box
        sx={{
          width: { md: '35%', xs: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
          //   border: '1px solid red'
        }}
      >
        <Avatar
          aria-label="recipe"
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
          sx={{
            width: '60px',
            height: '60px',
            mr: { md: '15px', xs: '20px' }
          }}
        ></Avatar>
        <p>username</p>
      </Box>

      <Box
        sx={{
          width: { md: '65%', xs: '50%' },
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          alignItems: { md: 'center', xs: 'flex-start' },
          justifyContent: 'space-around'
          //   border: '1px solid green'
        }}
      >
        {/* <Link href="#" underline="hover" sx={linkStyle}>
          community
        </Link> */}
        {/* <Link href="#" underline="hover" sx={linkStyle}>
          collection
        </Link> */}
        <Link href="#" underline="hover" sx={linkStyle}>
          Profile
        </Link>
        <Link href="#" underline="hover" sx={linkStyle}>
          Product
        </Link>
        <Link underline="hover" sx={countLikeStyle}>
          170k
        </Link>
      </Box>
    </Box>
  );
}

export default RankList;
