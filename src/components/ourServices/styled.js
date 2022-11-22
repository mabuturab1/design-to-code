import { Box, Card, styled } from '@mui/material';

export const ServCardCont = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '3.5rem',
  flexWrap: 'wrap',

  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },

  '& > div:nth-of-type(2)': {
    [theme.breakpoints.up('md')]: {
      marginTop: '-7.5rem',
    },
  },

  // display: 'grid',
  // gridGap: '1rem',
  // gridTemplateColumns: 'repeat(3, 1fr)',

  // [theme.breakpoints.down('md')]: {
  //   gridTemplateColumns: 'repeat(2, 1fr)',
  // },
  // [theme.breakpoints.down('449')]: {
  //   gridTemplateColumns: 'repeat(1, 1fr)',
  // },
}));

export const CardRoot = styled(Card)(({ theme }) => ({
  boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.1)',
  borderRadius: 20,
  padding: '3rem 3rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem',
}));
