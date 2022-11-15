import {
  Avatar,
  Box,
  Card,
  Link,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';

const CardRoot = styled(Card)(({ theme }) => ({
  boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: 20,
  padding: '2.5rem 2rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem',
  maxWidth: 270,
}));

const ServicesCard = (props) => {
  const { title, desc, link, img } = props;
  return (
    <CardRoot>
      {/* <Avatar
        src='/static/images/mgt-serv.svg'
        alt={title}
        sx={{ width: 40, height: 40 }}
      /> */}

      <Box width={40} height={40}>
        <picture>
          <img
            src={img}
            height='100%'
            width='100%'
            alt={title.split(' ')[0]}
          />
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
