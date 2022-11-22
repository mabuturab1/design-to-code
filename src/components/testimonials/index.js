import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

import Testimoniolcarousel from './testimoniolcarousel';

import { SectionRoot, SmallBackEllipse } from '../custom';

import { testimonialList } from '../../data';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowStyled } from './styled';

const sliderSettings = {
  fade: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <ArrowStyled className={className} onClick={onClick}>
      <ArrowBackIosIcon sx={{ color: '#000', fontSize: '1.6rem' }} />
    </ArrowStyled>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <ArrowStyled className={className} onClick={onClick}>
      <ArrowForwardIosIcon sx={{ color: '#000', fontSize: '1.6rem' }} />
    </ArrowStyled>
  );
};

const Testimonials = () => {
  return (
    <SectionRoot
      className='sectionGap'
      sx={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        position: 'relative',
      }}
    >
      <SmallBackEllipse sx={{ left: 20, opacity: 0.3 }} />
      <Box className='dispFlexColAlgnCen'>
        <Typography variant='h2' gutterBottom align='center'>
          What Customer Say About Us
        </Typography>
        <Typography
          variant='body1'
          color='textSecondary'
          className='sectionMaxWid'
          align='center'
        >
          Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm,
          emedan semis. Härat rär par.
        </Typography>
      </Box>
      <Slider
        {...sliderSettings}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
      >
        {testimonialList.map((el, i) => (
          <Testimoniolcarousel key={`${el.username}-${i + 1}`} {...el} />
        ))}
      </Slider>
    </SectionRoot>
  );
};

export default Testimonials;
