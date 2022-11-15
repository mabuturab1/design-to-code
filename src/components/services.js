import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from './sectionTitle';
import ServicesCard from './servicesCard';

const CardInfo = [
  {
    title: 'Web Design & Development Services',
    desc: 'Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera i dibäs och anat. Vivyng dissa ',
    img: '/static/images/web-dev.svg',
    link: '#',
  },
  {
    title: 'Magento Development Services',
    desc: 'Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera i dibäs och anat. Vivyng dissa ',
    img: '/static/images/mgt-serv.svg',
    link: '#',
  },
  {
    title: 'Search Engine Optimization',
    desc: 'Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera i dibäs och anat. Vivyng dissa ',
    img: '/static/images/research.svg',
    link: '#',
  },
];

const ServicesRoot = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // gap: '1rem ',
  flexDirection: 'column',
}));

const ServCardCont = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',

  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
  },

  '& > div:nth-child(2)': {
    [theme.breakpoints.up('md')]: {
      marginTop: '-7.5rem',
    },
  },
}));

const Services = () => {
  return (
    <ServicesRoot my={4} className='sectionGap'>
      <SectionTitle
        title='Services'
        subtitle='Lörem ipsum georening buköska vaben. Dögyns eurong. 
Povisovis josm, emedan semis. Härat rär par. 
'
      />
      <ServCardCont mt={15}>
        {CardInfo.map((el) => (
          <ServicesCard key={el.title} {...el} />
        ))}
      </ServCardCont>
    </ServicesRoot>
  );
};

export default Services;
