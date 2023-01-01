import { Link } from '@mui/material';
import React from 'react';

export const Logo = ({ sx, ...other }) => {
  return (
    <Link
      href='/'
      sx={{
        objectFit: 'contain',
        ...sx,
      }}
      {...other}
    >
      <picture>
        <img
          src='/static/images/logo.svg'
          height='100%'
          width='100%'
          alt='Landscape picture'
        />
      </picture>
    </Link>
  );
};
