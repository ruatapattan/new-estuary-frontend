import React, { useContext } from 'react';
import { Box } from '@mui/system';
import SideBarProfileL from '../sidebar/SideBarProfileL';
import ProfileForm from '../profile/ProfileForm';
import ProfileEditForm from '../profile/ProfileEditForm';
import CreactProductContainer from '../product/CreactProductContainer';
import Banner from '../profile/Banner';
import { SidebarContext } from '../../../contexts/SidebarContext';

function ProfileContainer() {
  const { chooseNavProfile } = useContext(SidebarContext);

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
      {chooseNavProfile === 'Create' && <CreactProductContainer />}
      {chooseNavProfile === 'Editprofile' && <ProfileEditForm />}
      {/* {chooseNavProfile==='Wallet' && < />} */}
      {chooseNavProfile === '' && <ProfileForm />}
    </Box>
  );
}

export default ProfileContainer;
