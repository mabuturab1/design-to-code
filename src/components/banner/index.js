import { Avatar, Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { BackIllustration, SectionRoot, SmallBackEllipse } from '../custom';
import {
  BackLines,
  BannerContainer,
  BannerImage,
  HeaderTextContent,
} from './styled';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Banner = () => {
  return (
    <BackLines
      className='sectionGap'
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1.25, ease: 'easeOut' }}
    >
      <SectionRoot sx={{ position: 'relative' }}>
        <BackIllustration sx={{ bottom: 0, right: 0 }}>
          <Avatar
            variant='square'
            src='/static/images/banner_bg.svg'
            alt='Blue Dots'
            sx={{ width: '100%', height: '100%' }}
          />
        </BackIllustration>
        <BannerContainer>
          <HeaderTextContent
            whileInView={{ y: [-60, 0], x: [0, 0], opacity: [0, 1] }}
            transition={{ duration: 1.25, ease: 'easeOut' }}
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
              whileInView={{ y: [-40, 0], x: [0, 0], opacity: [0, 1] }}
              transition={{
                duration: 1.25,
                ease: 'easeOut',
                delay: 1,
              }}
            >
              <Button variant='contained' color='primary' size='large'>
                Book free consultation
              </Button>
            </motion.div>
          </HeaderTextContent>
          <BannerImage
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1.25, ease: 'easeInOut' }}
          >
            <Image
              src='/static/images/bannerImage-1.svg'
              alt='Banner Img'
              // layout='responsive'
              width={560}
              height={400}
              className='image'
              priority
            />
          </BannerImage>
        </BannerContainer>
      </SectionRoot>
    </BackLines>
  );
};

export default Banner;
