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

function PostCardItem({ postItem }) {
  // console.log('xxxx', postItem);
  const { User, PostPictures, createdAt, content } = postItem;

  return (
    <>
      {/* {post.map((item) => {
        return ( */}
      <Card sx={{ padding: '10px', mb: '20px' }}>
        <PostCardHeader postItem={postItem} />

        <PostCardContent content={content} />

        <PostCardItemMedia PostPictures={PostPictures} />

        <PostCardBottom />

        <CreatComment />

        <MainComment />
      </Card>
    </>
  );
}

export default PostCardItem;
