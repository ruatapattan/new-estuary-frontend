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
import { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from '../../config/axios';

function PostCardHeader({ postItem }) {
  const { createdAt, User } = postItem;

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
    // console.log('ttttttttttttttt');
    try {
      await axios.delete(`/post/${postItem.id}`);
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
            src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'
            sx={{ width: 40, height: 40 }}></Avatar>
        }
        // title='Sarah'
        title={User.firstName}
        subheader='September 14, 2016'
        subheader={
          <Typography color='text.disabled' variant='body2'>
            {/* September 14, 2016 */}
            {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(createdAt))}
          </Typography>
        }
        // {page === 'mypost'? (): (null)}
        action={
          <div>
            <Button
              id='demo-positioned-button'
              aria-controls='demo-positioned-menu'
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              <MoreHorizIcon />
            </Button>
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
              {/* <MenuItem> */}
              <MenuItem onClick={handleClickDelete}>
                <ListItemIcon>
                  <DeleteIcon fontSize='small' />
                </ListItemIcon>
                Delete
              </MenuItem>
            </Menu>
            <EditDialogPost open={openDialog} setOpen={setOpenDialog} postItem={postItem} />
          </div>
        }
      />
    </>
  );
}
export default PostCardHeader;
