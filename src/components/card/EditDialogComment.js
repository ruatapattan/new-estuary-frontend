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
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState, useEffect, useContext } from 'react';
import axios from '../../config/axios';
import { AuthContext } from '../../contexts/AuthContext';
import SendIcon from '@mui/icons-material/Send';

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

function EditDialogComment({ open, setOpen, commentItem, postItem, setToggleEditComment, setClickCloseMenu }) {
  const { user } = useContext(AuthContext);

  // console.log(postItem);

  // const [postId, setPostId] = useState(postItem.id);

  const [content, setContent] = useState(commentItem.content);
  const [id, setId] = useState(commentItem.id);
  //     const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  // useEffect(() => {
  //   handleCloseMenu();
  // }, []);

  const handleClose = () => {
    setClickCloseMenu((cur) => !cur);
    setOpen(false);
  };

  const handleSubmitUpdateComment = async (e) => {
    handleClose();
    e.preventDefault();
    try {
      const res = await axios.put(`/comment/${id}`, { content });
      // console.log(res.data);
      setOpen(false);
      setClickCloseMenu((cur) => !cur);
      setToggleEditComment((curr) => !curr);
    } catch (err) {
      // console.dir(err);
    }
  };

  return (
    <>
      <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <form onSubmit={handleSubmitUpdateComment} style={{ width: '30vw' }}>
          <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
            <Typography variant='h6' gutterBottom component='div' color='#303030'>
              Edit Comment
            </Typography>
          </BootstrapDialogTitle>
          <DialogContent dividers fullWidth={true} sx={{ display: 'flex', justifyContent: 'center' }}>
            <TextareaAutosize
              aria-label='minimum height'
              minRows={10}
              maxRows={10}
              placeholder='Minimum 3 rows'
              style={{ width: 250 }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </DialogContent>
          <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button type='submit' variant='gradient' endIcon={<SendIcon />} sx={{ height: '40px', width: '70%' }} />
          </DialogActions>
        </form>
      </BootstrapDialog>
    </>
  );
}

export default EditDialogComment;
