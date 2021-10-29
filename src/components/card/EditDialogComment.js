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

function EditDialogComment({ open, setOpen, commentItem, postItem }) {
  const { user } = useContext(AuthContext);

  // console.log(postItem);

  // const [postId, setPostId] = useState(postItem.id);

  const [content, setContent] = useState(commentItem.content);
  const [id, setId] = useState(commentItem.id);
  //     const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitUpdateComment = async (e) => {
    e.preventDefault();

    axios.put(`/commment/${id}`, { content });
  };

  return (
    <>
      <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <form onSubmit={handleSubmitUpdateComment}>
          <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
            Edit comment
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <TextareaAutosize
              aria-label='minimum height'
              minRows={3}
              placeholder='Minimum 3 rows'
              style={{ width: 200 }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button type='submit' autoFocus onClick={handleClose} variant='contained' color='success'>
              Save
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </>
  );
}

export default EditDialogComment;
