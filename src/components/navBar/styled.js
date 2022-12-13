import { Box, Link, List, styled } from '@mui/material';

export const NavBarRoot = styled('div')(({ theme }) => ({
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

  // '& *': {
  //   fontSize: 15,
  //   fontWeight: 500,
  // },
}));

export const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: 18,
  color: theme.palette.text.primary,
  fontWeight: 500,

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
