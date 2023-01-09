import { Avatar, Link } from '@mui/material';
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
      <Avatar
        variant='square'
        src='/static/images/logo.svg'
        alt='ConovoTech'
        sx={{ width: '100%', height: '100%' }}
      />
    </Link>
  );
};
