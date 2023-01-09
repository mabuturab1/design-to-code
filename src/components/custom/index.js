import { Box, Link, styled } from '@mui/material';
import { motion } from 'framer-motion';

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
}));

export const LinkExt = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
export const BackColoredCont = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  paddingBlock: '1.5rem',
  background: `linear-gradient(#F0F5FD,#F2F0FD00)`,
}));

export const HeadrAlgnCentr = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const FlexForImgCont = styled(Box)(({ theme }) => ({
  display: 'flex',
  '& > div': {
    flex: '0 0 50%',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '3rem',
  },
}));

export const LargeRespImage = styled(motion.div)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '500px',
    marginInline: 'auto',
  },
}));
