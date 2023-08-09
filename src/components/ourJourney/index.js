import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import WorkCard from './workCard';
import { BackIllustration, SectionRoot } from '../custom';

import { RecWorkContainer, CardContainer, RootStyle } from './styled';

import { ANIMATION_DURATION, getHVAnimationConfigs, Work } from '../../data';

const OurJourney = () => {
  return (
    <RootStyle id='portfolio' className='sectionGap'>
      <RecWorkContainer pt={5}>
        <SectionRoot
          className='dispFlexColAlgnCen'
          sx={{
            width: '100vw',
            gap: '4rem',
          }}>
          <Box className='dispFlexColAlgnCen'>
            <Typography variant='h2' gutterBottom>
              Our Journey
            </Typography>
            <Typography variant='body1' color='textSecondary' className={clsx('sectionMaxWid', 'fullWidth')} align='center' sx={{ width: '100%' }}>
              Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm, emedan semis. Härat rär par.
            </Typography>
          </Box>
          <CardContainer {...getHVAnimationConfigs({ y: 60, x: 0, opacity: 0 }, { y: 0, x: 0, opacity: 1 }, { delay: ANIMATION_DURATION.small })}>
            {Work.slice(0, 3).map((el, i) => (
              <WorkCard key={`${i}-${el.title}`} {...el} />
            ))}
          </CardContainer>
          <motion.div {...getHVAnimationConfigs({ y: -20, x: 0, opacity: 0 }, { y: 0, x: 0, opacity: 1 }, { delay: ANIMATION_DURATION.medium })}>
            <Button variant='contained' color='primary'>
              See More Work
            </Button>
          </motion.div>
        </SectionRoot>
      </RecWorkContainer>
    </RootStyle>
  );
};

export default OurJourney;
