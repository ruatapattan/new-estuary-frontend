import React from 'react';
import Avatar from '@mui/material/Avatar';
import { purple } from '@mui/material/colors';
function MainCommentAvatar() {
  return (
    <>
      <Avatar
        sx={{ bgcolor: purple[500] }}
        aria-label='recipe'
        src='https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
        sx={{ width: 40, height: 40 }}>
        C
      </Avatar>
    </>
  );
}

export default MainCommentAvatar;
