import { alpha, Box, Grid, styled } from '@mui/material';
import Slider from 'react-slick';

export const ArrowStyled = styled('div')(({ theme }) => ({
  '&.slick-arrow': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    borderRadius: '50%',
    zIndex: 22,
    width: 55,
    height: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  },

  '&.slick-prev:before, &.slick-next:before': {
    display: 'none',
  },

  '&.slick-prev': {
    left: '50%',
    top: '110%',
    transform: 'translateX(-60px)',
  },
  '&.slick-next': {
    right: '50%',
    top: '110%',
    transform: 'translateX(60px)',
  },

  '&.slick-prev:hover, &.slick-next:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.85),
    color: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const Illustration = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 15,
  right: 0,
  maxWidth: 130,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const ImgBox = styled(Box)(({ theme }) => ({
  paddingInline: '3rem',
  height: '100%',
  width: '100%',
  position: 'relative',
  '& img': {
    width: '100%',
    maxHeight: 400,
    objectFit: 'contain',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      maxHeight: 360,
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: 300,
    },
  },
}));

export const Eclipse = styled(Box)(() => ({
  backgroundImage: `url("/static/images/eclippse.svg")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: ' contain',
  position: 'absolute',
  width: '100%',
  top: 0,
  right: 0,
  height: '100%',
}));

export const GridExt = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('600')]: {
    '& .MuiGrid-item': {
      flexBasis: '100%',
    },
  },
}));

export const TestimonialCardRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  backgroundColor: theme.palette.background.neutral,
  borderRadius: 10,
  padding: '1.5rem',

  [theme.breakpoints.down('700')]: {
    textAlign: 'center',
    '& .cardIntro': {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
    },
  },
}));

export const SliderRoot = styled(Slider)(() => ({
  '& .slick-track > .card:not(:last-of-type)': {
    marginRight: '2rem',
  },
}));
