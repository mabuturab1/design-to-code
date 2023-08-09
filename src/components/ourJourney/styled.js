import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const RecWorkContainer = styled(Box)(({ theme }) => ({
  width: '200%',
  height: '100%',
  left: '-50%',
  right: 0,
  position: 'relative',
  [theme.breakpoints.down('449')]: {
    width: '300%',
    left: '-100%',
  },
}));

export const CardContainer = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const RowCardContainer = styled(motion.div)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridGap: '4rem',
}));

export const RowCardContainerPortfolioImage = styled(motion.div)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '4rem',
}));

export const RootStyle = styled(Box)(() => ({
  width: '100%',
  height: 'fit-content',
  overflow: 'hidden',
  position: 'relative',
}));

export const ItemContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: '50%',
  minHeight: 700,
  position: 'relative',
  display: 'grid',
  gridGap: '2rem',
  gridTemplateColumns: 'repeat(2, 1fr)',
  [theme.breakpoints.down('900')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  border: '2px solid',
  borderRadius: 30,
  marginBottom: 100,
  padding: 50,
  borderColor: 'rgba(0,0,0,0.8)',
  [theme.breakpoints.down('449')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const Wrapper = styled(Box)(() => ({
  position: 'relative',
  boxSizing: 'border-box',
  objectFit: 'contain',
  borderRadius: 15,
  overflow: 'hidden',
  marginRight: '20px',
  color: '#fff',
  borderRadius: '15px',
  border: '2px solid rgba(0,0,0,0.7)',
  padding: '40px',
  margin: '10px',
  transition: 'transform .3s',
  display: 'flex',
  flexDirection: 'row',
  width: '90vw',
  maxWidth: '1000px',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  // '&:hover': {
  //   transform: 'translateY(-1rem)',
  // },
}));
