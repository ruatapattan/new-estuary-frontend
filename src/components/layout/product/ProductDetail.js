import { Box } from '@mui/system';
import React, { useState } from 'react';
import Script from 'react-load-script';
import { Avatar, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductDetail() {
  const iconHeartStyle = { color: '#e91e63', ml: '10px' };
  const [like, setLike] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const tags = [{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }];

  /////////////////Omise///////////////////////

  let OmiseCard = window.OmiseCard;
  // let button = document.querySelector('#checkoutButton');
  // let form = document.querySelector('#checkoutForm');

  const creditCardConfigure = e => {
    OmiseCard.configure({
      publicKey: 'pkey_test_5pm0cflftkpw5lysclq'
    });

    OmiseCard.configureButton('#credit-card', {
      amount: 3000,
      currency: 'USD'
      // buttonLabel: 'Pay 30 USD'
    });
    OmiseCard.attach();
  };

  const handleOpenOmise = e => {
    OmiseCard.open({
      amount: 10000,
      // submitFormTarget: '#checkout-form',
      onCreateTokenSuccess: token => {
        console.log(token);
      },
      onFormClosed: () => {}
    });
  };

  const handleClickPurchase = e => {
    e.preventDefault();
    // setPurchasing(curr => !curr);
    creditCardConfigure();
    handleOpenOmise();
  };

  ///////////////////////////////////////////
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
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
            sx={{
              width: '50px',
              height: '50px',
              mr: { md: '15px', xs: '20px' }
            }}
          ></Avatar>
          <Box>
            <h4>PRODUCT</h4>
            <Box
              sx={{
                display: 'flex'
              }}
            >
              <p>by username</p>
              <Button variant="gradient" sx={{ fontSize: '10px', p: '0px 10px', lineHeight: '0px', ml: '10px' }}>
                subscribe
              </Button>
            </Box>
          </Box>
        </Box>
        <p>date published</p>
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
        {tags.map(item => (
          <Button variant="gradient" sx={{ borderRadius: '8px', p: '0px', mr: '10px', mb: '10px' }}>
            {item.name}
          </Button>
        ))}
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
        caption: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam
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
            <p>$1544.00</p>
          </Box>
          <Box
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
          </Box>
        </Box>

        {/* ////////////////Omise/////////////////// */}

        <form id="checkoutForm" method="POST" action="/charge">
          <script
            type="text/javascript"
            src="https://cdn.omise.co/omise.js"
            data-key="OMISE_PUBLIC_KEY"
            data-amount="12345"
            data-currency="THB"
            data-default-payment-method="credit_card"
          ></script>
        </form>

        {/* <form id="checkoutForm" method="POST" action="/charge">
          <input type="hidden" name="omiseToken" />
          <input type="hidden" name="omiseSource" />
          <button type="submit" id="checkoutButton">
            Checkout
          </button>
        </form> */}

        {/* <script type="text/javascript" src="https://cdn.omise.co/omise.js"></script> */}

        {/* <Script url="https://cdn.omise.co/omise.js" onLoad={handleloadScript} /> */}

        <form>
          <Button id="credit-card" onClick={handleClickPurchase} variant="gradient" sx={{ p: '5px 15px', mt: '20px' }}>
            {purchasing ? <FileDownloadIcon /> : <ShoppingCartIcon />}
            {purchasing ? 'Dowload' : 'Buy now'}
          </Button>
        </form>

        {/* /////////////////////////////////// */}

        {/* <Button onClick={() => setPurchasing(curr => !curr)} variant="gradient" sx={{ p: '5px 15px', mt: '20px' }}>
          {purchasing ? <FileDownloadIcon /> : <ShoppingCartIcon />}
          {purchasing ? 'Dowload' : 'Buy now'}
        </Button> */}
      </Box>
    </Box>
  );
}

export default ProductDetail;
