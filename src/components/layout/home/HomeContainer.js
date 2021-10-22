import { Box } from '@mui/system';
import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CreatePost from '../../card/CreatePost';
import Post from '../../card/Post';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function HomeContainer() {
  const hide = { display: { xs: 'none', md: 'flex' } };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: { xs: '100%', md: '60%' },
          mt: '20px',
        }}>
        {/* <Box mb='20px' width='100%'>
              <Paper variant='outlined' sx={{ bgcolor: 'primary' }} color='success'>
                <Typography variant='h3' component='h3' mb='20px'>
                  Home
                </Typography>
              </Paper>
            </Box> */}
        <CreatePost />
        <Post
          type='img'
          link='https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
        />
        <Post
          type='img'
          link='https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
        />
      </Box>
    </>
  );
}

export default HomeContainer;
