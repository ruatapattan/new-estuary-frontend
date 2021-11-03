import React from 'react';
import Stack from '@mui/material/Stack';

import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';

import { useState, useEffect } from 'react';
import axios from '../../config/axios';
import MainCommentAvatar from './MainCommentAvatar';
import MainCommentContent from './MainCommentContent';
import MainCommentbottom from './MainCommentbottom';

function MainComment({ postItem, user, comment, setToggleEditComment, setToggleDeleteComment }) {
  // console.log(postItem);
  // console.log(comment);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openDialog, setOpenDialog] = React.useState(false);

  // const [comment, setComment] = useState([]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   const fetchComment = async () => {
  //     try {
  //       const res = await axios.get(`/comment/${postItem.id}`);
  //       setComment(res.data.comment);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchComment();
  // }, []);

  // console.log(comment);

  return (
    <>
      {comment.map((commentItem) => (
        <Stack>
          <Stack justifyContent='space-between' direction='row' spacing={1} mb='10px' alignItems='center' p='10px'>
            <MainCommentAvatar profilePic={commentItem.User.profilePic} />

            <Paper sx={{ padding: '5px', width: '100%', background: '#f6f6f6' }} elevation={3}>
              <MainCommentContent
                content={commentItem.content}
                name={commentItem.User.username}
                time={commentItem.createdAt}
              />

              <Grid container spacing={5} pt='15px'>
                <MainCommentbottom
                  commentItem={commentItem}
                  user={user}
                  setToggleEditComment={setToggleEditComment}
                  setToggleDeleteComment={setToggleDeleteComment}
                />
              </Grid>
            </Paper>
          </Stack>
        </Stack>
      ))}
    </>
  );
}

export default MainComment;
