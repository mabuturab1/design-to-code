import { Avatar, Box, styled, Typography } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';

import Logo from './logo';

import { SectionRoot } from './CustomComp';

import dribbbleIcon from '@iconify/icons-bxl/dribbble';
import facebookIcon from '@iconify/icons-bxl/facebook';
import twitterIcon from '@iconify/icons-bxl/twitter';
import youtubeIcon from '@iconify/icons-bxl/youtube';

export const getIcon = (name) => (
  <Icon icon={name} width={22} height={22} color='#fff' />
);

const FooterContainerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  paddingBlock: '4rem',
  flexWrap: 'wrap',
}));

const InnerContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

const Footer = () => {
  return (
    <SectionRoot>
      <Box pb={7}>
        <FooterContainerStyle>
          <InnerContainer sx={{ gap: '1.5rem' }}>
            <Logo />
            <Typography
              variant='body1'
              color='textSecondary'
              sx={{ width: '20rem' }}
            >
              Lörem ipsum aras beskade nede plakar. Sad monorade. Söven fade
              negon. Samösat neras pykäs. Preligt anas egoliga. Astrovis låvis
              revis an.
            </Typography>
            <Box display='flex' gap='1rem'>
              <Avatar sx={{ backgroundColor: 'primary.main' }}>
                {getIcon(facebookIcon)}
              </Avatar>
              <Avatar sx={{ backgroundColor: 'primary.main' }}>
                {getIcon(twitterIcon)}
              </Avatar>
              <Avatar sx={{ backgroundColor: 'primary.main' }}>
                {getIcon(youtubeIcon)}
              </Avatar>
              <Avatar sx={{ backgroundColor: 'primary.main' }}>
                {getIcon(dribbbleIcon)}
              </Avatar>
            </Box>
          </InnerContainer>
          <InnerContainer sx={{ gap: '0.5rem' }}>
            <Typography variant='subtitle1' mb={1}>
              Quick Links
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              About
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              Pricing
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              Blog
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              Contact Us
            </Typography>
          </InnerContainer>
          <InnerContainer sx={{ gap: '0.5rem', alignItems: 'flex-start' }}>
            <Typography variant='subtitle1' mb={1}>
              Others
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              Why ConovoTech?
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              How it works
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              FAQ
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              Affiliates
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              How to get More Sales
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              Customer Support
            </Typography>
          </InnerContainer>
          <InnerContainer sx={{ gap: '0.5rem' }}>
            <Typography mb={1} />
            <Typography variant='body1' color='textSecondary'>
              Privacy Policy
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              Terms and Conditions
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              Cookie Policy
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              Language
            </Typography>
          </InnerContainer>
        </FooterContainerStyle>
        <Typography variant='body2'>@ ConovoTach 2022</Typography>
      </Box>
    </SectionRoot>
  );
};

export default Footer;
