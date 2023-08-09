import React from 'react';
import { Avatar, Box, Card, CardMedia, Typography } from '@mui/material';
import { ItemContainer } from './styled';

export default function WorkCard(props) {
  const { img, title, icons } = props;
  return (
    <ItemContainer>
      <Box sx={{ paddingLeft: 20, paddingRight: 20 }} display='flex' alignItems='start' justifyContent='space-between'>
        <Typography variant='h5'>{title}</Typography>
      </Box>
      <Card>
        <CardMedia component='img' image={img} alt={title} />
      </Card>
    </ItemContainer>
  );
}
