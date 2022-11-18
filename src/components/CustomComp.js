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
  position: 'relative',
  maxWidth: 1200,
  marginInline: 'auto',
}));

export const BackIllustration = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: '2.5rem',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
