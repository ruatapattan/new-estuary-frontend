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
import { Tooltip } from '@mui/material';

function PostCardBottom({ postItem }) {
  const { user } = useContext(AuthContext);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [toggleComment, setToggleComment] = useState(false);
  const [comment, setComment] = useState([]);
  const [likeLists, setLikeLists] = useState([]);
  const [toggleLike, setToggleLike] = useState(false);
  const [toggleEditComment, setToggleEditComment] = useState(false);
  const [toggleDeleteComment, setToggleDeleteComment] = useState(false);
  const [clickOpenComment, setClickOpenComment] = useState(false);
  const [toggleLikeComment, setToggleLikeComment] = useState(false);
  const [likeListsComment, setLikeListsComment] = useState([]);
  const [likeComment, setLikeComment] = useState([]);

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
    // alert('1');
    const fetchComment = async () => {
      try {
        const res = await axios.get(`/comment/${postItem.id}`);
        setComment(res.data.comment);
        // console.log('this is comment');
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const callLike = async () => {
      await axios
        .get(`/like/post/${postItem.id}`)
        .then((res) => {
          setLikeLists([...res.data.like]);
          setLikeComment(comment.Likes);
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
  }, [toggleComment, toggleLike, toggleEditComment, toggleDeleteComment, toggleLikeComment]);

  // console.log(postItem);

  console.log('**************99999');
  console.log(comment);
  // console.log('**************');

  // console.log('#############');
  // console.log(likeComment);
  // console.log('#############');

  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', mt: '10px', p: '16px' }}>
        <PostCardBottomIconLike postItem={postItem} setToggleLike={setToggleLike} likeLists={likeLists} />
        <PostCardBottomIconComment comment={comment} setClickOpenComment={setClickOpenComment} />
        {/* <span onClick={() => setOpenDialog(true)}>
          <PostCardBottomIconLink />
        </span>
        <LinkDialog open={openDialog} setOpen={setOpenDialog} />  */}

        <Tooltip title='Copy link'>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(
                `${window.location.protocol}//${window.location.hostname}:${window.location.port}/post/${postItem.id}`,
              );
            }}>
            <PostCardBottomIconLink />
          </Button>
        </Tooltip>
      </Grid>
      <CreateComment user={user} postItem={postItem} setToggleComment={setToggleComment} />
      {/* {openCreateComment ? <CreateComment user={user} postItem={postItem} /> : null} */}

      {clickOpenComment ? (
        <MainComment
          toggleComment={toggleComment}
          postItem={postItem}
          user={user}
          comment={comment}
          setToggleEditComment={setToggleEditComment}
          setToggleDeleteComment={setToggleDeleteComment}
          likeListsComment={likeListsComment}
          setToggleLikeComment={setToggleLikeComment}
        />
      ) : null}
    </>
  );
}

export default PostCardBottom;
