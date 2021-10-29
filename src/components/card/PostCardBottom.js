import React from 'react';
import Grid from '@mui/material/Grid';

import { useState, useContext } from 'react';
import CreateComment from './CreateComment';
import MainComment from './MainComment';

import { AuthContext } from '../../contexts/AuthContext';
import Button from '@mui/material/Button';
import PostCardBottomIconLike from './PostCardBottomIconLike';
import PostCardBottomIconComment from './PostCardBottomIconComment';
import PostCardBottomIconLink from './PostCardBottomIconLink';
import LinkDialog from './LinkDialog';

function PostCardBottom({ postItem }) {
  const { user } = useContext(AuthContext);
  const [openDialog, setOpenDialog] = React.useState(false);

  // console.log(postItem);

  // const [isShowComment, setIsShowComment] = useState(false);

  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '10px', p: '16px' }}>
        <PostCardBottomIconLike />
        <PostCardBottomIconComment />
        <span onClick={() => setOpenDialog(true)}>
          <PostCardBottomIconLink />
        </span>
        <LinkDialog open={openDialog} setOpen={setOpenDialog} />
      </Grid>
      <CreateComment user={user} postItem={postItem} />
      {/* {openCreateComment ? <CreateComment user={user} postItem={postItem} /> : null} */}

      <MainComment postItem={postItem} />
    </>
  );
}

export default PostCardBottom;
