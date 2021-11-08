import React, { useContext, useEffect, useState } from 'react';
import axios from '../../../config/axios';
import MenuItem from '@mui/material/MenuItem';
import { useHistory, useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button, Input, TextField } from '@mui/material';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthContext';

function EditProductForm() {
  const textFieldStyle = { width: { xs: '80%', sm: '70%' }, mb: '25px' };
  const location = useLocation();
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState(location.state.product.category);
  const [name, setName] = useState(location.state.product.productName);
  const [description, setDescription] = useState(location.state.product.description);
  const [price, setPrice] = useState(location.state.product.price);
  const [coverPic, setCoverPic] = useState(location.state.product.picProduct);
  const [image, setImage] = useState(location.state.product.picProduct);
  const [externalLink, setExternalLink] = useState(location.state.product.externalLink);

  const [isFocus, setIsFocus] = useState({
    productName: false,
    price: false,
    description: false
  });

  const [optionCategory, setOptionCategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get('/category');
        const fetChcategorys = res.data.categorys;
        setOptionCategory(fetChcategorys);
        console.log(fetChcategorys);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchCategory();
  }, []);

  const handleChangeFile = e => {
    // console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
    setCoverPic(e.target.files[0]);
  };

  const handleEditProduct = async e => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('categoryId', category);
      formData.append('price', price);
      formData.append('coverPic', coverPic);
      formData.append('externalLink', externalLink);
      formData.append('hashtag', 'link to product');

      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };

      const res = await axios.put(`/product/${location.state.product.id}`, formData, config);

      // const res = await axios.put(`/product/${location.state.product.id}`, {
      //   price,
      //   name,
      //   description,
      //   categoryId: category,
      //   coverPic,
      //   externalLink,
      // });

      // console.log(res.data);
      Swal.fire({
        icon: 'success',
        title: 'Successfully edited the product.',
        showConfirmButton: false,
        timer: 1500
      });
      history.push(`/profile/${user.id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
      // setErrorAddForm({ ...err, errBack: err.response.data.message });
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFF1F3'
      }}
    >
      <Box
        sx={{
          width: { md: '72%', sm: '100%', xs: '100%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          height: '80%',
          marginTop: '5rem'
        }}
      >
        <Box
          sx={{
            // height: '6%',
            // width: '70%',
            width: { xs: '100%', sm: '100%', md: '100%' },
            backgroundColor: '#232836',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            padding: '20px 50px'
            // mt: "50px",
          }}
        >
          Edit Item
        </Box>
        <Box sx={{ paddingTop: '30px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={image ? image : 'https://res.cloudinary.com/duca0jbyn/image/upload/v1635160655/1478594_uop0jq.png'}
              style={{
                width: '50%'
              }}
              alt=""
            />
          </div>

          <label htmlFor="contained-button-file">
            <Input
              id="contained-button-file"
              multiple
              type="file"
              sx={{ display: 'none' }}
              onChange={handleChangeFile}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Button
                variant="contained"
                component="span"
                sx={{
                  width: '60%',
                  bgcolor: 'gray',
                  mt: '15px'
                }}
              >
                Upload Profile
              </Button>
            </Box>
          </label>
        </Box>

        <Box
          sx={{
            width: { xs: '90%', sm: '90%', md: '70%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: '80px 0px',
            mb: '80px'
          }}
          component="form"
          onSubmit={handleEditProduct}
        >
          <TextField
            sx={textFieldStyle}
            label={isFocus.name ? 'Name' : ''}
            onFocus={() => setIsFocus(curr => ({ ...curr, name: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, name: false }))}
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <TextField
            id="standard-multiline-static"
            value={description}
            label={isFocus.description ? 'Description' : ''}
            onFocus={() => setIsFocus(curr => ({ ...curr, description: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, description: false }))}
            multiline
            sx={textFieldStyle}
            onChange={e => setDescription(e.target.value)}
          />
          <TextField
            id="outlined-select-currency"
            select
            sx={textFieldStyle}
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {optionCategory.map(item => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label={isFocus.price ? 'Price' : ''}
            onFocus={() => setIsFocus(curr => ({ ...curr, price: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, price: false }))}
            value={price}
            sx={textFieldStyle}
            onChange={e => setPrice(e.target.value)}
          />
          <TextField
            value={externalLink}
            label={isFocus.externalLink ? 'External Link' : ''}
            onFocus={() => setIsFocus(curr => ({ ...curr, externalLink: true }))}
            onBlur={() => setIsFocus(curr => ({ ...curr, externalLink: false }))}
            sx={textFieldStyle}
            onChange={e => setExternalLink(e.target.value)}
          />

          <Button type="submit" variant="gradient" sx={{ color: 'white', p: '10px', width: { xs: '80%', sm: '70%' } }}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EditProductForm;
