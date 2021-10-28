import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useState } from 'react';
function PostCardBottom() {
  const [isShowComment, setIsShowComment] = useState(false);

  const showComment = () => {
    setIsShowComment(true);
  };
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '10px', p: '16px' }}>
      <Grid item>
        <ThumbUpOutlinedIcon />
        <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
          2
        </Typography>
      </Grid>
      <Grid item>
        <ChatBubbleOutlineOutlinedIcon onClick={showComment} />
        <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
          5
        </Typography>
      </Grid>
      <Grid item>
        <ShareOutlinedIcon />
        <Typography sx={{ display: 'inline' }} variant='body2' color='text.secondary'></Typography>
      </Grid>
    </Grid>
  );
}

export default PostCardBottom;
