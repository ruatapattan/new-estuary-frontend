import React from 'react';
import { Box } from '@mui/system';
import SideBarProfileL from '../sidebar/SideBarProfileL';
import ProfileForm from '../profile/ProfileForm';
import ProfileEditForm from '../profile/ProfileEditForm';
import CreactProductContainer from '../product/CreactProductContainer';
import Banner from '../profile/Banner';

function ProfileContainer() {
  return (
    <Box
      flexWrap="wrap"
      sx={{
        width: '100%',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#EFF1F3'
      }}
    >
      <Banner />

      <SideBarProfileL />
      <ProfileForm />
      {/* <ProfileEditForm /> */}
      {/* <CreactProductContainer /> */}
    </Box>
  );
}

export default ProfileContainer;
