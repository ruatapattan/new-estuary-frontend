import React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import RankList from './RankList';
import { Grid } from '@mui/material';
import SideBarL from '../sidebar/SideBarL';

function RankContainer() {
  const buttonStyle = {
    color: 'white',
    width: '25%',
    p: { md: '15px', sm: '15px 10px', xs: '15px 10px' },
    fontSize: { md: 'default', xs: '10px' }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        backgroundColor: '#EFF1F3'
      }}
    >
      <Grid item sx={{ width: { md: '25%', lg: '18%' }, display: { md: 'flex', xs: 'none' } }}>
        <SideBarL />
      </Grid>

      <Box
        sx={{
          // border: '1px solid blue',
          right: '0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: '80px',
          '& > *': {
            mb: '50px'
          }
        }}
      >
        <h1>Trending Creators</h1>

        <Box
          sx={{
            // border: '1px solid red',
            width: { md: '80%', sm: '90%', xs: '90%' },
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
            width: { md: '80%', sm: '90%', xs: '90%' },
            boxShadow: 2
          }}
        >
          {[1, 2, 3, 4, 5].map((text, index) => (
            <>{index % 2 === 0 ? <RankList color={'white'} /> : <RankList color={'#EFF1F3'} />}</>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default RankContainer;
