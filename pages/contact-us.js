import React from 'react';
import { Box, Container, Link } from '@mui/material';

import Feedbackform from 'components/feedback';
import { Logo } from 'components/Logo';
import Footer from 'components/footer';

const ContactUs = () => {
  return <Feedbackform />;
};

ContactUs.getLayout = function getLayout(page) {
  return (
    <>
      <Container sx={{ maxWidth: '720px !important' }}>
        <Box className='sectionGap' my={8}>
          <Box display='flex' alignItems='center' gap='1rem' justifyContent='space-between' mb={8}>
            <Logo sx={{ maxWidth: 175 }} />
            <Link href='/' variant='subtitle2' underline='none' color='primary.dark'>
              Back To Home
            </Link>
          </Box>
          {page}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;
