import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton, Link, Menu, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';

function DesktopMenu({ anchorEl, handleMenuClose, handleClickSignOut, handleToggleBackdrop }) {
  const menuId = 'primary-search-account-menu';
  const isMenuOpen = Boolean(anchorEl);
  const { user } = useContext(AuthContext);

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link href={`/profile/${user?.id}`} color="text.primary" underline="none" display="flex" alignItems="center">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleToggleBackdrop}>
        <Box color="text.primary" underline="none" display="flex" alignItems="center">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AddIcon />
          </IconButton>
          <p>Create Community</p>
        </Box>
      </MenuItem>
      <MenuItem onClick={handleClickSignOut}>
        {/* <Link href="#" underline="none" display="flex" alignItems="center"> */}
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
        <p>Sign Out</p>
        {/* </Link> */}
      </MenuItem>
    </Menu>
  );
}

export default DesktopMenu;
