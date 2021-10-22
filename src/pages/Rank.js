import React from 'react';
import RankContainer from '../components/layout/rank/RankContainer';
import SideBarL from '../components/layout/sidebar/SideBarL';
import { Box } from '@mui/system';
function Rank() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        backgroundColor: '#EFF1F3'
      }}
    >
      <SideBarL />
      <RankContainer />
    </Box>
  );
}

export default Rank;
