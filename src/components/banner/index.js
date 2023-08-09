import { Avatar, Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { BackIllustration, SectionRoot, SmallBackEllipse } from '../custom';
import { BackLines, BannerContainer, BannerImage, HeaderTextContent } from './styled';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ANIMATION_DURATION, getHVAnimationConfigs } from 'data';
import { CONTACTUS_LINK } from 'utils/links';

const Banner = () => {
  return (
    <BackLines {...getHVAnimationConfigs({ opacity: 0 }, { opacity: 1 })} className='sectionGap'>
      <SectionRoot sx={{ position: 'relative' }} mt={3}>
        <BackIllustration sx={{ bottom: 0, right: 0 }}>
          <Avatar variant='square' src='/static/images/banner_bg.svg' alt='Blue Dots' sx={{ width: '100%', height: '100%' }} />
        </BackIllustration>
        <BannerContainer>
          <HeaderTextContent {...getHVAnimationConfigs({ opacity: 0, y: -60, x: 0 }, { opacity: 1, y: 0, x: 0 }, { delay: ANIMATION_DURATION.small })}>
            {/* <Typography variant='h2'>Creating <Typography variant='span' color="primary">VALUE</Typography> With Technology</Typography> */}
            <Typography variant='h2'>Let&apos;s Unlock Full Potential of your Idea</Typography>
            <Typography variant='body1' component='span' color='text.secondary' sx={{ lineHeight: 2 }}>
            With our strong expertise in <strong>Web & Mobile App Development</strong>, you will get a powerful & user-friendly product that delivers superior customer experience. 
            </Typography>
            <motion.div {...getHVAnimationConfigs({ opacity: 0, y: -40 }, { opacity: 1, y: 0 }, { delay: ANIMATION_DURATION.small })}>
              <Button variant='contained' color='primary' size='large'  href={CONTACTUS_LINK}>
                Book free consultation
              </Button>
            </motion.div>
          </HeaderTextContent>
          <BannerImage {...getHVAnimationConfigs({ opacity: 0 }, { opacity: 1 }, { ease: 'easeInOut' })}>
            <Image
              src='/static/images/rocket-person.svg'
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
