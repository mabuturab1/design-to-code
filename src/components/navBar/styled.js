import { Box, styled } from '@mui/material';

export const NavBarRoot = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  gap: '1.5rem',
}));

export const NavbarList = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  gap: '0.8rem',
}));
