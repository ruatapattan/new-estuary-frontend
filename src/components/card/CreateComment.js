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

function CreateComment(props) {
  const { user, postItem, setToggleComment, product } = props;

  // console.log(user.id);
  const [content, setContent] = useState('');

  const handleSubmitCreateComment = async e => {
    e.preventDefault();
    const res = await axios.post('/comment', {
      content,
      userId: user.id,
      PostId: props.postItem?.id,
      ProductId: product?.id
    });
    setContent('');
    setToggleComment(c => !c);
  };

  return (
    <Box sx={{ p: '5px 0', mb: '20px' }}>
      {/* <CardActions> */}
      <form onSubmit={handleSubmitCreateComment}>
        <Grid container justifyContent="space-evenly" alignItems="center">
          <Grid item>
            <Avatar aria-label="recipe" src={user.profilePic} sx={{ width: 40, height: 40 }}></Avatar>
          </Grid>
          <Grid item xs={6} md={5}>
            <TextField
              id="standard-basic"
              label="comment"
              size="small"
              variant="standard"
              sx={{ width: '100%' }}
              value={content}
              onChange={e => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={2} md={2}>
            <Button type="submit" variant="gradient" endIcon={<SendIcon />} color="success" />
          </Grid>
        </Grid>
      </form>
      {/* </CardActions> */}
    </Box>
  );
}

export default CreateComment;
