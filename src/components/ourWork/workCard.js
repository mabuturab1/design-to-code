import React from 'react';
import { Avatar, Box, Card, CardMedia, Typography } from '@mui/material';

export default function WorkCard(props) {
  const { img, title, icons } = props;
  return (
    <Box display='flex' flexWrap='nowrap' flexDirection='column' gap='1rem'>
      <Card>
        <CardMedia
          component='img'
          image={img}
          alt={title}
          sx={{ width: '100%' }}
        />
      </Card>
      <Box
        display='flex'
        alignItems='start'
        gap='1rem'
        justifyContent='space-between'
      >
        <Typography variant='h5'>{title}</Typography>
        <Avatar
          src={icons[0]}
          variant='square'
          sx={{ width: 30, height: 30 }}
        />
      </Box>
    </Box>
  );
}
