import React from 'react';
import Typography from '@mui/material/Typography';
import { createdAgo } from '../../../src/services/getTimeService';

function MainCommentContent({ content, name, time }) {
  // console.log(name);

  return (
    <>
      {/* <Typography sx={{ display: 'inline' }} variant='body2' color='text.secondary'> */}
      <Typography variant='body2' sx={{ marginBottom: '10px' }}>
        <span style={{ color: '#190505' }}> {name}</span>&nbsp;&nbsp;&nbsp;
        <span style={{ color: '#65676b' }}>
          {/* {new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date(time))} */}
          {Math.round(createdAgo(time).time)} {createdAgo(time).unit}
        </span>
        {/* Name */}
      </Typography>
      <Typography color='#050519'>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus perferendis ea aut molestias
        accusantium eveniet tempore! */}
        {content}
      </Typography>
    </>
  );
}

export default MainCommentContent;
