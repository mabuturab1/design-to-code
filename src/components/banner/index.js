import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { BackIllustration, SectionRoot, SmallBackEllipse } from '../custom';
import {
  BackLines,
  BannerContainer,
  BannerImage,
  HeaderTextContent,
} from './styled';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <BackLines
      className='sectionGap'
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1.25, ease: 'easeOut' }}
    >
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
          <HeaderTextContent
            whileInView={{ y: [-200, 0], x: [0, 0], opacity: [0, 1] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <Typography variant='h2'>
              Get your Website Build Effortlessly
            </Typography>
            <Typography
              variant='body1'
              component='span'
              color='text.secondary'
              sx={{ lineHeight: 2 }}
            >
              Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
              potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera
              i dibäs och anat. Vivyng dissa ett astrokad plaledes majyliga.
              Morade eurosak, infrar.
            </Typography>
            <motion.div
              whileInView={{ y: [-100, 0], x: [0, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.75,
                ease: 'easeOut',
                delay: 0.5,
              }}
            >
              <Button variant='contained' color='primary' size='large'>
                Book free consultation
              </Button>
            </motion.div>
          </HeaderTextContent>
          <BannerImage
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
          >
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
