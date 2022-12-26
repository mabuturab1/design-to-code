import { Box, Link, styled } from '@mui/material';
import { style } from '@mui/system';
import { motion } from 'framer-motion';

export const BodyRoot = styled('div')(({ theme }) => ({
  // overflow: 'auto hidden',
  // '& > div': {
  //   marginBottom: '4rem',
  //   [theme.breakpoints.down('sm')]: {
  //     marginBottom: '6rem',
  //   },
  // },
}));

export const SectionRoot = styled(Box)(({ theme }) => ({
  paddingInline: '2.5rem',
  paddingBlock: '1rem',
  backgroundColor: 'transparent',
  maxWidth: 1200,
  marginInline: 'auto',
}));

export const BackIllustration = styled('div')(({ theme }) => ({
  position: 'absolute',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const SmallBackEllipse = styled(Box)(({ theme }) => ({
  width: 200,
  height: 200,
  background: theme.palette.primary.main,
  opacity: 0.1,
  filter: 'blur(40px)',
  position: 'absolute',
  // top: 0,
}));

export const LinkExt = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
