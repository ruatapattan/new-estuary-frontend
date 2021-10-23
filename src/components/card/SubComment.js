import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { purple } from '@mui/material/colors';

function SubComment() {
  return (
    <Stack justifyContent='space-between' direction='row' spacing={1} ml='30px' mb='10px'>
      <Avatar
        aria-label='recipe'
        src='https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
        sx={{ width: 40, height: 40 }}>
        C
      </Avatar>
      <Paper sx={{ padding: '10px' }}>
        <Typography sx={{ display: 'inline' }} variant='body2' color='text.secondary'>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus perferendis ea aut molestias
          accusantium eveniet tempore!
        </Typography>
        <Grid container spacing={3}>
          <Grid item>
            <ThumbUpOutlinedIcon />
            <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
              5
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ display: 'inline' }} variant='body2' color='text.disabled'>
              September 14, 2016
            </Typography>
          </Grid>

          {/* <Grid item>
            <ChatBubbleOutlineOutlinedIcon />
            <Typography sx={{ display: 'inline' }} variant='body2' color='text.secondary'>
              2
            </Typography>
          </Grid> */}
        </Grid>
      </Paper>
    </Stack>
  );
}

export default SubComment;
