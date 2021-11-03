import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import axios from '../../config/axios';
import { SocketContext } from '../../contexts/SocketContext';
import { AuthContext } from '../../contexts/AuthContext';

function PostCardBottomIconLike({ isLiked, countLike, postItem, filteredLikeList, setToggleLike }) {
  const { sendNotification } = useContext(SocketContext);
  const { user } = useContext(AuthContext);

  console.log('postitem', postItem);

  const handleClickLike = async () => {
    if (filteredLikeList.length === 0) {
      axios
        .post('/like', { postId: postItem.id })
        .then((res) => {
          setToggleLike((curr) => !curr);
          return res;
        })
        .then((res2) => {
          alert('notify like');
          console.log(res2);
          sendNotification(
            user.id,
            user.username,
            // item.User.id,
            postItem.User.id,
            'liked',
            'post',
            'likeId',
            res2.data.likeId,
          );
        });
    } else {
      axios.put(`/like/${filteredLikeList[0].id}`, { isLiked: !filteredLikeList[0].status }).then((res) => {
        setToggleLike((curr) => !curr);
      });
    }
  };

  return (
    <Grid item>
      {isLiked && <ThumbUpAltIcon onClick={handleClickLike} />}
      {!isLiked && <ThumbUpOutlinedIcon onClick={handleClickLike} />}

      <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
        {countLike.length ? countLike.length : null}
      </Typography>
    </Grid>
  );
}

export default PostCardBottomIconLike;
