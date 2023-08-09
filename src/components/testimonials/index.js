import { Box, Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

import TestimonialCard from './testimonialCard';
import { SectionRoot } from '../custom';

import { sliderSettings } from './carouselSettings';
import { ArrowStyled, SliderRoot } from './styled';

import { ANIMATION_DURATION, getHVAnimationConfigs, testimonialList } from '../../data';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <ArrowStyled className={className} onClick={onClick}>
      <ArrowBackIosIcon sx={{ color: '#fff', fontSize: '1.6rem' }} />
    </ArrowStyled>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <ArrowStyled className={className} onClick={onClick}>
      <ArrowForwardIosIcon sx={{ color: '#fff', fontSize: '1.6rem' }} />
    </ArrowStyled>
  );
};

const Testimonials = () => {
  return (
    <Box sx={{ marginBottom: '8em !important' }}>
      <SectionRoot
        sx={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          position: 'relative',
        }}>
        <Box className='dispFlexColAlgnCen'>
          <Typography variant='h2' gutterBottom align='center'>
            What Customer Say About Us
          </Typography>
          <Typography variant='body1' color='textSecondary' className='sectionMaxWid' align='center'>
            Client Testimonials on Work Ethics and Quality.
          </Typography>
        </Box>
      </SectionRoot>
      <Box width='100%' mt={5}>
        <SliderRoot {...sliderSettings} prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          {testimonialList.map((el, i) => (
            <Box key={`${el.username}-${i + 1}`} sx={{ padding: '10px' }}>
              <motion.div {...getHVAnimationConfigs({ opacity: 0, y: 30, x: 0 }, { opacity: 1, y: 0, x: 0 }, { delay: ANIMATION_DURATION.small })}>
                <TestimonialCard {...el} />
              </motion.div>
            </Box>
          ))}
        </SliderRoot>
      </Box>
    </Box>
  );
};

export default Testimonials;
