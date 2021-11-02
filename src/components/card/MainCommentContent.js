import React from 'react';
import Typography from '@mui/material/Typography';

function MainCommentContent({ content, name }) {
  // console.log(name);

  return (
    <>
      <Typography sx={{ display: 'inline' }} variant='body2' color='text.secondary'>
        <Typography variant='body2' color='text.secondary' sx={{ marginBottom: '10px' }}>
          {name}
          {/* Name */}
        </Typography>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus perferendis ea aut molestias
        accusantium eveniet tempore! */}
        {content}
      </Typography>
    </>
  );
}

export default MainCommentContent;
