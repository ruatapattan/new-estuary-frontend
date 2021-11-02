import React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CreatePost from '../../card/CreatePost';
import PostCard from '../../card/PostCard';
import { useState, useEffect } from 'react';
import axios from '../../../config/axios';

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

function CommunityContent() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get('/post');
        setPost(res.data.post);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);
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
        <Box mb='20px' width='100%' display='flex' justifyContent='center'>
          <Typography variant='h3' component='h3' mb='20px'>
            Community
          </Typography>
        </Box>
        <CreatePost />
        {post.map((postItem) => (
          <PostCard key={postItem.id} postItem={postItem} />
        ))}
      </Box>
    </>
  );
}

export default CommunityContent;
