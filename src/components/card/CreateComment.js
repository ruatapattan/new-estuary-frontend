import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';
// import CardActions from '@mui/material/CardActions';
import { Card } from '@mui/material';
import axios from 'axios';

function CreateComment(props) {
  const { user, postItem } = props;

  // console.log(props.postItem);

  // console.log(user.id);
  const [content, setContent] = useState('');

  const handleSubmitCreateComment = async (e) => {
    e.preventDefault();
    axios
      .post('/comment', { content, userId: user.id, PostId: props.postItem.id })

      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box sx={{ p: '5px 0', mb: '20px' }}>
      {/* <CardActions> */}
      <form onSubmit={handleSubmitCreateComment}>
        <Grid container justifyContent='space-evenly' alignItems='center'>
          <Grid item>
            <Avatar
              aria-label='recipe'
              src='https://images.unsplash.com/photo-1488371934083-edb7857977df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=380&q=80'
              sx={{ width: 40, height: 40 }}></Avatar>
          </Grid>
          <Grid item xs={6} md={5}>
            <TextField
              id='standard-basic'
              label='comment'
              size='small'
              variant='filled'
              sx={{ width: '100%' }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={2} md={2}>
            <Button type='submit' variant='contained' endIcon={<SendIcon />} color='success' />
          </Grid>
        </Grid>
      </form>
      {/* </CardActions> */}
    </Box>
  );
}

export default CreateComment;
