import React from 'react';
import { BodyRoot, SectionRoot } from '../src/components/custom';
import { Footer } from '../src/components/footer';
import NavBar from '../src/components/navBar';
import Feedbackform from '../src/components/feedback';
import { Box, Container, Typography, Link } from '@mui/material';
import { Logo } from '../src/components/Logo';

const ContactUs = () => {
  return (
    <React.Fragment>
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
          <Feedbackform />
        </SectionRoot>
      </Container>
    </React.Fragment>
  );
};

export default ContactUs;
