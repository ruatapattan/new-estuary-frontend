import { Avatar, Link } from '@mui/material';
import axios from '../../../config/axios';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

function RankList({ color, item }) {
  const [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    const callProductbyTime = async () => {
      await axios
        .get(`/product/user/${item.id}`)
        .then(res => {
          setLastProduct([...res.data.products]);
        })
        .catch(err => {
          console.dir(err);
        });
    };

    callProductbyTime();
  }, []);

  const defaultProfilePic = 'https://res.cloudinary.com/dl7u9oybl/image/upload/v1635217695/headshot_default_utpjzp.gif';

  const linkStyle = {
    ml: { md: '0', xs: '30px' },
    background: '-webkit-linear-gradient( rgba(115, 194, 130, 1) 0%, rgba(64, 169, 223, 1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',

    ':hover': {
      background: '-webkit-linear-gradient( rgba(64, 169, 223, 0.5) 100%,rgba(115, 194, 130, 0.5) 0%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  };

  const countLikeStyle = {
    ml: { md: '0', xs: '30px' },
    background: '-webkit-linear-gradient( rgba(115, 194, 130, 1) 0%, rgba(64, 169, 223, 1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  //   const linkStyle = { color: 'rgb(34, 189, 205, 1) ' };

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: color,
        p: { md: '15px 30px', xs: '15px 20px' },
        display: 'flex',
        alignItems: 'center'
        // border: '1px solid red'
      }}
    >
      <Box
        sx={{
          width: { md: '35%', xs: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
          //   border: '1px solid red'
        }}
      >
        <Avatar
          aria-label="recipe"
          src={item?.profilePic ? item?.profilePic : defaultProfilePic}
          sx={{
            width: '60px',
            height: '60px',
            mr: { md: '15px', xs: '20px' }
          }}
        ></Avatar>
        <p>{item?.username}</p>
      </Box>

      <Box
        sx={{
          width: { md: '65%', xs: '50%' },
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          alignItems: { md: 'center', xs: 'flex-start' },
          justifyContent: 'space-around'
          //   border: '1px solid green'
        }}
      >
        {/* <Link href="#" underline="hover" sx={linkStyle}>
          community
        </Link> */}
        {/* <Link href="#" underline="hover" sx={linkStyle}>
          collection
        </Link> */}
        <Link href={`/profile/${item.id}`} underline="hover" sx={linkStyle}>
          Profile
        </Link>
        <Link href={`/product/${lastProduct[0]?.id}`} underline="hover" sx={linkStyle}>
          Product
        </Link>
        <Link underline="hover" display="flex" alignItems="center" sx={countLikeStyle}>
          {item.countLike}
          <FavoriteIcon sx={{ color: 'rgba(64, 169, 223, 0.5)', fontSize: '14px', ml: '5px', lineHeight: '0px' }} />
        </Link>
      </Box>
    </Box>
  );
}

export default RankList;
