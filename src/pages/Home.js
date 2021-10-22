import { Button } from '@mui/material';
import React from 'react';
import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/header/Header';
import HomeContainer from '../components/layout/home/HomeContainer';
import SideBar from '../components/layout/sidebar/SideBarL';
import Grid from '@mui/material/Grid';

function Home() {
  const hide = { display: { xs: 'none', md: 'flex' } };
  return (
    <>
      <Grid container sx={{ marginBottom: '30px' }}>
        <Grid item xs={2} sx={{ ...hide }}>
          <SideBar />
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          sx={{
            margin: { xs: 'auto', md: 'initial' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <HomeContainer />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
