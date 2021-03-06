import React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from 'react';
import axios from '../../config/axios';
import PostCard from '../card/PostCard';
import { useParams } from 'react-router-dom';

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

function PostContainer() {
  //=========================================================== set State
  const [postItem, setPostItem] = useState([]);
  // const [toggle, setToggle] = useState(false);
  const [togglePost, setToggleSetPost] = useState(false);
  const param = useParams();
  const [togglePostEdit, setTogglePostEdit] = useState(false);
  const [togglePostDelete, setTogglePostDelete] = useState(false);

  //=========================================================== fetch post data

  // useEffect(() => {
  //   const fetchPostById = async () => {
  //     try {
  //       // const res = await axios.get(`/post/${param.id}`);
  //       // const res = await axios.get(`/post/${param.id}`);
  //       console.log('#################');
  //       console.log(param.id);
  //       // setPostItem(res.data.post);
  //       // console.log('lllllllllllllllllllll');
  //       // console.log(res.data.post);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchPostById();
  // }, [togglePost, togglePostEdit, togglePostDelete]);

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        const res = await axios.get(`/post/${param.id}`);
        setPostItem(res.data.post);
        // console.log('*************');
        // console.log(res.data.post);
        // console.log('*************');
        // console.log(postItem);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPostById();
  }, [togglePost, togglePostEdit, togglePostDelete]);
  //=========================================================

  // console.log(postItem);

  //=========================================================

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
        {/* check ????????? */}
        {postItem.id ? (
          <PostCard
            postItem={postItem}
            setTogglePostEdit={setTogglePostEdit}
            setTogglePostDelete={setTogglePostDelete}
          />
        ) : null}
      </Box>
    </>
  );
}

export default PostContainer;
