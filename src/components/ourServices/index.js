import { Box, styled, Typography } from '@mui/material';
import React from 'react';

import { BackIllustration, SectionRoot, SmallBackEllipse } from '../custom';
import ServiceCard from './serviceCard';

import { ServCardCont } from './styled';

import { CardInfo } from '../../data';

const Services = () => {
  return (
    <SectionRoot sx={{ position: 'relative' }}>
      <SmallBackEllipse sx={{ right: 0, top: 80 }} />
      <BackIllustration sx={{ left: 60, top: 80 }}>
        <picture>
          <img
            src='/static/images/bgDots.svg'
            height='100%'
            width='100%'
            alt='Landscape picture'
          />
        </picture>
      </BackIllustration>
      <Box my={4} className='dispFlexColAlgnCen'>
        <Typography variant='h2' gutterBottom>
          Services
        </Typography>
        <Typography
          variant='body1'
          color='textSecondary'
          align='center'
          className='sectionMaxWid'
          sx={{ width: '100%' }}
        >
          Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm,
          emedan semis. Härat rär par.
        </Typography>
        <ServCardCont mt={15}>
          {CardInfo.map((el) => (
            <ServiceCard key={el.title} {...el} />
          ))}
        </ServCardCont>
      </Box>
    </SectionRoot>
  );
};

export default Services;
