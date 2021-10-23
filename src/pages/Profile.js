import React from 'react';
import { Box } from '@mui/system';
import Banner from '../components/layout/profile/Banner';
import ProfileContainer from '../components/layout/profile/ProfileContainer';
import ProfileEditContainer from '../components/layout/profile/ProfileEditContainer';
import SideBarProfileL from '../components/layout/sidebar/SideBarProfileL';

function Profile() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        // border="5px solid red"
        // marginLeft="20%"
        width="100%"
      >
        <ProfileContainer />
      </Box>
    </>
  );
}

export default Profile;
