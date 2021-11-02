import React from 'react';
import Grid from '@mui/material/Grid';
import SideBar from '../components/layout/sidebar/SideBarL';
import PostContainer from '../components/post/PostContainer';

function Post() {
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
          <PostContainer />
        </Grid>
      </Grid>
    </>
  );
}

export default Post;
