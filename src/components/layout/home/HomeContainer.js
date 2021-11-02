import { Box } from '@mui/system';
import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CreatePost from '../../card/CreatePost';
import { useState, useEffect } from 'react';
import axios from '../../../config/axios';

import PostCard from '../../card/PostCard';
//=====================================================

//====================================================

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function HomeContainer() {
  //=========================================================== set Grid responsive
  const hide = { display: { xs: 'none', md: 'flex' } };

  //=========================================================== set State
  const [post, setPost] = useState([]);
  // const [toggle, setToggle] = useState(false);
  const [togglePost, setTogglePost] = useState(false);
  const [togglePostEdit, setTogglePostEdit] = useState(false);
  // const [toggleEditPost, setToggle]

  //=========================================================== fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get('/post');
        setPost(res.data.post);
        // console.log('tttttttttttttt');
        console.log(res.data.post);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [togglePost, togglePostEdit]);
  //=========================================================

  // setToggleSetPost(post);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: { xs: '100%', md: '60%' },
          mt: '20px',
        }}>
        <CreatePost setTogglePost={setTogglePost} />
        {post.map((postItem) => (
          <PostCard key={postItem.id} postItem={postItem} setTogglePostEdit={setTogglePostEdit} />
        ))}
      </Box>
    </>
  );
}

export default HomeContainer;
