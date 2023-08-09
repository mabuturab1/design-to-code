import { Avatar, Box, Link, styled, Typography } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';
import { Logo } from '../Logo';
import { SectionRoot } from '../custom';
// import dribbbleIcon from '@iconify/icons-bxl/dribbble';
// import facebookIcon from '@iconify/icons-bxl/facebook';
// import twitterIcon from '@iconify/icons-bxl/twitter';
// import youtubeIcon from '@iconify/icons-bxl/youtube';

import youtubeIcon from '@iconify/icons-simple-icons/youtube';
import dribbbleIcon from '@iconify/icons-simple-icons/dribbble';
import twitterIcon from '@iconify/icons-simple-icons/twitter';
import facebookIcon from '@iconify/icons-simple-icons/facebook';

import { AvatarExt, CompInfoCont, FooterContainerStyle, FooterLink, FooterRightsSec, FooterRightsSecWrapper, LinkContent, TypoEnd } from './styled';
import { ABOUT_LINK, BLOGS_LINK, CONTACTUS_LINK, FAQ_LINK, PORTFOLIO_LINK, PRIVACY_POLICY_LINK, TERMS_LINK, COMPANY_LINK, SERVICES_LINK, Contributors } from '../../utils/links';

const getIcon = (name) => <Icon icon={name} width={22} height={22} color='#fff' />;

const navItems = [
  {
    label: 'Company',
    url: COMPANY_LINK,
  },
  {
    label: 'Services',
    url: SERVICES_LINK,
  },
  {
    label: 'Portfolio',
    url: PORTFOLIO_LINK,
  },
  {
    label: 'About Us',
    url: ABOUT_LINK,
  },
  {
    label: 'Blog',
    url: BLOGS_LINK,
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(#F0F5FD,#F2F0FD00)`,
        paddingTop: '2rem',
      }}>
      <SectionRoot>
        <Box>
          <FooterContainerStyle mb={3}>
            <CompInfoCont sx={{ gap: '1.5rem', flex: 1 }}>
              <Logo sx={{ maxWidth: 200 }} />
              <Typography variant='body1' color='textSecondary'>
              {`Unlock Your Product's Full Potential - Let's Create Together!`}
              </Typography>
              <Box display='flex' gap='1rem'>
                <Link href='#'>
                  <AvatarExt sx={{ backgroundColor: 'primary.main' }}>{getIcon(facebookIcon)}</AvatarExt>
                </Link>
                <Link href='#'>
                  <AvatarExt sx={{ backgroundColor: 'primary.main' }}>{getIcon(twitterIcon)}</AvatarExt>
                </Link>
                <Link href='#'>
                  <AvatarExt sx={{ backgroundColor: 'primary.main' }}>{getIcon(youtubeIcon)}</AvatarExt>
                </Link>
                <Link href='#'>
                  <AvatarExt sx={{ backgroundColor: 'primary.main' }}>{getIcon(dribbbleIcon)}</AvatarExt>
                </Link>
              </Box>
            </CompInfoCont>
            {/* <LinkContent>
              <Box>
                <Typography variant='subtitle1' mb={1} fontWeight={700}>
                  Quick Links
                </Typography>
                {navItems.map((el) => (
                  <FooterLink key={el.url} variant='body1' color='text.secondary' href={el.url}>
                    {el.label}
                  </FooterLink>
                ))}
              </Box>
              <Box sx={{ alignItems: 'flex-start' }}>
                <Typography variant='subtitle1' mb={1} fontWeight={700}>
                  Services
                </Typography>
                <FooterLink variant='body1' color='text.secondary' href='#'>
                  Why ConovoTech?
                </FooterLink>
                <FooterLink variant='body1' color='text.secondary' href='#'>
                  How it works
                </FooterLink>
                <FooterLink variant='body1' color='text.secondary' href={FAQ_LINK}>
                  FAQ
                </FooterLink>
                <FooterLink variant='body1' color='text.secondary' href='#'>
                  Affiliates
                </FooterLink>
                <FooterLink variant='body1' color='text.secondary' href='#'>
                  How to get More Sales
                </FooterLink>
                <FooterLink variant='body1' color='text.secondary' href='#'>
                  Customer Support
                </FooterLink>
              </Box>
            </LinkContent> */}
          </FooterContainerStyle>
          <FooterRightsSecWrapper>
            <FooterRightsSec>
              <Typography variant='body2' component='span'>
                2022 ConovoTech
              </Typography>
              <Typography variant='body2' component='span'>
                All rights reserved
              </Typography>
            </FooterRightsSec>
            <FooterRightsSec>
              <FooterLink href={PRIVACY_POLICY_LINK} underline='none' variant='body2' color='inherit'>
                Privacy Policy
              </FooterLink>
              <FooterLink href={TERMS_LINK} underline='none' variant='body2' color='inherit'>
                Terms and Conditions
              </FooterLink>
              <FooterLink target='_blank' href={Contributors} underline='none' variant='body2' color='inherit'>
                Credits & Contributors
              </FooterLink>
              {/* <FooterLink
                href='#'
                underline='none'
                variant='body2'
                color='inherit'
              >
                Cookie Policy
              </FooterLink>
              <FooterLink
                href='#'
                underline='none'
                variant='body2'
                color='inherit'
              >
                Language
              </FooterLink> */}
            </FooterRightsSec>
          </FooterRightsSecWrapper>
        </Box>
      </SectionRoot>
    </Box>
  );
};

export default Footer;
