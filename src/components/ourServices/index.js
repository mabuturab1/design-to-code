import { Box, styled, Typography } from '@mui/material';
import React from 'react';

import { BackColoredCont, SectionRoot } from '../custom';
import ServiceCard from './serviceCard';

import { ServCardCont } from './styled';
import { ServiceList } from './services.data';
import { ANIMATION_DURATION, getHVAnimationConfigs } from 'data';

const Services = () => {
  return (
    <BackColoredCont className='sectionGap' id='services'>
      <SectionRoot className='dispFlexColAlgnCen' sx={{ position: 'relative' }}>
        <Typography variant='h2' gutterBottom>
        What We Offer
        </Typography>
        <Typography variant='body1' color='textSecondary' align='center' className='sectionMaxWid' sx={{ width: '100%' }}>
          Our expertise in App Development includes
        </Typography>
        <ServCardCont {...getHVAnimationConfigs({ y: 50, x: 0, opacity: 0 }, { y: 0, x: 0, opacity: 1 }, { delay: ANIMATION_DURATION.small })}>
          {ServiceList.map((el) => (
            <ServiceCard key={el.title} {...el} />
          ))}
        </ServCardCont>
      </SectionRoot>
    </BackColoredCont>
  );
};

export default Services;
