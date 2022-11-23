import { Box, styled, Typography } from '@mui/material';
import { TimelineConnector, TimelineDot } from '@mui/lab';

export const TypoExt = styled(Typography)(({ theme }) => ({
  fontSize: '14rem',
  color: theme.palette.background.default,
  textAlign: 'center',
  position: 'relative',

  [theme.breakpoints.up('sm')]: {
    minWidth: 215,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '11rem',
    lineHeight: 1,
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '6rem',
  },
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

export const MobileContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3rem',
  gap: '1.5rem',

  [theme.breakpoints.down('xs')]: {
    gap: '2rem',
    '& p': {
      textAlign: 'justify',
    },
  },

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: '1.5rem',

    [theme.breakpoints.up('sm')]: {
      '& p': {
        paddingInline: '2rem',
      },
    },
    '&:nth-of-type(odd)': {
      '& span': {
        alignSelf: 'start',
      },
    },
    '&:nth-of-type(even)': {
      [theme.breakpoints.up('540')]: {
        flexDirection: 'row-reverse',
        textAlign: 'right',
      },
      [theme.breakpoints.down('xs')]: {
        '& span': {
          alignSelf: 'end',
        },
      },
    },

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      gap: '0.75rem',
    },
  },
}));

export const BulletBorder = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  zIndex: 100,
  width: 5,
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const BulletCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '45%',
  bottom: 0,
  zIndex: 102,
  backgroundColor: theme.palette.primary.main,

  borderRadius: '50%',
  width: 25,
  height: 25,

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
