import { Box } from '@mui/material';
import React from 'react';

const Logo = ({ sx, ...other }) => {
  return (
    <>
      <Box
        component='div'
        sx={{
          width: 230,
          height: 90,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <picture>
          <source
            srcSet='/static/images/logo.svg'
            type='image/webp'
          />
          <img
            src='/static/images/logo.svg'
            height='100%'
            width='100%'
            alt='Landscape picture'
          />
        </picture>
        {/* <img
          src='/static/images/logo.svg'
          height={50}
          alt='logo'
          width={500}
        /> */}
      </Box>
    </>
  );
};

export default Logo;
