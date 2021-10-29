import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
function PostCardBottomIconLike() {
  return (
    <Grid item>
      <ThumbUpOutlinedIcon />
      <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
        2
      </Typography>
    </Grid>
  );
}

export default PostCardBottomIconLike;
