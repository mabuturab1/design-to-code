import { Box, Grid, Link, Rating, styled, Typography } from '@mui/material';
import React from 'react';
import { BackIllustration } from '../custom';
import { BgBox, Eclipse, GridExt, Illustration, ImgBox } from './styled';

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
        <Grid item xs={12} sm={12} md={5}>
          <Box
            width='100%'
            height='100%'
            position='relative'
            sx={{ objectFit: 'contain' }}
          >
            <BackIllustration sx={{ right: -10 }}>
              <picture>
                <img
                  height='100%'
                  width='100%'
                  src='/static/images/backDots.svg'
                  alt='Landscape picture'
                />
              </picture>
            </BackIllustration>
            {/* <BgBox /> */}
            <Eclipse />
            <ImgBox>
              <picture>
                <img src={userImg} height='100%' width='100%' alt={username} />
              </picture>
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
