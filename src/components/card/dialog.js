import * as React from 'react';
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

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //=================================================== State Pic
  // const [picEdit, setPicEdit] = useState([]);
  // const [picUrl, setPicUrl] = useState([]);

  const [testPic, SetTestPic] = useState('');
  const [TestInput, SetTestInput] = useState('');

  const handlepic = (e) => {
    //========== ตัวเดียว
    SetTestPic(URL.createObjectURL(e.target.files[0]));
    // let picUrlEdit = URL.createObjectURL(e.target.files[0]);
    // console.log(picUrlEdit);
    // console.log(e.target.files[0].name);
    // const picLoop = []
    // for (let i = 0; i < e.target.files.length; i++) {
    //       // เก็บ url
    //       picLoop[i] = (e.target.files[i]);
    //     }
    //     // เก็บรูปไป preview
    //     setPicEdit(picUrlEdit);
  };

  // const handleChangeFileEdit = (e) => {
  //   const picUrlEdit = [];

  //   for (let i = 0; i < e.target.files.length; i++) {
  //     // เก็บ url
  //     // picUrlEdit.push(URL.createObjectURL(e.target.files[i]));
  //     picUrlEdit[i] = URL.createObjectURL(e.target.files[i]);
  //   }

  //   // เก็บรูปไป preview
  //   setPicEdit(picUrlEdit);
  // };

  return (
    <div>
      <MenuItem onClick={handleClickOpen}>Edit</MenuItem>
      <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
          Edit + {testPic}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Paper elevation={0} sx={{ p: '16px', width: '100%', mb: '20px' }}>
            <Stack justifyContent='space-between' direction='row' spacing={3}>
              <Avatar
                sx={{ bgcolor: purple[500] }}
                aria-label='recipe'
                src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
                sx={{ width: 40, height: 40, mr: '16px' }}></Avatar>
              <TextField
                value={TestInput}
                onChange={(e) => SetTestInput(e.target.value)}
                id='standard-basic'
                label='Edit post'
                size='small'
                variant='filled'
                sx={{ width: '100%' }}
              />
              <Button variant='contained' endIcon={<SendIcon />} color='success' sx={{ height: '50%' }} />
            </Stack>
            <Stack justifyContent='space-evenly' direction='row' alignItems='center' spacing={2} mt='10px'>
              <label htmlFor='icon-button'>
                <Input multiple accept='image/*' id='icon-button' type='file' onChange={handlepic} />
                {/* <input multiple type='file' id='img' name='img' accept='image/*' onChange={handlepic} /> */}
                <IconButton color='primary' aria-label='upload picture' component='span'>
                  <InsertPhotoIcon sx={{ fontSize: 40, color: green[500] }} />
                </IconButton>
                <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
                  Choose Photo
                </Typography>
              </label>
            </Stack>

            {/* <img src={testPic} style={{ width: '65px', height: '60px' }} /> */}

            {/* {!!picEdit.length && (
              <>
                {picEdit.map((p, i) => (
                  <Grid container display='flex' justifyContent='center' mt='10px'>
                    <>
                      <Grid item mr='15px'>
                        <img src={p} style={{ width: '65px', height: '60px' }} />
                      </Grid>

                      <Grid item>
                        <CancelIcon sx={{ fontSize: 25, color: red[400] }} />
                      </Grid>
                    </>
                  </Grid>
                ))}
              </>
            )} */}
          </Paper>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
