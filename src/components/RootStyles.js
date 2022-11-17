import { Box, styled } from '@mui/material';

export const BodyRoot = styled('div')(({ theme }) => ({
  '& > div': {
    marginBottom: '4.5rem',
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
