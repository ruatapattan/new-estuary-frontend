import { Box } from '@mui/system';
import { saveAs } from 'file-saver';
import React, { useContext, useEffect, useState } from 'react';
import axios from '../../../config/axios';
import { AuthContext } from '../../../contexts/AuthContext';
import Script from 'react-load-script';
import { Avatar, Button, Link } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Swal from 'sweetalert2';
import { useHistory, useParams } from 'react-router-dom';
import dateValidate from '../../../services/dateValidate';
import HistoryIcon from '@mui/icons-material/History';

function ProductDetail({ product, userDetail, purchasedLists, followingLists, likeLists, setToggle }) {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const param = useParams();

  const defaulfProfile = 'https://res.cloudinary.com/dl7u9oybl/image/upload/v1635217850/img-placeholder_rutnat.jpg';
  const dateNow = dateValidate.formatShortMonthShortYear(Date.now());
  const iconHeartStyle = { color: '#e91e63', ml: '10px' };

  ///////////////set show button buy now////////////////////////
  let ispurchased = false;

  purchasedLists.map(item => {
    if (+item.productId === +param.id && +item.userId === +user.id) {
      ispurchased = true;
    }
  });

  if (+product.userId === +user.id) {
    ispurchased = true;
  }

  ///////////////set show button Subscribe////////////////////////
  let isSubscribed = false;

  followingLists.map(item => {
    if (+item.followedId === +product.userId && +item.followerId === +user.id && item.status === true) {
      isSubscribed = true;
    }
  });

  ///////////////set show button Like////////////////////////
  let isLiked = false;

  likeLists.map(item => {
    if (+item.productId === +product.id && +item.userId === +user.id && item.status === true) {
      isLiked = true;
    }
  });

  const countLike = likeLists.filter(item => item.status === true);

  ///////////////////////////////////////////////////////////

  const handleClickPurchase = async () => {
    await Swal.fire({
      title: 'Buy now?',
      text: 'Are you sure you want to purchase this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then(result => {
      if (result.isConfirmed) {
        if (+userDetail.wallet >= +product.price) {
          const createPurchased = async () => {
            await axios
              .post(`/purchased`, {
                productId: product.id,
                price: product.price,
                userId: user.id,
                wallet: userDetail.wallet
              })
              .then(res => {
                const alertComplete = async () => {
                  await Swal.fire('Complete!', 'Your order has been success', 'success');
                };

                alertComplete();
              })
              .then(res => {
                window.location.reload();
              });
          };
          createPurchased();
        } else {
          Swal.fire({
            title: 'please Top-Up!',
            text: "You don't have enough money",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Top-Up!'
          }).then(result => {
            if (result.isConfirmed) {
              history.push({
                pathname: `/profile/${user.id}`
              });
            }
          });

          // Swal.fire('please Top-Up!', "You don't have enough money", 'error');
        }
      }
    });
  };

  const handleClickDownload = async () => {
    saveAs(product.externalLink ? product.externalLink : product.coverPic);
  };

  const handleClickSubscribe = async () => {
    if (followingLists.length === 0) {
      axios.post('/following', { followedId: product.userId }).then(res => {
        setToggle(curr => !curr);
      });
    } else {
      followingLists.map(item => {
        if (+item.followedId === +product.userId && +item.followerId === +user.id) {
          axios.put(`/following/${item.id}`, { isSubscribed: !isSubscribed }).then(res => {
            setToggle(curr => !curr);
          });
        } else {
          axios.post('/following', { followedId: product.userId }).then(res => {
            setToggle(curr => !curr);
          });
        }
      });
    }
  };

  const handleClickUnSubscribe = async () => {
    followingLists.map(item => {
      if (+item.followedId === +product.userId && +item.followerId === +user.id) {
        axios.put(`/following/${item.id}`, { isSubscribed: !isSubscribed }).then(res => {
          setToggle(curr => !curr);
        });
        // axios.delete(`/following/${item.id}`).then(res => {
        //   window.location.reload();
        // });
      }
    });
  };

  console.log(isLiked);
  const handleClickLike = async () => {
    if (likeLists.length === 0) {
      axios.post('/like', { productId: product.id }).then(res => {
        setToggle(curr => !curr);
      });
    } else {
      likeLists.map(item => {
        if (+item.productId === +product.id && +item.userId === +user.id) {
          axios.put(`/like/${item.id}`, { isLiked: !isLiked }).then(res => {
            setToggle(curr => !curr);
          });
        } else {
          axios.post('/like', { productId: product.id }).then(res => {
            setToggle(curr => !curr);
          });
        }
      });
    }
  };

  const handleClickUnLike = async () => {
    likeLists.map(item => {
      if (+item.productId === +product.id && +item.userId === +user.id) {
        axios.put(`/like/${item.id}`, { isLiked: !isLiked }).then(res => {
          setToggle(curr => !curr);
        });
        // axios.delete(`/following/${item.id}`).then(res => {
        //   window.location.reload();
        // });
      }
    });
  };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'rgb(35,40,54)',
        p: { md: '30px 80px', xs: '30px 30px' },
        mb: '30px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          // border: '1px solid lime',
          textAlign: 'end'
        }}
      >
        {isLiked && (
          <Button onClick={handleClickUnLike} sx={{ p: '0', m: '0' }}>
            <FavoriteIcon sx={iconHeartStyle} />
          </Button>
        )}

        {!isLiked && (
          <Button onClick={handleClickLike} sx={{ p: '0', m: '0' }}>
            <FavoriteBorderIcon sx={iconHeartStyle} />
          </Button>
        )}
      </Box>

      {/* /////////Creater Detail///////////////  */}
      <Box
        sx={{
          width: '100%',
          p: '20px 0px',
          display: 'flex',
          flexDirection: { lg: 'row', xs: 'column' },
          justifyContent: 'space-between',
          // border: '1px solid orange',
          '& h4,p': {
            color: 'white'
          }
        }}
      >
        {' '}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { lg: 'space-between', xs: 'flex-start' },
            mb: '10px'
            // border: '1px solid red'
          }}
        >
          <Avatar
            aria-label="recipe"
            src={product?.User?.profilePic ? product?.User?.profilePic : defaulfProfile}
            sx={{
              width: '50px',
              height: '50px',
              mr: { md: '15px', xs: '20px' }
            }}
          ></Avatar>
          <Box>
            <h4>{product?.name}</h4>
            <Box
              sx={{
                display: 'flex'
              }}
            >
              <p>by {product?.User?.username}</p>

              {!(+user.id === +product.userId) && (
                <>
                  {isSubscribed && (
                    <Button
                      onClick={handleClickUnSubscribe}
                      variant="gradient3"
                      sx={{ fontSize: '10px', p: '0px 10px', lineHeight: '0px', ml: '10px' }}
                    >
                      unsubscribe
                    </Button>
                  )}

                  {!isSubscribed && (
                    <Button
                      onClick={handleClickSubscribe}
                      variant="gradient"
                      sx={{ fontSize: '10px', p: '0px 10px', lineHeight: '0px', ml: '10px' }}
                    >
                      subscribe
                    </Button>
                  )}
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <p>
            Since:{' '}
            {dateValidate.getNumberOfDays(dateValidate.formatShortMonthShortYear(new Date(product.createdAt)), dateNow)}
            day
          </p>
          <HistoryIcon sx={{ ml: '5px', color: 'white' }} />
        </Box>
      </Box>

      {/* /////////Favourites Detail///////////////  */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          // border: '1px solid lime',
          '& p': {
            color: 'white',
            mr: '15px'
          }
        }}
      >
        <p>{countLike.length} favourites</p>
        <p>1k comments</p>
        <p>{purchasedLists?.length} downloads</p>
      </Box>

      {/* /////////Tag///////////////  */}
      <Box
        sx={{
          width: '100%',
          m: '25px 0px',
          flexWrap: 'wrap'
          // border: '1px solid blue',
        }}
      >
        {/* {tags.map(item => (
          <Button variant="gradient" sx={{ borderRadius: '8px', p: '0px', mr: '10px', mb: '10px' }}>
            {item.name}
          </Button>
        ))} */}
        <Button variant="gradient" sx={{ borderRadius: '8px', p: '0px', mr: '10px', mb: '10px' }}>
          {product?.ProductCategory?.name}
        </Button>
      </Box>

      {/* /////////Product Detail///////////////  */}
      <Box
        sx={{
          width: '100%',
          // border: '1px solid lime',
          '&': {
            color: 'white'
          }
        }}
      >
        description: {!product?.description === undefined ? product?.description : '-'}
      </Box>

      {/* /////////Purchasing Detail///////////////  */}
      <Box
        sx={{
          width: '100%',
          m: '80px 0px',
          display: 'flex',
          flexDirection: { lg: 'row', xs: 'column' },
          justifyContent: 'space-between',
          // border: '1px solid yellow',
          '& p': {
            color: 'white'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: { lg: '40%', xs: '100%' },
            flexDirection: 'column'
            // border: '1px solid yellow'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: { lg: 'space-between', xs: 'flex-start' },
              // border: '1px solid yellow',
              '& p': {
                mr: '10px'
              }
            }}
          >
            <p>Price:</p>
            <p>{product?.price} Bath</p>
          </Box>
          {/* <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: { lg: 'space-between', xs: 'flex-start' },
              '& p': {
                mr: '10px'
              }
            }}
          >
            <p>Size:</p>
            <p>1234 x900px 10MB</p>
          </Box> */}
        </Box>

        {ispurchased && (
          <Button
            onClick={handleClickDownload}
            variant="gradient"
            sx={{ p: '5px 15px', mt: { lg: '0px', xs: '20px' } }}
          >
            {/* <a href={product?.coverPic} download="thumbnail"> */}
            <FileDownloadIcon />
            Dowload
            {/* </a> */}
          </Button>
        )}

        {!ispurchased && (
          <Button
            onClick={handleClickPurchase}
            variant="gradient"
            sx={{ p: '5px 15px', mt: { lg: '0px', xs: '20px' } }}
          >
            <ShoppingCartIcon />
            Buy now
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default ProductDetail;
