import React from 'react';
import { CardMedia } from '@mui/material';
import { Box } from '@mui/system';

function ProductShow() {
  return (
    <Box sx={{ width: '100%', height: '400px', mb: '30px', backgroundColor: '#EFF1F3' }}>
      <CardMedia
        sx={{ objectFit: 'contain' }}
        component="img"
        height="100%"
        image={
          'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
        }
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Box>
  );
}

export default ProductShow;
