import { alpha, Avatar, Box, Link, styled, Typography } from '@mui/material';
import React from 'react';

const CardWrapper = styled(Link)(({ theme }) => ({
  backgroundImage: `url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjclkOXJoIFw85atGflcZgoi7dRL-lqqU-vn44tQNhKlUtl0XMXN8KDC2UHs2IN7KjUpil8O3s_tcvMrWkyUw8EtYSug-Vq8lGlbPVZ5rGp3QzeaI38ouP24ILSQA0gFyttS5OSL2rJcbjSS1fXT8Mag_T__XhxL0k9byB8_c53Ca7EGFDs-q48TotK3A/w415-h540-n/rezwan-ahmed-pkQ8jTqVmW0-unsplash.jpg")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative',
  display: 'block',

  color: '#fff !important',
  width: '100%',
  height: 480,

  '&:hover': {
    cursor: 'pointer',
    boxShadow: `inset 0 0 0 2000px ${alpha(theme.palette.primary.dark, 0.3)}`,
    '& h4': {
      textDecoration: 'underline',
      textUnderlinePosition: 'under',
    },
  },
}));

const SpecCard = (props) => {
  const { title, author, publishedOn } = props;
  return (
    <CardWrapper href={`/blog/${title}`}>
      <Box position='absolute' bottom={0} p={4}>
        <Typography variant='h4' sx={{ marginBottom: '1.5rem' }}>
          {title}
        </Typography>
        <Box display='flex' alignItems='center' gap={2}>
          <Avatar
            alt={author.name}
            src={author.img}
            sx={{ width: 48, height: 48 }}
          />
          <Box>
            <Typography variant='subtitle2'>{author.name}</Typography>
            <Typography variant='subtitle2'>{publishedOn}</Typography>
          </Box>
        </Box>
      </Box>
    </CardWrapper>
  );
};

export default SpecCard;
