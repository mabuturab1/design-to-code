import { styled, Typography, Box } from '@mui/material';
import React from 'react';
import Logo from './logo';

const NavBarRoot = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  gap: '1.5rem',
}));

const NavbarList = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  gap: '0.8rem',
}));

export const NavBar = () => {
  return (
    <NavBarRoot>
      <Logo />
      <NavbarList>
        <Typography variant='body2' color='text.primary'>
          Portfolio
        </Typography>
        <Typography variant='body2'>About Us</Typography>
        <Typography variant='body2'>Blog</Typography>
        <Typography variant='body2'>Contact Us</Typography>
      </NavbarList>
    </NavBarRoot>
  );
};
