import React from 'react';
import { Box } from '@mui/system';
import CreateProductForm from './CreateProductForm';
import SideBarProfileL from '../sidebar/SideBarProfileL';
function CreactProductContainer() {
  return (
    <Box
      flexWrap="wrap"
      sx={{
        width: { md: '72%', xs: '100%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: 'white'
      }}
    >
      {/* <SideBarProfileL /> */}
      <CreateProductForm />
    </Box>
  );
}

export default CreactProductContainer;
