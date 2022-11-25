import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { TestimonialCardRoot } from './styled';

const TestimonialCard = (props) => {
  const { message, userImg, username } = props;
  return (
    <TestimonialCardRoot className='card'>
      <Box display='flex' flexWrap='nowrap' gap={3}>
        <Avatar src={userImg} alt='userImg' sx={{ width: 40, height: 40 }} />
        <Box>
          <Typography variant='h5'>{username}</Typography>
          <Typography variant='subtitle2' color='primary.main'>
            Owner at ABC
          </Typography>
        </Box>
      </Box>
      <Typography variant='body1'>{message}</Typography>
    </TestimonialCardRoot>
  );
};

export default TestimonialCard;
