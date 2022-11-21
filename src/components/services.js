import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { CardInfo } from '../data';
import { BackIllustration, SectionRoot, SmallBackEllipse } from './CustomComps';
import ServicesCard from './servicesCard';

const ServCardCont = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '3.5rem',
  flexWrap: 'wrap',

  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },

  '& > div:nth-child(2)': {
    [theme.breakpoints.up('md')]: {
      marginTop: '-7.5rem',
    },
  },

  // display: 'grid',
  // gridGap: '1rem',
  // gridTemplateColumns: 'repeat(3, 1fr)',

  // [theme.breakpoints.down('md')]: {
  //   gridTemplateColumns: 'repeat(2, 1fr)',
  // },
  // [theme.breakpoints.down('449')]: {
  //   gridTemplateColumns: 'repeat(1, 1fr)',
  // },
}));

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
            <ServicesCard key={el.title} {...el} />
          ))}
        </ServCardCont>
      </Box>
    </SectionRoot>
  );
};

export default Services;
