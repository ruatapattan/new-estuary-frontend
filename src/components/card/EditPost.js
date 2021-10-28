import React from 'react';
import { useState } from 'react';
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
import CustomizedDialogs from './dialog';
// input
const Input = styled('input')({
  display: 'none',
});

function EditPost() {
  const [picEdit, setPicEdit] = useState(null);

  const handleChangeFileEdit = (e) => {
    setPicEdit(URL.createObjectURL(e.target.files[0]));
  };

  return <CustomizedDialogs title='Edit'></CustomizedDialogs>;
}

export default EditPost;
