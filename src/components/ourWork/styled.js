import { Box, styled } from '@mui/material';
import { motion } from 'framer-motion';

export const RecWorkContainer = styled(Box)(({ theme }) => ({
  width: '200%',
  height: '100%',
  borderRadius: '50%',
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
  display: 'grid',
  gridGap: '2rem',
  gridTemplateColumns: 'repeat(3, 1fr)',

  [theme.breakpoints.between('450', '543')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('449')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

export const RootStyle = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'fit-content',
  overflow: 'hidden',
  position: 'relative',
}));
