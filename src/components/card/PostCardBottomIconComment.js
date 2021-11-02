import React from 'react';
import Grid from '@mui/material/Grid';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Typography from '@mui/material/Typography';
import { useState, useContext } from 'react';

function PostCardBottomIconComment({ comment }) {
  // console.log(comment);
  const [openMainComment, setMainComment] = useState(false);

  return (
    <>
      {/* {comment.map((commentItem) => ( */}
      <Grid item>
        <ChatBubbleOutlineOutlinedIcon />
        <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
          {/* 5 */}
          {comment.length}
          {/* {commentItem.lenght} */}
        </Typography>
      </Grid>
      {/* ))} */}
    </>
  );
}

export default PostCardBottomIconComment;