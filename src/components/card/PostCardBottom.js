import React from 'react';
import Grid from '@mui/material/Grid';

import { useState, useContext, useEffect } from 'react';

import CreateComment from './CreateComment';
import MainComment from './MainComment';

import { AuthContext } from '../../contexts/AuthContext';
import Button from '@mui/material/Button';
import PostCardBottomIconLike from './PostCardBottomIconLike';
import PostCardBottomIconComment from './PostCardBottomIconComment';
import PostCardBottomIconLink from './PostCardBottomIconLink';
import LinkDialog from './LinkDialog';
import axios from '../../config/axios';

function PostCardBottom({ postItem }) {
  const { user } = useContext(AuthContext);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [toggleComment, setToggleComment] = useState(false);
  const [comment, setComment] = useState([]);
  const [likeLists, setLikeLists] = useState([]);
  const [toggleLike, setToggleLike] = useState(false);
  const [toggleEditComment, setToggleEditComment] = useState(false);
  // const [toggleLikeComment, setToggleLikeComment] = useState(false);

  // แก้ path เขียน controller

  // useEffect(() => {

  // 	const callLike = async () => {
  // 		await axios
  // 			.get(`/like/product/${param.id}`)
  // 			.then((res) => {
  // 				setLikeLists([...res.data.like]);
  // 			})
  // 			.catch((err) => {
  // 				console.dir(err);
  // 			});
  // 	};

  // 	callLike();
  // }, [toggleLike]);

  //  เช็คการไลค์
  let isLiked = false; // เปิด ปิด icon Like
  let filteredLikeList = []; // เก็บ
  likeLists.forEach((item) => {
    if (+item.postId === +postItem.id && +item.userId === +user.id) {
      if (item.status) {
        isLiked = true;
      }
      filteredLikeList.push(item);
    }
  });

  // นับคนกด Like
  const countLike = likeLists.filter((item) => item.status === true);

  // console.log(postItem);

  // const [isShowComment, setIsShowComment] = useState(false);

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
  // }, [toggleComment]);

  // ============================================

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await axios.get(`/comment/${postItem.id}`);
        setComment(res.data.comment);
      } catch (err) {
        console.log(err);
      }
    };
    const callLike = async () => {
      await axios
        .get(`/like/post/${postItem.id}`)
        .then((res) => {
          setLikeLists([...res.data.like]);
        })
        .catch((err) => {
          console.dir(err);
        });
    };

    // const callLikeComment = async () => {
    //   await axios
    //     .get(`/like/comment/${comment.id}`)
    //     .then((res) => {
    //       setLikeLists([...res.data.like]);
    //     })
    //     .catch((err) => {
    //       console.dir(err);
    //     });
    // };

    // callLikeComment();
    fetchComment();
    callLike();
  }, [toggleComment, toggleLike, toggleEditComment]);

  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '10px', p: '16px' }}>
        <PostCardBottomIconLike
          postItem={postItem}
          isLiked={isLiked}
          countLike={countLike}
          filteredLikeList={filteredLikeList}
          setToggleLike={setToggleLike}
        />
        <PostCardBottomIconComment comment={comment} />
        <span onClick={() => setOpenDialog(true)}>
          <PostCardBottomIconLink />
        </span>
        <LinkDialog open={openDialog} setOpen={setOpenDialog} />
      </Grid>
      <CreateComment user={user} postItem={postItem} setToggleComment={setToggleComment} />
      {/* {openCreateComment ? <CreateComment user={user} postItem={postItem} /> : null} */}

      <MainComment postItem={postItem} user={user} comment={comment} setToggleEditComment={setToggleEditComment} />
    </>
  );
}

export default PostCardBottom;
