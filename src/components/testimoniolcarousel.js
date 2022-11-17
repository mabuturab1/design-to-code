import { Box, Grid, Link, Rating, styled, Typography } from '@mui/material';
import React from 'react';

const Illustration = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  maxWidth: 130,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ImgBox = styled(Box)(({ theme }) => ({
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

const BgBox = styled(Box)(({ theme }) => ({
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

const GridExt = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('600')]: {
    '& .MuiGrid-item': {
      flexBasis: '100%',
    },
  },
}));

const Testimoniolcarousel = (props) => {
  const { userImg, username, rating, message } = props;
  return (
    <Box position='relative' width='100%'>
      <Illustration>
        <picture>
          <img
            src='/static/images/arrow.svg'
            height='90%'
            width='90%'
            alt='Landscape picture'
          />
        </picture>
      </Illustration>
      <GridExt container spacing={2}>
        <Grid item xs={12} sm={12} md={5} sx={{ position: 'relative' }}>
          <Box width='100%' height='100%' position='relative'>
            <BgBox />
            <ImgBox>
              <img src={userImg} height='100%' width='100%' alt={username} />
            </ImgBox>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <Box
            display='flex'
            gap='1.5rem'
            justifyContent='center'
            flexDirection='column'
            zIndex={22}
            height='100%'
            px={5}
          >
            <Rating value={rating} />
            <Typography variant='body1' color='text.secondary'>
              {message}
            </Typography>
            <Typography variant='h4'>{username}</Typography>
            <Link href='#'>GetSocks.com</Link>
          </Box>
        </Grid>
      </GridExt>
    </Box>
  );
};

export default Testimoniolcarousel;
