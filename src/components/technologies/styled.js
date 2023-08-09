import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const TechIonsCont = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'no-wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.5rem',
  width: '100%',
  marginTop: '4rem',
  '& > :nth-of-type(4n+3)': {
    marginTop: '-5%',
    alignItems: 'center',
  },
}));

export const BackMajorEclipse = styled(Box)(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  width: '50%',
  borderRadius: '50%',
  background: theme.palette.primary.main,
  opacity: 0.25,
  filter: 'blur(40px)',
  bottom: '-35%',
  right: 0,
  left: 0,
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    left: 0,
    width: '100%',
  },
}));
