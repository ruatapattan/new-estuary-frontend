import React, { useEffect, useState } from 'react';
import { Box, styled } from '@mui/system';
import { Button, Grid, TextField } from '@mui/material';
import { useParams, useHistory } from 'react-router-dom';
import axios from '../../../config/axios';
import validator from 'validator';
import userValidate from '../../../services/userValidate';
import passwordValidate from '../../../services/passwordValidate';
import phoneValidate from '../../../services/phoneValidate';

function ProfileEditFrom() {
  const param = useParams();
  const history = useHistory();
  const textFieldStyle = { width: { xs: '80%', sm: '70%' }, mb: '25px' };
  const defaulfProfile = 'https://res.cloudinary.com/dl7u9oybl/image/upload/v1635217695/headshot_default_utpjzp.gif';
  const defaulfBanner = 'https://res.cloudinary.com/dl7u9oybl/image/upload/v1635217850/img-placeholder_rutnat.jpg';

  const [isFocus, setIsFocus] = useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
    birthDate: false,
    address: false,
    phone: false
  });

  const [error, setError] = useState({});
  const [userInput, setUserInput] = useState({});
  const [previewProfile, setPreviewProfile] = useState('');
  const [previewBanner, setPreviewBanner] = useState('');
  const [typePic, setTypePic] = useState([]);

  useEffect(() => {
    const callProfile = async () => {
      await axios
        .get(`/profile/${param.id}`)
        .then(res => {
          setUserInput({ ...res.data.user });
          setUserInput(cur => ({ ...cur, password: '' }));
        })
        .catch(err => {
          console.dir(err);
        });
    };
    callProfile();
  }, []);

  const Input = styled('input')({
    display: 'none'
  });

  ///////////// PUT Profile ///////////////////
  const handleSubmitEditProfile = async e => {
    e.preventDefault();
    console.dir(userInput.bannerPic);
    console.dir(typePic);
    let isError = false;
    try {
      if (!userInput.username) {
        setError(cur => ({ ...cur, username: 'username is required' }));
        isError = true;
      }
      if (!userInput.password) {
        setError(cur => ({ ...cur, password: 'password is required' }));
        isError = true;
      }
      if (!userInput.email) {
        setError(cur => ({ ...cur, email: 'email is required' }));
        isError = true;
      }

      if (error.username || error.password || error.email || error.phone) {
        isError = true;
      }

      if (!isError) {
        const formData = new FormData();

        formData.append('username', userInput.username);
        formData.append('password', userInput.password);
        formData.append('email', userInput.email);
        formData.append('firstName', userInput.firstName);
        formData.append('lastName', userInput.lastName);
        formData.append('phone', userInput.phone);
        formData.append('birthDate', userInput.birthDate);
        formData.append('address', userInput.address);
        formData.append('editPic', userInput.profilePic);
        formData.append('editPic', userInput.bannerPic);
        formData.append('typePic', typePic);

        // console.dir(formData);
        await axios.put(`/profile/${param.id}`, formData);

        // history.push({
        //   pathname: '/profile',
        //   state: { message: 'Your account has been updated' }
        // });
      }
    } catch (err) {
      // //username errors
      if (err.response && err.response.data.message.usernameSame) {
        setError(cur => ({ ...cur, username: err.response.data.message.usernameSame }));
      }
      // //email error
      if (err.response && err.response.data.message.emailSame) {
        setError(cur => ({ ...cur, email: 'email already in use!' }));
      }
    }
  };

  //////////// check error frontend ///////////////////
  const handleInputUsername = e => {
    setUserInput(cur => ({ ...cur, username: e.target.value }));
    if (e.target.value === '') {
      setError(cur => ({ ...cur, username: 'username is required' }));
    } else if (!userValidate.validateLength(e.target.value)) {
      setError(cur => ({ ...cur, username: 'username must be 6-12 characters long' }));
    } else if (!validator.isAlphanumeric(e.target.value)) {
      setError(cur => ({
        ...cur,
        username: 'username must consists of alphabets and numbers only'
      }));
    } else setError(cur => ({ ...cur, username: '' }));
  };

  const handleInputPassword = e => {
    setUserInput(cur => ({ ...cur, password: e.target.value }));
    if (e.target.value === '') {
      setError(cur => ({ ...cur, password: 'password is required' }));
    } else if (!passwordValidate.validateCharacter(e.target.value)) {
      setError(cur => ({
        ...cur,
        password: 'password must contain small letter, capitalized letter, and number'
      }));
    } else if (!passwordValidate.validateLength(e.target.value)) {
      setError(cur => ({ ...cur, password: 'password must be at least 6 characters long' }));
    } else {
      setError(cur => ({ ...cur, password: '' }));
    }
  };

  const handleInputEmail = e => {
    setUserInput(cur => ({ ...cur, email: e.target.value }));
    if (e.target.value === '') {
      setError(cur => ({ ...cur, email: 'email is required' }));
    } else if (!validator.isEmail(e.target.value)) {
      setError(cur => ({ ...cur, email: 'invalid email format' }));
    } else {
      setError(cur => ({ ...cur, email: '' }));
    }
  };

  const handleInputFirstName = e => {
    setUserInput(cur => ({ ...cur, firstName: e.target.value }));
    console.dir(userInput.firstName);
  };

  const handleInputLastName = e => {
    setUserInput(cur => ({ ...cur, lastName: e.target.value }));
  };

  const handleInputPhone = e => {
    setUserInput(cur => ({ ...cur, phone: e.target.value }));
    if (!e.target.value == '') {
      if (!phoneValidate.validateCharacter(e.target.value)) {
        setError(cur => ({
          ...cur,
          phone: 'phone number must contain number'
        }));
      } else if (!phoneValidate.validateLength(e.target.value)) {
        setError(cur => ({ ...cur, phone: 'phone must be 10 characters long' }));
      } else {
        setError(cur => ({ ...cur, phone: '' }));
      }
    } else {
      setError(cur => ({ ...cur, phone: '' }));
    }
  };

  const handleInputBirthDate = e => {
    setError(cur => ({ ...cur, birthDate: '' }));
    setUserInput(cur => ({ ...cur, birthDate: e.target.value }));
  };

  const handleInputAddress = e => {
    setUserInput(cur => ({ ...cur, address: e.target.value }));
  };

  ////////////ChangeProfile////////////////////
  // const hiddenProfilePicInput = React.useRef(null);

  // const handleClickProfilePic = e => {
  //   hiddenProfilePicInput.current.click();
  // };
  const handleChangeProfilePic = e => {
    // console.dir(e.target.files[0]);
    setUserInput(cur => ({ ...cur, profilePic: e.target.files[0] }));
    setTypePic(cur => [...cur, 'PROFILE']);
    setPreviewProfile(URL.createObjectURL(e.target.files[0]));
  };

  ////////////ChangeBanner////////////////////
  // const hiddenBannerPicInput = React.useRef(null);

  // const handleClickBannerPic = e => {
  //   hiddenBannerPicInput.current.click();
  // };
  const handleChangeBannerPic = e => {
    setUserInput(cur => ({ ...cur, bannerPic: e.target.files[0] }));
    setTypePic(cur => [...cur, 'BANNER']);
    setPreviewBanner(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      {/* <Grid item md={10} sm={12} xs={12}> */}
      <Box
        sx={{
          width: { md: '72%', sm: '100%', xs: '100%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
          // border: '1px solid red'

          // backgroundColor: '#EFF1F3'
        }}
      >
        <Box
          sx={{
            // height: '6%',
            // width: '70%',
            width: { xs: '90%', sm: '90%', md: '70%' },
            backgroundColor: '#232836',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            padding: '20px 50px',
            mt: '80px'
          }}
        >
          Editprofile
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmitEditProfile}
          sx={{
            // height: '80%',
            // width: '70%',
            width: { xs: '90%', sm: '90%', md: '70%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '80px 0px',
            mb: '80px'
          }}
        >
          <TextField
            id="outlined-username-input"
            label={isFocus.username ? 'Username' : ''}
            sx={textFieldStyle}
            placeholder={!userInput.username && 'Username'}
            value={userInput.username}
            error={error.username !== '' ? true : false}
            helperText={error.username}
            onFocus={() => setIsFocus(curr => ({ ...curr, username: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, username: false }))}
            onChange={handleInputUsername}
          />
          {/* {error.username && <p>{error.username}</p>} */}

          <TextField
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            label={isFocus.password ? 'Password' : ''}
            sx={textFieldStyle}
            placeholder={!userInput.password && 'Password'}
            value={userInput.password}
            error={error.password !== '' ? true : false}
            helperText={error.password}
            onFocus={() => setIsFocus(curr => ({ ...curr, password: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, password: false }))}
            onChange={handleInputPassword}
          />

          <TextField
            id="outlined-email-address-input"
            label={isFocus.email ? 'Email Address' : ''}
            sx={textFieldStyle}
            placeholder={!userInput.email && 'Email Address'}
            value={userInput.email}
            error={error.email !== '' ? true : false}
            helperText={error.email}
            onFocus={() => setIsFocus(curr => ({ ...curr, email: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, email: false }))}
            onChange={handleInputEmail}
          />

          <TextField
            id="outlined-firstName-input"
            label={isFocus.firstName ? 'First Name' : ''}
            sx={textFieldStyle}
            placeholder={!userInput.firstName && 'First Name'}
            value={userInput.firstName}
            onFocus={() => setIsFocus(curr => ({ ...curr, firstName: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, firstName: false }))}
            onChange={handleInputFirstName}
          />

          <TextField
            id="outlined-lastName-input"
            label={isFocus.lastName ? 'Last Name' : ''}
            sx={textFieldStyle}
            placeholder={!userInput.lastName && 'Last Name'}
            value={userInput.lastName}
            onFocus={() => setIsFocus(curr => ({ ...curr, lastName: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, lastName: false }))}
            onChange={handleInputLastName}
          />

          <TextField
            id="outlined-phone-input"
            label={isFocus.phone ? 'Phone Number' : ''}
            sx={textFieldStyle}
            placeholder={!userInput.phone && 'Phone Number'}
            value={userInput.phone}
            error={error.phone !== '' ? true : false}
            helperText={error.phone}
            onFocus={() => setIsFocus(curr => ({ ...curr, phone: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, phone: false }))}
            onChange={handleInputPhone}
          />

          <TextField
            id="outlined-birthDate-input"
            type="date"
            label={isFocus.birthDate ? 'Birth Date' : ''}
            sx={textFieldStyle}
            value={userInput.birthDate}
            onFocus={() => setIsFocus(curr => ({ ...curr, birthDate: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, birthDate: false }))}
            onChange={handleInputBirthDate}
          />

          <TextField
            id="outlined-address-input"
            label={isFocus.address ? 'Address' : ''}
            sx={textFieldStyle}
            placeholder={!userInput.address && 'Address'}
            value={userInput.address}
            onFocus={() => setIsFocus(curr => ({ ...curr, address: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, address: false }))}
            onChange={handleInputAddress}
          />

          <Box
            sx={{
              // height: '90px',
              width: { xs: '80%', sm: '70%' },
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'space-between',
              // "& .MuiTextField-root": {  mb: '25px' },
              mb: '80px'
            }}
          >
            <img
              src={previewProfile ? previewProfile : userInput.profilePic ? userInput.profilePic : defaulfProfile}
              alt=""
              sx={{ mb: '25px' }}
            />
            <label htmlFor="contained-buttonProfile-file">
              <Input
                accept="image/*"
                id="contained-buttonProfile-file"
                multiple
                type="file"
                // ref={hiddenProfilePicInput}
                onChange={handleChangeProfilePic}
                sx={{ display: 'none' }}
              />
              <Button
                variant="contained"
                component="span"
                sx={{ width: '100%', bgcolor: 'gray', mb: '25px' }}
                // onClick={handleClickProfilePic}
              >
                Upload Profile
              </Button>
            </label>

            <img
              src={previewBanner ? previewBanner : userInput.bannerPic ? userInput.bannerPic : defaulfBanner}
              alt=""
              sx={{ mb: '25px' }}
            />

            <label htmlFor="contained-buttonBanner-file">
              <Input
                accept="image/*"
                id="contained-buttonBanner-file"
                multiple
                type="file"
                // ref={hiddenBannerPicInput}
                onChange={handleChangeBannerPic}
                sx={{ display: 'none' }}
              />
              <Button
                variant="contained"
                component="span"
                sx={{ width: '100%', bgcolor: 'gray', mb: '25px' }}
                // onClick={handleClickBannerPic}
              >
                Upload Banner
              </Button>
            </label>
          </Box>
          <Button type="submit" variant="gradient" sx={{ color: 'white', p: '10px', width: { xs: '80%', sm: '70%' } }}>
            Save
          </Button>
        </Box>
      </Box>
      {/* </Grid> */}
    </>
  );
}

export default ProfileEditFrom;
