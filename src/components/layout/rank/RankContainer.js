import React from 'react';
import { Box, display } from '@mui/system';
import { Button } from '@mui/material';

function RankContainer() {
  const buttonStyle = { color: 'white', width: '25%', p: '15px' };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px',
        '& > *': {
          mb: '50px'
        }
      }}
    >
      <h1>Trending Creators</h1>

      <Box
        sx={{
          border: '1px solid red',
          width: '60%',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Button variant="gradient" sx={buttonStyle}>
          past week
        </Button>
        <Button variant="gradient" sx={buttonStyle}>
          category
        </Button>
        <Button variant="gradient" sx={buttonStyle}>
          Search
        </Button>
      </Box>

      <Box
        sx={{
          border: '1px solid blue',
          width: '60%'
        }}
      ></Box>
    </Box>
  );
}

export default RankContainer;
