import { Box, Link, List, styled } from '@mui/material';

export const NavBarRoot = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  gap: '1.5rem',
  width: '100%',
}));

export const NavbarList = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const NavDrawerList = styled(List)(({ theme }) => ({
  '& a': {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '& .MuiListItem-root': {
      columnGap: '1.4em',
    },
  },
}));
