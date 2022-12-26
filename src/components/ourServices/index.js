import { Box, styled, Typography } from '@mui/material';
import React from 'react';

import { BackIllustration, SectionRoot, SmallBackEllipse } from '../custom';
import ServiceCard from './serviceCard';

import { ServCardCont } from './styled';

import { CardInfo } from '../../data';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  paddingBlock: '1.5rem',
  background: `linear-gradient(#F0F5FD,#F2F0FD00)`,
}));

const Services = () => {
  return (
    <Container className='sectionGap'>
      <SectionRoot className='dispFlexColAlgnCen' sx={{ position: 'relative' }}>
        {/* <SmallBackEllipse sx={{ right: 0, top: 80 }} /> */}
        {/* <BackIllustration sx={{ left: 60, top: 80 }}>
          <picture>
            <img
              src='/static/images/bgDots.svg'
              height='100%'
              width='100%'
              alt='Landscape picture'
            />
          </picture>
        </BackIllustration> */}

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
            y: [150, 0],
            x: [0, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 1.25,
            ease: 'easeInOut',
          }}
        >
          {CardInfo.map((el) => (
            <ServiceCard key={el.title} {...el} />
          ))}
        </ServCardCont>
      </SectionRoot>
    </Container>
  );
};

export default Services;
