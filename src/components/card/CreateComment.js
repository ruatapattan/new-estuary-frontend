import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';

function CreateComment() {
  return (
    <Box sx={{ p: '5px 0', mb: '20px' }}>
      <cardActionsClasses>
        <Grid container justifyContent='space-evenly'>
          <Grid item>
            <Avatar
              aria-label='recipe'
              src='https://images.unsplash.com/photo-1488371934083-edb7857977df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=380&q=80'
              sx={{ width: 40, height: 40 }}></Avatar>
          </Grid>
          <Grid item xs={6} md={5}>
            <TextField id='standard-basic' label='comment' variant='standard' sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={2} md={2}>
            <Button variant='contained' endIcon={<SendIcon />} color='success' />
          </Grid>
        </Grid>
      </cardActionsClasses>
    </Box>
  );
}

export default CreateComment;
