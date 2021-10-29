import { Button, TextField, Typography, Link } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import axios from '../../../../config/axios';
import validator from 'validator';
import userValidate from '../../../../services/userValidate';
import passwordValidate from '../../../../services/passwordValidate';

function SignupInputForm() {
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [userInput, setUserInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const history = useHistory();

  const handleSubmitSignup = async (e) => {
    try {
      e.preventDefault();
      console.log('here');
      console.log(Object.values(error));
      if (userInput.email === '') {
        setError((cur) => ({ ...cur, email: 'email is required' }));
      }
      if (userInput.username === '') {
        setError((cur) => ({ ...cur, username: 'username is required' }));
      }
      if (userInput.password === '') {
        setError((cur) => ({ ...cur, password: 'password is required' }));
      } else if (Object.values(error).every((item) => item === '')) {
        console.log('no error');
        const result = await axios.post('/signup', { ...userInput });
        console.log(result.data.message);
        history.push({
          pathname: '/login',
          state: { successMessage: 'Account Created' },
          form: 'register page',
        });
      }
    } catch (err) {
      console.log('err response below:');
      // console.dir(err.response.data);
      // console.dir(err.response.data.message.confirmPassword);
      //username errors
      if (err.response && err.response.data.message.usernameSame) {
        setError((cur) => ({ ...cur, username: err.response.data.message.usernameSame }));
      }

      //email error
      if (err.response && err.response.data.message.emailSame) {
        setError((cur) => ({ ...cur, email: 'email already in use!' }));
      }
    }
  };

  const handleInputUsername = (e) => {
    setUserInput((cur) => ({ ...cur, username: e.target.value }));
    if (e.target.value === '') {
      setError((cur) => ({ ...cur, username: '' }));
    } else if (!userValidate.validateLength(e.target.value)) {
      setError((cur) => ({ ...cur, username: 'username must be 6-12 characters long' }));
    } else if (!validator.isAlphanumeric(e.target.value)) {
      setError((cur) => ({
        ...cur,
        username: 'username must consists of alphabets and numbers only',
      }));
    } else setError((cur) => ({ ...cur, username: '' }));
  };

  const handleInputPassword = (e) => {
    setUserInput((cur) => ({ ...cur, password: e.target.value }));
    if (e.target.value === '') {
      setError((cur) => ({ ...cur, password: '' }));
    } else if (e.target.value === '' && userInput.confirmPassword === '') {
      setError((cur) => ({ ...cur, password: '' }));
    } else if (!passwordValidate.validateCharacter(e.target.value)) {
      setError((cur) => ({
        ...cur,
        password: 'password must contain small letter, capitalized letter, and number',
      }));
    } else if (!passwordValidate.validateLength(e.target.value)) {
      setError((cur) => ({ ...cur, password: 'password must be at least 6 characters long' }));
    } else {
      setError((cur) => ({ ...cur, password: '' }));
    }
  };

  const handleInputEmail = (e) => {
    console.log(validator.isEmail(e.target.value));
    setUserInput((cur) => ({ ...cur, email: e.target.value }));
    if (e.target.value === '') {
      setError((cur) => ({ ...cur, email: '' }));
    } else if (!validator.isEmail(e.target.value)) {
      setError((cur) => ({ ...cur, email: 'invalid email format' }));
    } else {
      setError((cur) => ({ ...cur, email: '' }));
    }
  };

  const handleInputConfirmPassword = (e) => {
    setUserInput((cur) => ({ ...cur, confirmPassword: e.target.value }));

    if (userInput.password !== e.target.value) {
      setError((cur) => ({ ...cur, confirmPassword: 'confirm password does not match!' }));
    } else {
      setError((cur) => ({ ...cur, confirmPassword: '' }));
    }
  };

  return (
    <Box
      height='100%'
      width='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='spaceAround'>
      <Box
        // border="solid 1px red"
        flexGrow={1}
        display='flex'
        flexDirection='column'
        alignItems='start'
        justifyContent='end'
        width='100%'
        ml={1}>
        <Typography variant='h4'>Join Estuary</Typography>
        <Box>
          <Typography>Already have an account?</Typography>
        </Box>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        flexDirection='column'
        flexGrow={1}
        sx={{
          // height: "100%",

          width: '100%',

          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        component='form'
        onSubmit={handleSubmitSignup}
        noValidate
        autoComplete='off'>
        <TextField
          size='small'
          label='Username (required)'
          defaultValue=''
          error={error.username !== '' ? true : false}
          helperText={error.username}
          value={userInput.username}
          onChange={handleInputUsername}
        />
        <TextField
          size='small'
          label='Email (required)'
          type='text'
          error={error.email !== '' ? true : false}
          helperText={error.email}
          value={userInput.email}
          onChange={handleInputEmail}
        />
        <TextField
          size='small'
          label='Password (required)'
          type='password'
          error={error.password !== '' ? true : false}
          helperText={error.password}
          value={userInput.password}
          onChange={handleInputPassword}
        />
        <TextField
          size='small'
          label='Confirm password (required)'
          type='password'
          error={error.confirmPassword !== '' ? true : false}
          helperText={error.confirmPassword}
          onChange={handleInputConfirmPassword}
        />
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', mt: '10px' }}>
          <Button type='submit' variant='gradient' sx={{ mt: 2 }}>
            Submit
          </Button>
          <Button variant='gradient3' sx={{ mt: '.8rem' }}>
            <Link sx={{ textDecoration: 'none' }} href='/login'>
              Log In
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SignupInputForm;
