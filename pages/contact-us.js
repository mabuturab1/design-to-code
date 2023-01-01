import React from 'react';
import { SectionRoot } from '../src/components/custom';
import Feedbackform from '../src/components/feedback';
import { Box, Container, Link } from '@mui/material';
import { Logo } from '../src/components/Logo';

const ContactUs = () => {
  return <Feedbackform />;
};

ContactUs.getLayout = function getLayout(page) {
  return (
    <Container maxWidth='md'>
      <SectionRoot className='sectionGap' id='contact-us' my={4}>
        <Box
          display='flex'
          alignItems='center'
          gap='1rem'
          justifyContent='space-between'
          mb={8}
        >
          <Logo sx={{ maxWidth: 175 }} />
          <Link
            href='/'
            variant='subtitle2'
            underline='none'
            color='primary.dark'
          >
            Back To Home
          </Link>
        </Box>
        {page}
      </SectionRoot>
    </Container>
  );
};

export default ContactUs;
