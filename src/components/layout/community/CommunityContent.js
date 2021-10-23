import React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
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

function CommunityContent() {
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
        <Box mb='20px' width='100%' display='flex' justifyContent='center'>
          <Typography variant='h3' component='h3' mb='20px'>
            Community
          </Typography>
        </Box>
        <CreatePost />
        <Post />
      </Box>
    </>
  );
}

export default CommunityContent;
