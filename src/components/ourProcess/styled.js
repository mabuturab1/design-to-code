import { Box, styled, Typography } from '@mui/material';
import { TimelineConnector, TimelineDot } from '@mui/lab';

export const TypoExt = styled(Typography)(({ theme }) => ({
  fontSize: '14rem',
  color: theme.palette.background.default,
  paddingInline: '2.5rem',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {},
}));

export const InnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  height: '100%',
  paddingInline: '2.5rem',
}));

export const TimelineDotExt = styled(TimelineDot)(({ theme }) => ({
  boxShadow: `0px 0px 49px 10px ${theme.palette.primary.main}3b`,
  backgroundColor: 'transparent',
}));

export const TimelineConnectorExt = styled(TimelineConnector)(({ theme }) => ({
  boxShadow: `0px 0px 49px 10px ${theme.palette.primary.main}3b`,
  backgroundColor: 'transparent',
}));
