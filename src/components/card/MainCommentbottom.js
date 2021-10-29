import React from 'react';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import Grid from '@mui/material/Grid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditDialogComment from './EditDialogComment';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';

function MainCommentbottom({ commentItem, postItem }) {
  // console.log(postItem);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openDialog, setOpenDialog] = React.useState(false);

  const [comment, setComment] = useState([]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid item>
        <ThumbUpOutlinedIcon />
        <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
          5
        </Typography>
      </Grid>

      <Grid item>
        <Button
          id='demo-positioned-button'
          aria-controls='demo-positioned-menu'
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <MoreHorizIcon open={openDialog} setOpen={setOpenDialog} />
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
          <EditDialogComment open={openDialog} setOpen={setOpenDialog} postItem={postItem} commentItem={commentItem} />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DeleteIcon fontSize='small' />
            </ListItemIcon>
            Delete
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item>
        <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
          {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(commentItem.createdAt))}
        </Typography>
      </Grid>
    </>
  );
}

export default MainCommentbottom;
