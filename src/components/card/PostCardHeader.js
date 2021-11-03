import React from 'react';
import Avatar from '@mui/material/Avatar';
import { dividerClasses } from '@mui/material';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditDialogPost from './EditDialogPost';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { useState, useContext } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from '../../config/axios';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

function PostCardHeader({ postItem, setTogglePostEdit, setTogglePostDelete }) {
  const { createdAt, User } = postItem;

  const { user } = useContext(AuthContext);
  // console.log(user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ShowEditPost, setShowEditPost] = useState(false);
  const open = Boolean(anchorEl);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditPost = () => {
    setShowEditPost(true);
  };

  const handleClickDelete = async () => {
    try {
      Swal.fire({
        title: 'Are you sure',

        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/post/${postItem.id}`);

          setTogglePostDelete((c) => !c);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CardHeader
        avatar={
          <Avatar
            aria-label='recipe'
            // src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
            src={User.profilePic}
            sx={{ width: 40, height: 40 }}></Avatar>
        }
        title={User.username}
        subheader={
          <Typography color='text.disabled' variant='body2'>
            {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(createdAt))}
          </Typography>
        }
        action={
          <div>
            {user.id === postItem.User.id ? (
              <Button
                id='demo-positioned-button'
                aria-controls='demo-positioned-menu'
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <MoreHorizIcon />
              </Button>
            ) : null}

            <Menu
              id='demo-positioned-menu'
              aria-labelledby='demo-positioned-button'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}>
              <MenuItem onClick={() => setOpenDialog(true)}>
                <ListItemIcon>
                  <EditIcon fontSize='small' />
                </ListItemIcon>
                Edit
              </MenuItem>
              <EditDialogPost
                open={openDialog}
                setOpen={setOpenDialog}
                postItem={postItem}
                setTogglePostEdit={setTogglePostEdit}
              />

              <MenuItem onClick={handleClickDelete}>
                <ListItemIcon>
                  <DeleteIcon fontSize='small' />
                </ListItemIcon>
                Delete
              </MenuItem>
            </Menu>
          </div>
        }
      />
    </>
  );
}
export default PostCardHeader;
