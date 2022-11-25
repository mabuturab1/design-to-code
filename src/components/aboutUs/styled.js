import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  paddingBlock: '2.5rem',
  background: `linear-gradient(#F0F5FD,#F2F0FD00)`,
}));

export const WorkContentCont = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  justifyContent: 'space-between',

  [theme.breakpoints.up('md')]: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5rem',
  },

  '& .illustration': {
    flex: 1,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export const WorkContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  height: '100%',
  flex: 1,
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    gap: '1rem',
    alignItems: 'center',
    '& .subtitle': {
      textAlign: 'center',
    },
    '& .statsContent': {
      marginTop: '4rem',
    },
  },

  '& .statsContent': {
    width: '100%',
    display: 'flex',
    gap: '2rem',
    justifyContent: 'space-around',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: 'fit-content',
    },
  },
}));

export const WorkImgSm = styled('div')(({ theme }) => ({
  '& img': {
    width: 60,
    height: '100%',
    objectFit: 'contain',
  },
}));
