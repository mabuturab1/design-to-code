import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const Container = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  paddingBlock: '2.5rem',
  background: `linear-gradient(#F0F5FD,#F2F0FD00)`,
}));

export const AboutUsContainer = styled(Box)(() => ({
  width: '100%',
  height: '100%',
}));

export const WorkContent = styled(motion.div)(({ theme }) => ({
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
