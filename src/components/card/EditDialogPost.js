import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { green, purple, red } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from 'axios';

// input
const Input = styled('input')({
  display: 'none',
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// ============================================ EditDialogPost ============================================
function EditDialogPost({ open, setOpen, postItem }) {
  // console.log(postItem);
  const { PostPictures } = postItem;

  const handleClose = () => {
    setOpen(false);
  };

  //=================================================== (1) State Pic
  // const [showPic, setShowPic] = useState([postItem.PostPictures.pic]);
  const [pic, setPic] = useState(PostPictures);
  // const [sendpic]

  const [sendPic, setSendPic] = useState([]);
  const [previewpic, setPreviewPic] = useState([]); // ในเก็บตอน preview

  const [content, SetContent] = useState(postItem.content);

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
    setPreviewPic(picUrl);
    // เก็บไฟล์ภาพ
    setSendPic(picFile);
  };

  // ======================= (3) function กดปุ่ม delete รูปตอน preview ========================
  const onRemove = async (idx) => {
    // console.log('ttttt');
    // console.log(idx);

    const foundIdx = pic.findIndex((item) => item.id === idx);

    if (foundIdx !== -1) {
      const newPic = [...pic];

      newPic.splice(foundIdx, 1);
      setPic(newPic);
    }

    // const formData = new FormData();
    // formData.append('pic', pic);

    await axios.delete(`/post/postPicture/${idx}`);
  };

  const handleUpdatePost = async (e) => {
    // console.log('tttttttttttttttttttt');

    e.preventDefault();
    const formData = new FormData();
    // 1. content
    formData.append('content', content);

    // 2. pic
    sendPic.forEach((item) => {
      formData.append('sendPic', item);
    });

    //3. postId
    formData.append('postId', postItem.id);

    // ส่งไป Backend
    await axios.put(`/post`, formData);
  };

  return (
    <div>
      {/* <MenuItem onClick={handleClickOpen}>Edit</MenuItem> */}
      <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
          Edit Post
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleUpdatePost}>
            <Paper elevation={0} sx={{ p: '16px', width: '100%', mb: '20px' }}>
              <Stack justifyContent='space-between' direction='row' spacing={3}>
                <Avatar
                  sx={{ bgcolor: purple[500] }}
                  aria-label='recipe'
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
                  sx={{ width: 40, height: 40, mr: '16px' }}></Avatar>
                {/* <TextField
                value={TestInput}
                onChange={(e) => SetTestInput(e.target.value)}
                id='standard-basic'
                label='Edit post'
                size='small'
                variant='filled'
                sx={{ width: '100%' }}
              /> */}

                <TextareaAutosize
                  aria-label='minimum height'
                  minRows={3}
                  placeholder='Minimum 3 rows'
                  style={{ width: 200 }}
                  onChange={(e) => SetContent(e.target.value)}
                  value={content}
                />
                <Button
                  type='submit'
                  variant='contained'
                  endIcon={<SendIcon />}
                  color='success'
                  sx={{ height: '50%' }}
                />
              </Stack>
              <Stack justifyContent='space-evenly' direction='row' alignItems='center' spacing={2} mt='10px'>
                <label htmlFor='icon-button'>
                  <Input accept='image/*' id='icon-button' type='file' onChange={handleChangeFile} multiple />
                  {/* <input multiple type='file' id='img' name='img' accept='image/*' onChange={handlepic} /> */}
                  <IconButton color='primary' aria-label='upload picture' component='span'>
                    <InsertPhotoIcon sx={{ fontSize: 40, color: green[500] }} />
                  </IconButton>
                  <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
                    Choose Photo
                  </Typography>
                </label>
              </Stack>

              {pic.map((item) => (
                <Grid container display='flex' justifyContent='center' mt='10px'>
                  <>
                    <Grid item mr='15px'>
                      <img src={item.pic} style={{ width: '65px', height: '60px' }} />
                    </Grid>

                    <Grid item>
                      {/* <CancelIcon sx={{ fontSize: 25, color: red[400] }} onClick={() => onRemove(i)} /> */}
                      <CancelIcon sx={{ fontSize: 25, color: red[400] }} onClick={() => onRemove(item.id)} />
                    </Grid>
                  </>
                </Grid>
              ))}

              {/* preview */}
              {!!previewpic.length && (
                <>
                  {previewpic.map((p, i) => (
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
            </Paper>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default EditDialogPost;
