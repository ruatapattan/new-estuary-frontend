import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import axios from '../../config/axios';

function PostCardBottomIconLike({ isLiked, countLike, postItem, filteredLikeList, setToggleLike }) {
  const handleClickLike = async () => {
    if (filteredLikeList.length === 0) {
      axios.post('/like', { postId: postItem.id }).then((res) => {
        setToggleLike((curr) => !curr);
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
      {!isLiked && <ThumbUpOutlinedIcon color='primary' onClick={handleClickLike} />}

      <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
        {countLike.length ? countLike.length : null}
      </Typography>
    </Grid>
  );
}

export default PostCardBottomIconLike;
