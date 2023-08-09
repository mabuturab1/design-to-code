import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const RecWorkContainer = styled(Box)(({ theme }) => ({
  width: '200%',
  height: '100%',
  background: `linear-gradient(#F0F5FD,#F2F0FD00)`,
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

export const RootStyle = styled(Box)(() => ({
  width: '100%',
  height: 'fit-content',
  overflow: 'hidden',
  position: 'relative',
}));

export const ItemContainer = styled(Box)(({ theme }) => ({
  width: '100%%',
  height: 500,
  borderRadius: '50%',
  background: `linear-gradient(#F0F5FD,#F2F0FD00)`,
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  border: '2px solid',
  borderRadius: 30,
  marginBottom: 100,
  padding: 50,
  borderColor: theme.palette.primary.dark,
  [theme.breakpoints.down('449')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
