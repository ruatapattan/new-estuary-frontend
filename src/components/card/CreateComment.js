import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';
import { Card } from '@mui/material';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import { SocketContext } from '../../contexts/SocketContext';
import { isEmpty, isNumeric } from 'validator';

function CreateComment(props) {
  const { user, postItem, setToggleComment, product } = props;
  const { sendNotification } = useContext(SocketContext);

  // console.log(product);

  // console.log(user.id);
  const [content, setContent] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmitCreateComment = async (e) => {
    e.preventDefault();

    if (isEmpty(content)) {
      setErrMsg('Incorect');
      return;
    }

    const res = await axios.post('/comment', {
      content,
      userId: user.id,
      PostId: props.postItem?.id,
      ProductId: product?.id,
    });

    if (postItem) {
      if (user.id !== postItem.User.id) {
        alert('notify like');
        sendNotification(
          user.id,
          user.username,
          postItem.User.id,
          'commented',
          'post',
          'commentId',
          res.data.commentId,
        );
      }
    } else if (product) {
      if (user.id !== product.User.id) {
        alert('notify like');
        sendNotification(
          user.id,
          user.username,
          product.User.id,
          'commented',
          'product',
          'commentId',
          res.data.commentId,
        );
      }
    }

    setContent('');
    setToggleComment((c) => !c);
  };

  return (
    <Box sx={{ p: '5px 0', mb: '20px' }}>
      {/* <CardActions> */}
      <form onSubmit={handleSubmitCreateComment}>
        <Grid container justifyContent='space-evenly' alignItems='center'>
          <Grid item>
            <Avatar aria-label='recipe' src={user.profilePic} sx={{ width: 40, height: 40 }}></Avatar>
          </Grid>
          <Grid item xs={6} md={5}>
            <TextField
              error={errMsg !== ''}
              helperText={errMsg.length > 0 ? errMsg : ''}
              id='standard-basic'
              label='comment'
              size='small'
              variant='standard'
              sx={{ width: '100%' }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={2} md={2}>
            <Button type='submit' variant='gradient' endIcon={<SendIcon />} color='success' />
          </Grid>
        </Grid>
      </form>
      {/* </CardActions> */}
    </Box>
  );
}

export default CreateComment;
