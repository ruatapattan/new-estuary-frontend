import React from 'react';

import Grid from '@mui/material/Grid';

import PostCardItem from './PostCardItem';

// =========================== function for carosaul ======================================
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <ArrowForwardIosIcon
//       style={{ ...style, color: '#242A38' }}
//       className={className}
//       onClick={onClick}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <ArrowBackIosIcon
//       style={{ ...style, color: '#242A38' }}
//       className={className}
//       onClick={onClick}
//       onClick={onClick}
//     />
//   );
// }
// =========================== function for carousel ======================================

function PostCard({ postItem, setTogglePostEdit }) {
  // console.log(postItem);
  //===========================  setting carousel ======================================
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     nextArrow: <SampleNextArrow />,
  //     prevArrow: <SamplePrevArrow />,
  //   };

  //function open comment
  //   const [isShowComment, setIsShowComment] = useState(false);
  //   const [anchorEl, setAnchorEl] = React.useState(null);
  //   const [ShowEditPost, setShowEditPost] = useState(false);
  // const [openEdit, setOpenEdit] = React.useState(false);
  //   const [openDialog, setOpenDialog] = React.useState(false);

  //   const showComment = () => {
  //     setIsShowComment(true);
  //   };

  //   const open = Boolean(anchorEl);

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };
  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  //   const handleEditPost = () => {
  //     setShowEditPost(true);
  //   };

  return (
    <>
      <Grid container sx={{ mb: '20px' }}>
        <Grid item xs={12}>
          <PostCardItem postItem={postItem} setTogglePostEdit={setTogglePostEdit} />
        </Grid>
      </Grid>
    </>
  );
}

export default PostCard;
