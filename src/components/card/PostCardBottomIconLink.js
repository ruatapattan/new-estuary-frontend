import React from 'react';
import Grid from '@mui/material/Grid';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Typography from '@mui/material/Typography';
function PostCardBottomIconLink() {
  return (
    <Grid item>
      <ShareOutlinedIcon />
      <Typography sx={{ display: 'inline' }} variant='body2' color='text.secondary'></Typography>
    </Grid>
  );
}

export default PostCardBottomIconLink;
