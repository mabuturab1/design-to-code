import React from 'react';
import { Avatar, Box, Card, CardMedia, Grid, Link, Typography } from '@mui/material';
import { ItemContainer, Wrapper } from './styled';
import { motion } from 'framer-motion';
import theme from 'theme';

export default function NewWorkCard(props) {
  const { logo, title, summary, img, question, isWeb } = props;
  return (
    <Link variant='h5' color='inherit' underline='none'>
      <Wrapper>
        <Box sx={{ flex: 1, marginRight: '8vw' }} display={'flex'} flexDirection='column' alignItems={'flex-start'} justifyContent={'flex-start'}>
          <CardMedia component='img' sx={{ height: '39px', objectFit: 'contain', width: 'auto' }} image={logo} alt={title} />
          <Typography marginTop={5} variant='h4' color={'black'}>
            {question}
          </Typography>
          <Typography marginTop={5} variant='body1' color={'black'}>
            {summary}
          </Typography>
        </Box>
        <CardMedia component='img' sx={{ height: !isWeb ? '500px' : '400px', borderRadius: isWeb ? '2%' : '0%' , objectFit: 'contain', width: 'auto' }} image={img} alt={title} />
      </Wrapper>
    </Link>
  );
}
