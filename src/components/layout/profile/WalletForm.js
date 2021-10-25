import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Avatar, Link } from '@mui/material';
import axios from '../../../config/axios';
import { useParams, useHistory } from 'react-router-dom';

function WalletForm() {
  const param = useParams();
  const [user, setUser] = useState([]);
  const [amount, setAmount] = useState(1000000);

  useEffect(() => {
    const callUser = async () => {
      await axios
        .get(`/profile/${param.id}`)
        .then(res => {
          setUser({ ...res.data.user });
        })
        .catch(err => {
          console.dir(err);
        });
    };
    callUser();
  }, []);
  console.dir(user);

  /////////////////Omise connect backend///////////////////////
  const createCreditCardCharge = async (username, amount, token) => {
    await axios.post('/checkout-credit-card');
  };

  /////////////////Omise///////////////////////

  let OmiseCard = window.OmiseCard;
  // let button = document.querySelector('#checkoutButton');
  // let form = document.querySelector('#checkoutForm');

  const creditCardConfigure = e => {
    OmiseCard.configure({
      publicKey: 'pkey_test_5pm0cflftkpw5lysclq'
    });

    OmiseCard.configureButton('#credit-card', {
      amount: 300000,
      currency: 'USD'
      // buttonLabel: 'Pay 30 USD'
    });
    OmiseCard.attach();
  };

  const handleOpenOmise = e => {
    OmiseCard.open({
      amount: amount,
      // submitFormTarget: '#checkout-form',
      onCreateTokenSuccess: token => {
        console.log(token);
        // createCreditCardCharge(user.username, amount, token);
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
        width: { md: '72%', sm: '100%', xs: '100%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        border: '1px solid red'
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '90%', md: '70%' },
          flexDirection: 'column',
          backgroundColor: '#232836',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          padding: '20px 50px',
          mt: '80px',
          '& > p,h2,div': {
            mb: '10px'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            border: '1px solid red'
          }}
        >
          <Avatar
            aria-label="recipe"
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
            sx={{
              width: '60px',
              height: '60px',
              mr: { md: '15px', xs: '20px' }
            }}
          ></Avatar>
          <h2>USERNAME</h2>
        </Box>

        <p>Total balance</p>
        <h2>{amount} USD</h2>

        {/* ////////////////Omise/////////////////// */}
        {/* <form id="checkoutForm" method="POST" action="/charge">
          <script
            type="text/javascript"
            src="https://cdn.omise.co/omise.js"
            data-key="OMISE_PUBLIC_KEY"
            data-amount="12345"
            data-currency="THB"
            data-default-payment-method="credit_card"
          ></script>
        </form> */}
        <form>
          <Button id="credit-card" onClick={handleClickPurchase} variant="gradient">
            Add Wallet
          </Button>
        </form>

        {/* /////////////////////////////////// */}
      </Box>
    </Box>
  );
}

export default WalletForm;
