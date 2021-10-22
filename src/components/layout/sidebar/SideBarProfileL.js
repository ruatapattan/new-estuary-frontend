import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';
import { Button, Grid } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ForumIcon from '@mui/icons-material/Forum';
import StarsIcon from '@mui/icons-material/Stars';

const drawerWidth = '20vw';

const StyledDrawer = styled(Drawer)`
  & > div {
    background: rgb(115, 194, 130);
    background: linear-gradient(360deg, rgba(34, 189, 205, 1) 0%, rgba(115, 194, 130, 0.5) 100%);
  }
`;
// const StyledDrawer = styled(Drawer);

const menu = [
  { text: 'Favorite', icon: FavoriteIcon },
  { text: 'Create', icon: NoteAddIcon },
  { text: 'Editprofile', icon: SettingsIcon },
  { text: 'Wallet', icon: AccountBalanceWalletIcon },
  { text: 'Marketplace', icon: ShoppingCartIcon },
  { text: 'Community', icon: ForumIcon },
  { text: 'Ranking', icon: StarsIcon }
];

export default function SideBarProfileL() {
  return (
    <Grid item sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}

        <StyledDrawer
          className="drawerDiv"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <Divider />
            <List>
              {menu.map(item => (
                <ListItem button key={item.text}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </StyledDrawer>
      </Box>
    </Grid>
  );
}
