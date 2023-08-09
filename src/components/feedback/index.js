import { Box, Typography } from '@mui/material';
import React from 'react';
import { Feedbackform } from './feedbackform';
import { TypographyExt } from './styled';

const Feedback = () => {
  return (
    <React.Fragment>
      <Box position='relative' maxWidth='1200px'>
        <TypographyExt variant='h2' gutterBottom>
          Love to hear from you. <br />
          Get in Touch
        </TypographyExt>
      </Box>
      <TypographyExt variant='body1' color='textSecondary'>
        Please complete the form with your inquiry or message
      </TypographyExt>
      <Feedbackform />
    </React.Fragment>
  );
};

export default Feedback;
