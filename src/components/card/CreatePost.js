import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Grid, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Typography from '@mui/material/Typography';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { green, purple, red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from '../../config/axios';
import { AuthContext } from '../../contexts/AuthContext';

// input
const Input = styled('input')({
  display: 'none',
});

function CreatePost() {
  //======================== (1) set ข้อมูลที่ใช้ ========================
  // เรียกข้อมูล user มาใช้
  const { user } = useContext(AuthContext);
  // สร้าง state เก็บข้อมูล
  const [content, setContent] = useState('');
  const [sendPic, setSendPic] = useState([]);
  const [pic, setPic] = useState([]); // ในเก็บตอน preview

  // ====================== (2) function ดักเหตุการณ์ที่เกิดในช่อง input picture ========================
  const handleChangeFile = (e) => {
    const picUrl = [];
    const picFile = [];
    for (let i = 0; i < e.target.files.length; i++) {
      // เก็บ url
      picUrl.push(URL.createObjectURL(e.target.files[i]));
      // เก็บไฟล์ภาพ
      picFile.push(e.target.files[i]);
    }
    // เก็บรูปไป preview
    setPic(picUrl);
    // เก็บไฟล์ภาพ
    setSendPic(picFile);
  };

  // ======================= (3) function กดปุ่ม delete รูปตอน preview ========================
  const onRemove = (idx) => {
    const newPic = [...pic];

    newPic.splice(idx, 1);
    setPic(newPic);
  };

  //======================== (4) ส่งไป backend ========================
  const handleSubmitCreatePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // 1. content
    formData.append('content', content);

    // 2. pic
    sendPic.forEach((item) => {
      formData.append('sendPic', item);
    });

    //3. userId
    formData.append('userId', user.id);

    // ส่งไป Backend
    await axios.post(`/post`, formData);
    setContent('');
    setSendPic([]);
    setPic([]);
  };

  return (
    <Paper sx={{ p: '16px', width: '100%', mb: '20px' }}>
      {/* ================================================ */}
      <form onSubmit={handleSubmitCreatePost} enctype='multipart/form-data'>
        <Stack justifyContent='space-between' direction='row' spacing={3}>
          <Avatar
            sx={{ bgcolor: purple[500] }}
            aria-label='recipe'
            src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
            sx={{ width: 40, height: 40, mr: '16px' }}></Avatar>
          <TextField
            id='standard-basic'
            label='Create post'
            size='small'
            variant='filled'
            sx={{ width: '100%' }}
            name='content'
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button type='submit' variant='contained' endIcon={<SendIcon />} color='success' sx={{ height: '50%' }} />
        </Stack>
        <Stack justifyContent='space-evenly' direction='row' alignItems='center' spacing={2} mt='10px'>
          <label htmlFor='icon-button-file'>
            <Input
              accept='image/*'
              id='icon-button-file'
              name='sendPic'
              type='file'
              onChange={handleChangeFile}
              multiple
            />
            {/* <input accept='image/*' id='icon-button-file' type='file' onChange={handleChangeFile} /> */}
            <IconButton color='primary' aria-label='upload picture' component='span'>
              <InsertPhotoIcon sx={{ fontSize: 40, color: green[500] }} />
            </IconButton>
            <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
              Choose Photo
            </Typography>
          </label>
        </Stack>

        {!!pic.length && (
          <>
            {pic.map((p, i) => (
              <Grid container display='flex' justifyContent='center' mt='10px'>
                <>
                  <Grid item mr='15px'>
                    <img src={p} style={{ width: '65px', height: '60px' }} />
                  </Grid>

                  <Grid item>
                    <CancelIcon sx={{ fontSize: 25, color: red[400] }} onClick={() => onRemove(i)} />
                  </Grid>
                </>
              </Grid>
            ))}
          </>
        )}
      </form>
    </Paper>
  );
}

export default CreatePost;
