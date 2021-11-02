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
          {/* Edit Post */}
          <Typography variant='h5' gutterBottom component='div' color='#303030'>
            Edit Post
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleUpdatePost}>
            <Paper elevation={0} sx={{ p: '16px', width: '100%', mb: '20px' }}>
              <Stack sx={{ display: 'flex', justifyContent: 'center', mb: '20px' }}>
                <Stack sx={{ marginBottom: '20px' }}>
                  <TextareaAutosize
                    placeholder='...'
                    style={{ width: 280 }}
                    onChange={(e) => SetContent(e.target.value)}
                    value={content}
                    maxRows={6}
                    aria-label='maximum height'
                    placeholder='Maximum 4 rows'
                    defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua.'
                  />
                </Stack>
                <Stack>
                  <Button
                    type='submit'
                    variant='gradient'
                    endIcon={<SendIcon />}
                    color='success'
                    sx={{ height: '50%', width: '30%', margin: 'auto' }}
                  />
                </Stack>
              </Stack>

              <Stack justifyContent='space-evenly' direction='row' alignItems='center' spacing={2} mt='10px'>
                <label htmlFor='icon-button'>
                  <Input accept='image/*' id='icon-button' type='file' onChange={handleChangeFile} multiple />
                  {/* <input multiple type='file' id='img' name='img' accept='image/*' onChange={handlepic} /> */}
                  <IconButton color='primary' aria-label='upload picture' component='span'>
                    <InsertPhotoIcon
                      sx={{
                        fontSize: 40,
                        background: `linear-gradient(90deg,  rgba(64,169,223,1) 20%,rgba(115,194,130,1) 100%)`,
                        borderRadius: '8px',
                      }}
                    />
                  </IconButton>
                  <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
                    Choose Photo
                  </Typography>
                </label>
              </Stack>

              {pic.map((item) => (
                <Grid container display='flex' justifyContent='center' alignItems='center' mt='10px'>
                  <>
                    <Grid item mr='15px'>
                      <img src={item.pic} style={{ width: '125px', height: '115px' }} />
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
                          <img src={p} style={{ width: '125px', height: '115px' }} />
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
