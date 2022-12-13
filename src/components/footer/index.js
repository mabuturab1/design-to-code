import { Avatar, Box, Link, styled, Typography } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';

import { Logo } from '../Logo';

import { SectionRoot } from '../custom';
import dribbbleIcon from '@iconify/icons-bxl/dribbble';
import facebookIcon from '@iconify/icons-bxl/facebook';
import twitterIcon from '@iconify/icons-bxl/twitter';
import youtubeIcon from '@iconify/icons-bxl/youtube';
import {
  AvatarExt,
  CompInfoCont,
  FooterContainerStyle,
  FooterNavLink,
  LinkContent,
  TypoEnd,
} from './styled';

const getIcon = (name) => (
  <Icon icon={name} width={22} height={22} color='#fff' />
);

export const Footer = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(#F0F5FD,#F2F0FD00)`,
        paddingTop: '2rem',
      }}
    >
      <SectionRoot>
        <Box pb={6}>
          <FooterContainerStyle>
            <CompInfoCont sx={{ gap: '1.5rem', flex: 1 }}>
              <Logo sx={{ maxWidth: 200 }} />
              <Typography variant='body1' color='textSecondary'>
                Lörem ipsum aras beskade nede plakar. Sad monorade. Söven fade
                negon. Samösat neras pykäs. Preligt anas egoliga. Astrovis låvis
                revis an.
              </Typography>
              <Box display='flex' gap='1rem'>
                <Link href='#'>
                  <AvatarExt sx={{ backgroundColor: 'primary.main' }}>
                    {getIcon(facebookIcon)}
                  </AvatarExt>
                </Link>
                <Link href='#'>
                  <AvatarExt sx={{ backgroundColor: 'primary.main' }}>
                    {getIcon(twitterIcon)}
                  </AvatarExt>
                </Link>
                <Link href='#'>
                  <AvatarExt sx={{ backgroundColor: 'primary.main' }}>
                    {getIcon(youtubeIcon)}
                  </AvatarExt>
                </Link>
                <Link href='#'>
                  <AvatarExt sx={{ backgroundColor: 'primary.main' }}>
                    {getIcon(dribbbleIcon)}
                  </AvatarExt>
                </Link>
              </Box>
            </CompInfoCont>
            <LinkContent>
              <Box>
                <Typography variant='subtitle1' mb={1} fontWeight={700}>
                  Quick Links
                </Typography>
                <FooterNavLink href='/about-us'>About Us</FooterNavLink>
                <FooterNavLink href='#'>Pricing</FooterNavLink>
                <FooterNavLink href='#'>Blog</FooterNavLink>
                <FooterNavLink href='/#contact-us'>Contact Us</FooterNavLink>
              </Box>
              <Box sx={{ alignItems: 'flex-start' }}>
                <Typography variant='subtitle1' mb={1} fontWeight={700}>
                  Others
                </Typography>
                <FooterNavLink href='#'>Why ConovoTech?</FooterNavLink>
                <FooterNavLink href='#'>How it works</FooterNavLink>
                <FooterNavLink href='#'>FAQ</FooterNavLink>
                <FooterNavLink href='#'>Affiliates</FooterNavLink>
                <FooterNavLink href='#'>How to get More Sales</FooterNavLink>
                <FooterNavLink href='#'>Customer Support</FooterNavLink>
              </Box>
              <Box>
                <Typography
                  variant='body1'
                  mb={1}
                  fontWeight={700}
                  sx={{ visibility: 'hidden' }}
                >
                  Company Policies
                </Typography>
                <FooterNavLink href='#'>Privacy Policy</FooterNavLink>
                <FooterNavLink href='#'>Terms and Conditions</FooterNavLink>
                <FooterNavLink href='#'>Cookie Policy</FooterNavLink>
                <FooterNavLink href='#'>Language</FooterNavLink>
              </Box>
            </LinkContent>
          </FooterContainerStyle>
          <TypoEnd variant='body2'>@ ConovoTach 2022</TypoEnd>
        </Box>
      </SectionRoot>
    </Box>
  );
};
