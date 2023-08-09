import React from 'react';
import { Avatar, Box, Card, CardMedia, Typography } from '@mui/material';
import { ItemContainer } from './styled';
import theme from 'theme';

export default function WorkCard(props) {
  const { img, title, icons, description } = props;
  return (
    <ItemContainer>
      <Box sx={{ paddingLeft: '30px', paddingRight: '30px' }} display='flex' flexDirection={'column'} alignItems='start' justifyContent='start'>
        <Typography marginBottom={2} variant='h5'>{title}</Typography>
        {description?.map((_d, index) => (
          <Typography key={index} variant='body2' marginBottom={3}>
            {_d}
          </Typography>
        ))}
      </Box>
      <Box sx={{ height: '600px', borderRadius: 10, overflow: 'none', width: 'auto' }} display={'flex'} flexDirection='row' justifyContent={'center'}>
        <CardMedia component='img' image={img} alt={title} sx={{ objectFit: 'contain', height: '600px', borderRadius: '12px', width: 'auto', border: '10px solid rgba(0,0,0,0.9)' }} />
      </Box>
    </ItemContainer>
  );
}
