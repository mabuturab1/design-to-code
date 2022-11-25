import { Avatar, Box, styled, Typography } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';

import { Logo } from '../Logo';

import { SectionRoot } from '../custom';
import dribbbleIcon from '@iconify/icons-bxl/dribbble';
import facebookIcon from '@iconify/icons-bxl/facebook';
import twitterIcon from '@iconify/icons-bxl/twitter';
import youtubeIcon from '@iconify/icons-bxl/youtube';
import {
  CompInfoCont,
  FooterContainerStyle,
  LinkContent,
  TypoEnd,
} from './styled';

const getIcon = (name) => (
  <Icon icon={name} width={22} height={22} color='#fff' />
);

export const Footer = () => {
  return (
    <SectionRoot>
      <Box pb={7}>
        <FooterContainerStyle>
          <CompInfoCont sx={{ gap: '1.5rem', flex: 1 }}>
            <Logo />
            <Typography variant='body1' color='textSecondary'>
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
          </CompInfoCont>
          <LinkContent>
            <Box>
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
            </Box>
            <Box sx={{ alignItems: 'flex-start' }}>
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
            </Box>
            <Box>
              <Typography variant='body1' mb={1} sx={{ visibility: 'hidden' }}>
                Company Policies
              </Typography>
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
            </Box>
          </LinkContent>
        </FooterContainerStyle>
        <TypoEnd variant='body2'>@ ConovoTach 2022</TypoEnd>
      </Box>
    </SectionRoot>
  );
};
