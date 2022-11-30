import { Avatar, Box, Link, styled, Typography } from '@mui/material';

export const FooterContainerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  [theme.breakpoints.down('1000')]: {
    flexDirection: 'column',
    gap: '3rem',
    paddingBottom: '3rem',
  },
}));

export const CompInfoCont = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  [theme.breakpoints.down('1000')]: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const LinkContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  gap: '1.5rem',
  flex: 2,
  alignItems: 'baseline',
  justifyContent: 'space-around',

  [theme.breakpoints.down('600')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: '0.75rem',
    flex: 1,
    minWidth: 115,
    [theme.breakpoints.down('600')]: {
      alignItems: 'center',
    },
  },
}));

export const TypoEnd = styled(Typography)(({ theme }) => ({
  marginTop: '2rem',
  [theme.breakpoints.down('1000')]: {
    textAlign: 'center',
  },
}));

export const AvatarExt = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,

  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const FooterNavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  fontSize: 19,
  color: theme.palette.text.primary,
  fontWeight: 500,

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
