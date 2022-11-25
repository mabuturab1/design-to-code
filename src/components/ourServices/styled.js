import { Box, Card, styled } from '@mui/material';

export const ServCardCont = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '3.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',

  [theme.breakpoints.up('md')]: {
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.down('md')]: {
    gap: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '2rem',
  },

  // '& > div:nth-of-type(2)': {
  //   [theme.breakpoints.up('md')]: {
  //     marginTop: '-7.5rem',
  //   },
  // },
}));

export const CardRoot = styled(Card)(({ theme }) => ({
  boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: 20,
  padding: '3rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem',
  maxWidth: 340,

  [theme.breakpoints.down('lg')]: {
    padding: '2rem',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: 295,
  },
}));
