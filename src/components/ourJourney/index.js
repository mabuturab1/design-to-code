import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import WorkCard from './workCard';
import { BackIllustration, SectionRoot } from '../custom';

import { RecWorkContainer, CardContainer, RootStyle, RowCardContainer, RowCardContainerPortfolioImage } from './styled';

import { ANIMATION_DURATION, getHVAnimationConfigs, Work } from '../../data';
import NewWorkCard from './NewWorkCard';
import ImageWorkCard from './ImageWorkCard';

const OurJourney = () => {
  return (
    <RootStyle id='portfolio' className='sectionGap'>
      <RecWorkContainer pt={5}>
        <SectionRoot
          className='dispFlexColAlgnCen'
          sx={{
            width: '100vw',
            gap: '4rem',
            maxWidth: '900px',
          }}>
          <Box className='dispFlexColAlgnCen'>
            <Typography variant='h2' gutterBottom>
              Our Impressive Portfolio
            </Typography>
            <Typography variant='body1' color='textSecondary' className={clsx('sectionMaxWid', 'fullWidth')} align='center' sx={{ width: '100%' }}>
              We are dedicated to creating exceptional user experiences.
            </Typography>
          </Box>
          <RowCardContainer {...getHVAnimationConfigs({ y: 60, x: 0, opacity: 0 }, { y: 0, x: 0, opacity: 1 }, { delay: ANIMATION_DURATION.small })}>
            {Work.slice(0, 3).map((el, i) => (
              <NewWorkCard key={`${i}-${el.title}`} {...el} />
            ))}
          </RowCardContainer>
        </SectionRoot>
      </RecWorkContainer>
    </RootStyle>
  );
};

export default OurJourney;
