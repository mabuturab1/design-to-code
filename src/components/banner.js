import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { SectionRoot, SmallBackEllipse } from './CustomComps';

const BackLines = styled('div')(({ theme }) => ({
  backgroundImage: `url("/static/images/backLines-cropped.svg")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative',
}));

const BannerContainer = styled('section')(({ theme }) => ({
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

const BannerImage = styled('div')(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Banner = () => {
  return (
    <BackLines>
      <SmallBackEllipse sx={{ left: 0 }} />
      <SectionRoot>
        <BannerContainer className='sectionGap'>
          <Box
            display='flex'
            flexDirection='column'
            flexWrap='nowrap'
            gap='2rem'
            sx={{ textAlign: { xs: 'center', sm: 'center', md: 'start' } }}
          >
            <Typography variant='h2'>
              Get your Website Build Effortlessly
            </Typography>
            <Typography variant='body1' component='span' color='text.secondary'>
              Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
              potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera
              i dibäs och anat. Vivyng dissa ett astrokad plaledes majyliga.
              Morade eurosak, infrar.
            </Typography>
            <Box>
              <Button variant='contained' color='primary' size='large'>
                Get A Quote
              </Button>
            </Box>
          </Box>
          <BannerImage>
            <picture>
              <source
                srcSet='/static/images/bannerImage-1.svg'
                type='image/webp'
              />
              <img
                src='/static/images/bannerImage-1.svg'
                height='100%'
                width='100%'
                alt='Landscape picture'
              />
            </picture>
          </BannerImage>
          <div className='imageBackDrop' />
        </BannerContainer>
      </SectionRoot>
    </BackLines>
  );
};

export default Banner;
