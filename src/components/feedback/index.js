import { Box, Typography } from '@mui/material';
import React from 'react';
import { BackIllustration, SectionRoot } from '../custom';
import { Feedbackform } from './feedbackform';

const Feedback = () => {
  return (
    <SectionRoot>
      <Box position='relative'>
        <Typography
          variant='h2'
          gutterBottom
          sx={{ textAlign: { sm: 'center', md: 'left' } }}
        >
          Love to hear from you. <br />
          Get in Touch
        </Typography>
        <BackIllustration sx={{ top: 0, right: '2.5rem' }}>
          <picture>
            <img
              src='/static/images/dots.svg'
              height='100%'
              width='100%'
              alt='Landscape picture'
            />
          </picture>
        </BackIllustration>
      </Box>
      <Typography
        variant='body1'
        color='textSecondary'
        sx={{ textAlign: { sm: 'center', md: 'left' } }}
      >
        Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm,
        emedan semis. Härat rär par.
      </Typography>

      <Feedbackform />
    </SectionRoot>
  );
};

export default Feedback;
