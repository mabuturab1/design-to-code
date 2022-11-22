import { Box, styled } from '@mui/material';

export const BodyRoot = styled('div')(({ theme }) => ({
  '& > div': {
    marginBottom: '6rem',
  },
}));

export const SectionRoot = styled(Box)(({ theme }) => ({
  paddingInline: '2.5rem',
  paddingBlock: '1rem',
  backgroundColor: 'transparent',
  maxWidth: 1200,
  marginInline: 'auto',
}));

export const BackIllustration = styled(Box)(({ theme }) => ({
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
