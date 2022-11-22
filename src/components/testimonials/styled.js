import { Box, Grid, styled } from '@mui/material';

export const ArrowStyled = styled('div')(({ theme }) => ({
  '&.slick-arrow': {
    boxShadow: '0px 14px 14px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    borderRadius: '50%',
    zIndex: 22,
    width: 55,
    height: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '&.slick-prev:before, &.slick-next:before': {
    display: 'none',
  },
  '&.slick-prev': {
    left: 10,
  },
  '&.slick-next': {
    right: 10,
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
  '& > img': {
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

export const BgBox = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  position: 'absolute',
  width: '90%',
  height: '90%',
  left: '5%',
  right: '5%',
  top: '5%',
  [theme.breakpoints.down('md')]: {
    width: '50%',
    height: '85%',
    top: '10%',
    marginInline: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    width: '70%',
    height: '75%',
    marginInline: 'auto',
  },
  [theme.breakpoints.down('xs')]: {
    width: 150,
    height: 150,
  },
}));

export const GridExt = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('600')]: {
    '& .MuiGrid-item': {
      flexBasis: '100%',
    },
  },
}));
