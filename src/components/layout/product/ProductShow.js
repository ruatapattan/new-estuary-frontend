import React from 'react';
import { CardMedia } from '@mui/material';
import { Box } from '@mui/system';

function ProductShow({ product }) {
  return (
    <Box sx={{ width: '100%', height: '400px', mb: '30px', backgroundColor: '#EFF1F3' }}>
      <CardMedia
        sx={{ objectFit: 'contain' }}
        component="img"
        height="100%"
        image={product?.coverPic}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Box>
  );
}

export default ProductShow;
