import { Box, styled } from '@mui/material';

export const FooterContainerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  paddingBlock: '4rem',
  flexWrap: 'wrap',
}));

export const InnerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));
