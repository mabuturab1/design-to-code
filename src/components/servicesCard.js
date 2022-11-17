import { Box, Card, Link, styled, Typography } from '@mui/material';
import React from 'react';

const CardRoot = styled(Card)(({ theme }) => ({
  boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: 20,
  padding: '3rem 3rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem',
}));

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
      <Link href={link}>Learn More</Link>
    </CardRoot>
  );
};

export default ServicesCard;
