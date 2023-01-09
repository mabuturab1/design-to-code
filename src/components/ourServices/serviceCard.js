import { Avatar, Box, Card, Link, styled, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

import { CardRoot } from './styled';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServicesCard = (props) => {
  const { title, desc, link, img } = props;
  return (
    <CardRoot>
      <Avatar
        variant='square'
        src={img}
        alt={title}
        sx={{ width: 60, height: 60 }}
      />
      <Typography variant='subtitle1' gutterBottom>
        {title}
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        {desc}
      </Typography>
      <Link href={link} variant='body2' color='primary.dark'>
        Learn More
      </Link>
    </CardRoot>
  );
};

export default ServicesCard;
