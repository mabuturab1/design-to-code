import React from 'react';
import { Avatar, Box, Card, CardMedia, Grid, Link, Typography } from '@mui/material';
import { ItemContainer, Wrapper } from './styled';
import { motion } from 'framer-motion';
import theme from 'theme';

export default function ImageWorkCard(props) {
  const { logo, title} = props;
  return (
    <Link variant='h5' color='inherit' underline='none'>
      <Box sx={{ flex: 1 }} display={'flex'} flexDirection='column' alignItems={'flex-start'} justifyContent={'flex-start'}>
        <CardMedia component='img' sx={{ height: '39px', objectFit: 'contain', width: 'auto' }} image={logo} alt={title} />
      </Box>
    </Link>
  );
}
