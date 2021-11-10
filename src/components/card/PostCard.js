import React from 'react';

import Grid from '@mui/material/Grid';

import PostCardItem from './PostCardItem';

function PostCard({ postItem, setTogglePostEdit, setTogglePostDelete }) {
  return (
    <>
      <Grid container sx={{ mb: '20px' }}>
        <Grid item xs={12}>
          <PostCardItem
            postItem={postItem}
            setTogglePostEdit={setTogglePostEdit}
            setTogglePostDelete={setTogglePostDelete}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default PostCard;
