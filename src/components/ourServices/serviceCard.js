import { Box, Card, Link, styled, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

import { CardRoot } from './styled';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServicesCard = (props) => {
  const { title, desc, link, img } = props;
  return (
    <CardRoot>
      <Box width={55} height={55}>
        <picture>
          <img src={img} height='100%' width='100%' alt={title.split(' ')[0]} />
        </picture>
      </Box>
      <Typography variant='subtitle1' gutterBottom>
        {title}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {desc}
      </Typography>
      <Link href={link} variant='body2' color='primary.dark'>
        {/* <Box display='flex' alignItems='center' flexWrap='nowrap' gap='0.25rem'> */}
        Learn More
        {/* <ArrowForwardIcon sx={{ fontSize: 18, color: 'primary.dark' }} /> */}
        {/* </Box> */}
      </Link>
    </CardRoot>
  );
};

export default ServicesCard;
