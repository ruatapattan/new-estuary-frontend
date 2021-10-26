import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import axios from '../../../config/axios';
import { AuthContext } from '../../../contexts/AuthContext';
import Script from 'react-load-script';
import { Avatar, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

function ProductDetail({ product }) {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const iconHeartStyle = { color: '#e91e63', ml: '10px' };
  const [like, setLike] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  // const tags = [{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }];

  const [userDetail, setUserDetail] = useState({});
  const [purchasedLists, setPurchasedLists] = useState({});

  useEffect(() => {
    const callUserDetail = async () => {
      await axios
        .get(`/profile/${user.id}`)
        .then(res => {
          setUserDetail({ ...res.data.user });
        })
        .catch(err => {
          console.dir(err);
        });
    };

    const callPurchased = async () => {
      await axios
        .get(`/purchased`)
        .then(res => {
          setPurchasedLists({ ...res.data.purchased });
        })
        .catch(err => {
          console.dir(err);
        });
    };

    callUserDetail();
    callPurchased();
  }, []);
  console.dir(userDetail);

  const handleClickPurchase = async () => {
    await Swal.fire({
      title: 'Purchase?',
      text: 'Are you sure you want to purchase this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then(result => {
      if (result.isConfirmed) {
        if (userDetail.wallet >= product.price) {
          const createPurchased = async () => {
            await axios
              .post(`/purchased`, {
                productId: product.id,
                price: product.price,
                userId: user.id,
                wallet: userDetail.wallet
              })
              .then(res => {
                Swal.fire('Complete!', 'Your order has been success', 'success');
                setPurchasing(curr => !curr);
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
    setPurchasing(curr => !curr);
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
        <Button sx={{ p: '0', m: '0' }} onClick={() => setLike(curr => !curr)}>
          {like ? <FavoriteIcon sx={iconHeartStyle} /> : <FavoriteBorderIcon sx={iconHeartStyle} />}
        </Button>
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
            src={product.User.profilePic}
            sx={{
              width: '50px',
              height: '50px',
              mr: { md: '15px', xs: '20px' }
            }}
          ></Avatar>
          <Box>
            <h4>{product.name}</h4>
            <Box
              sx={{
                display: 'flex'
              }}
            >
              <p>by {product.User.username}</p>
              <Button variant="gradient" sx={{ fontSize: '10px', p: '0px 10px', lineHeight: '0px', ml: '10px' }}>
                subscribe
              </Button>
            </Box>
          </Box>
        </Box>
        <p>Date: {product.createAt}</p>
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
        <p>10k favourites</p>
        <p>1k comments</p>
        <p>1M views</p>
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
          {product.ProductCategory.name}
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
        description: {product.description}
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
            <p>{product.price} Bath</p>
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

        {purchasing && (
          <Button
            onClick={handleClickDownload}
            variant="gradient"
            sx={{ p: '5px 15px', mt: { lg: '0px', xs: '20px' } }}
          >
            <FileDownloadIcon />
            Dowload
          </Button>
        )}
        {!purchasing && (
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
