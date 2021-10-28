import React from 'react';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

function PostCardContent({ content }) {
  return (
    <CardContent>
      <Typography variant='body2' color='text.secondary'>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat quaerat quibusdam facilis quisquam
        aliquam nulla veritatis fuga ea nihil. */}
        {content}
      </Typography>
    </CardContent>
  );
}

export default PostCardContent;
