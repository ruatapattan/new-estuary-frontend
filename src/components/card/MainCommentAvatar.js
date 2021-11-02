import React from 'react';
import Avatar from '@mui/material/Avatar';
import { purple } from '@mui/material/colors';
function MainCommentAvatar({ profilePic }) {
  return (
    <>
      <Avatar aria-label='profile' src={profilePic} sx={{ width: 40, height: 40 }}></Avatar>
    </>
  );
}

export default MainCommentAvatar;
