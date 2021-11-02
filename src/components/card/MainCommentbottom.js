import React from 'react';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
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
import axios from '../../config/axios';

function MainCommentbottom({ commentItem, user, setToggleEditComment }) {
  // console.log(commentItem.id);
  // console.log(user);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [openDialog, setOpenDialog] = React.useState(false);

  const [comment, setComment] = useState([]);

  const [likeLists, setLikeLists] = useState([]);

  const [toggleLikeComment, setToggleLikeComment] = useState(false);

  // console.log(toggleEditComment);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickDelete = async () => {
    // console.log(commentItem?.id);
    try {
      await axios.delete(`comment/${commentItem.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  // =========================== Like

  useEffect(() => {
    const callLikeComment = async () => {
      await axios
        .get(`/like/comment/${commentItem.id}`)
        .then((res) => {
          setLikeLists([...res.data.like]);
        })
        .catch((err) => {
          // console.dir(err);
        });
    };

    callLikeComment();
  }, [toggleLikeComment]);

  // console.dir(likeLists);
  //  เช็คการไลค์
  let isLiked = false; // เปิด ปิด icon Like
  let filteredLikeList = []; // เก็บ
  likeLists.forEach((item) => {
    if (+item.commentId === +commentItem.id && +item.userId === +user.id) {
      // console.log('jjjjjjjjjjjj');
      // console.log('test1' + item.commentId);
      // console.log('test2' + commentItem.id);

      if (item.status) {
        isLiked = true;
      }
      filteredLikeList.push(item);
    }
  });

  // console.log(isLiked);

  // นับคนกด Like
  const countLike = likeLists.filter((item) => item.status === true);

  const handleClickLike = async () => {
    if (filteredLikeList.length === 0) {
      axios.post('/like', { commentId: commentItem.id }).then((res) => {
        setToggleLikeComment((curr) => !curr);
      });
    } else {
      axios.put(`/like/${filteredLikeList[0].id}`, { isLiked: !filteredLikeList[0].status }).then((res) => {
        setToggleLikeComment((curr) => !curr);
      });
    }
  };

  return (
    <>
      <Grid item>
        {/* <ThumbUpOutlinedIcon /> */}

        {isLiked && <ThumbUpAltIcon onClick={handleClickLike} />}
        {!isLiked && <ThumbUpOutlinedIcon onClick={handleClickLike} />}

        <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
          {countLike.length}
        </Typography>
      </Grid>

      <Grid item>
        {user.id === commentItem.User.id ? (
          <Button
            id='demo-positioned-button'
            aria-controls='demo-positioned-menu'
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <MoreHorizIcon open={openDialog} setOpen={setOpenDialog} />
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
          <EditDialogComment
            open={openDialog}
            setOpen={setOpenDialog}
            commentItem={commentItem}
            setToggleEditComment={setToggleEditComment}
          />
          <MenuItem onClick={handleClickDelete}>
            <ListItemIcon>
              <DeleteIcon fontSize='small' />
            </ListItemIcon>
            Delete
          </MenuItem>
        </Menu>
      </Grid>
      <Grid item>
        <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
          {new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(commentItem.createdAt))}
        </Typography>
      </Grid>
    </>
  );
}

export default MainCommentbottom;