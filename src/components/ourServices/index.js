import { Box, styled, Typography } from '@mui/material';
import React from 'react';

import { BackColoredCont, SectionRoot } from '../custom';
import ServiceCard from './serviceCard';

import { ServCardCont } from './styled';
import { ServiceList } from './services.data';

const Services = () => {
  return (
    <BackColoredCont className='sectionGap' id='services'>
      <SectionRoot className='dispFlexColAlgnCen' sx={{ position: 'relative' }}>
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
        <ServCardCont
          whileInView={{
            y: [50, 0],
            x: [0, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 1.25,
            ease: 'easeInOut',
            delay: 0.25,
          }}
        >
          {ServiceList.map((el) => (
            <ServiceCard key={el.title} {...el} />
          ))}
        </ServCardCont>
      </SectionRoot>
    </BackColoredCont>
  );
};

export default Services;
