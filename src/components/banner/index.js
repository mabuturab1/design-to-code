import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { BackIllustration, SectionRoot, SmallBackEllipse } from '../custom';
import {
  BackLines,
  BannerContainer,
  BannerImage,
  HeaderTextContent,
} from './styled';

const Banner = () => {
  return (
    <BackLines className='sectionGap'>
      {/* <SmallBackEllipse sx={{ left: 0 }} /> */}
      <SectionRoot sx={{ position: 'relative' }}>
        <BackIllustration sx={{ bottom: 0, right: 0 }}>
          <picture>
            <img
              src='/static/images/banner_bg.svg'
              height='100%'
              width='100%'
              alt='Landscape picture'
            />
          </picture>
        </BackIllustration>
        <BannerContainer>
          <HeaderTextContent>
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
          </HeaderTextContent>
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
          {/* <div className='imageBackDrop' /> */}
        </BannerContainer>
      </SectionRoot>
    </BackLines>
  );
};

export default Banner;
