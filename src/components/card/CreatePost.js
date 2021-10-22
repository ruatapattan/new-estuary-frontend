import React from 'react';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Typography from '@mui/material/Typography';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { green, purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// input
const Input = styled('input')({
  display: 'none',
});

function CreatePost() {
  return (
    <Paper sx={{ p: '16px', width: '100%', mb: '20px' }}>
      <Stack justifyContent='space-between' direction='row' spacing={1}>
        <Avatar
          sx={{ bgcolor: purple[500] }}
          aria-label='recipe'
          src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
          sx={{ width: 40, height: 40, mr: '16px' }}></Avatar>
        <TextField id='standard-basic' label='Create post' variant='standard' sx={{ width: '100%', mr: '16px' }} />
        <Button variant='contained' endIcon={<SendIcon />} color='success' sx={{ height: '50%' }} />
      </Stack>
      <Stack justifyContent='space-evenly' direction='row' alignItems='center' spacing={2} mt='10px'>
        <label htmlFor='icon-button-file'>
          <Input accept='image/*' id='icon-button-file' type='file' />
          <IconButton color='primary' aria-label='upload picture' component='span'>
            <InsertPhotoIcon sx={{ fontSize: 40, color: green[500] }} />
          </IconButton>
          <Typography sx={{ display: 'inline' }} variant='body2' color='text.secondary'>
            Photo
          </Typography>
        </label>

        {/* <label htmlFor='icon-button-file'>
          <Input accept='image/*' id='icon-button-file' type='file' />
          <IconButton color='primary' aria-label='upload picture' component='span'>
            <VideoCameraFrontIcon sx={{ fontSize: 40, color: green[500] }} />
          </IconButton>
          <Typography sx={{ display: 'inline' }} variant='body2' color='text.secondary'>
            Video
          </Typography>
        </label> */}
      </Stack>
    </Paper>
  );
}

export default CreatePost;