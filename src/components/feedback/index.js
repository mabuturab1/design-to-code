import { Box, Typography } from '@mui/material';
import React from 'react';
import { BackIllustration, SectionRoot } from '../custom';
import { Feedbackform } from './feedbackform';
import { TypographyExt } from './styled';

const Feedback = () => {
  return (
    <SectionRoot className='sectionGap' id='contact-us'>
      <Box position='relative'>
        <TypographyExt variant='h2' gutterBottom>
          Love to hear from you. <br />
          Get in Touch
        </TypographyExt>
        {/* <BackIllustration sx={{ top: 0, right: '2.5rem' }}>
          <picture>
            <img
              src='/static/images/dots.svg'
              height='100%'
              width='100%'
              alt='Landscape picture'
            />
          </picture>
        </BackIllustration> */}
      </Box>
      <TypographyExt variant='body1' color='textSecondary'>
        Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm,
        emedan semis. Härat rär par.
      </TypographyExt>

      <Feedbackform />
    </SectionRoot>
  );
};

export default Feedback;
