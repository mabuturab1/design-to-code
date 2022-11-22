import { Box, styled } from '@mui/material';

export const BackLines = styled('div')(({ theme }) => ({
  backgroundImage: `url("/static/images/backLines-cropped.svg")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative',
}));

export const BannerContainer = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  flexWrap: 'nowrap',
  minHeight: 400,
  position: 'relative',
  '& > div': {
    flex: 1,
  },
  '& .imageBackDrop': {
    position: 'absolute',
    height: '100%',
    width: '50%',
    borderRadius: '50%',
    right: 0,
    top: 0,
    background: theme.palette.primary.main,
    opacity: 0.25,
    filter: 'blur(40px)',
    [theme.breakpoints.down('md')]: {
      left: 0,
      width: '100%',
    },
  },
}));

export const BannerImage = styled('div')(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const HeaderTextContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  gap: '2rem',
}));
