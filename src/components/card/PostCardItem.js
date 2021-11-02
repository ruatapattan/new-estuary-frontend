import React from 'react';
import Card from '@mui/material/Card';
import MainComment from './MainComment';
import SubComment from './SubComment';
import CreatComment from './CreateComment';
import PostCardHeader from './PostCardHeader';
import PostCardContent from './PostCardContent';
import PostCardItemMedia from './PostCardItemMedia';
import PostCardBottom from './PostCardBottom';
import { useState } from 'react';
import PostCardItemContent from './PostCardItemContent';

// =========================== function for carousel ======================================

function PostCardItem({ postItem, setTogglePostEdit }) {
  // console.log('xxxx', postItem);
  // const { User, PostPictures, createdAt, content } = postItem;

  return (
    <>
      {/* {post.map((item) => {
        return ( */}
      <Card
        sx={{
          padding: '10px',
        }}>
        <PostCardHeader postItem={postItem} setTogglePostEdit={setTogglePostEdit} />

        <PostCardContent postItem={postItem} />
        {/* <PostCardContent content={content} /> */}

        {/* <PostCardItemMedia PostPictures={PostPictures} /> */}
        <PostCardItemMedia postItem={postItem} />

        <PostCardBottom postItem={postItem} />
        {/* 
        <CreatComment />

        <MainComment /> */}
      </Card>
    </>
  );
}

export default PostCardItem;
