import {
  Box,
  StepConnector,
  StepContent,
  StepLabel,
  Stepper,
  styled,
  Typography,
} from '@mui/material';
import { TimelineConnector, TimelineDot } from '@mui/lab';
import { stepConnectorClasses } from '@mui/material/StepConnector';

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
    color: theme.palette.primary.main,
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
    gap: '3rem',
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

// ^  Stepper Styles

export const QontoStepIconRoot = styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  height: 22,
  alignItems: 'center',

  '& .QontoStepIcon-circle': {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

export const StepperConnectorVerExt = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 17,
  width: 3,
  height: 'calc(100% - 20px)',
  backgroundColor: theme.palette.primary.main,
  top: 10,
  zIndex: 2,
}));

export const StepperConnectorHorExt = styled(Box)(({ theme }) => ({
  flex: '1 1 auto',
  position: 'absolute',
  top: 9,

  '& span': {
    display: 'block',
    borderTopStyle: 'solid',
    borderColor: theme.palette.primary.main,
    borderTopWidth: 3,
    // borderRadius: 1,
  },
}));

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 9,
    left: 'calc(-50% + 8px)',
    right: 'calc(50% + 8px)',
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.primary.main,
    borderTopWidth: 3,
    // boxShadow: `0px 0px 49px 10px ${theme.palette.primary.main}3b`,
  },
}));

export const StepperExt = styled(Stepper)(() => ({
  '& .MuiStepLabel-alternativeLabel': {
    textAlign: 'left',
  },
}));

export const StepLabelExt = styled(StepLabel)(({ theme }) => ({
  '& svg': {
    zIndex: 22,
    color: theme.palette.primary.main,
    width: '1.5em',
    height: '1.5em',
  },
  '& .MuiStepIcon-text': {
    fill: '#fff',
  },
}));

export const StepperContentExt = styled(StepContent)(({ theme }) => ({
  borderLeft: `3px solid ${theme.palette.primary.main}`,
}));
