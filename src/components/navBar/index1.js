import { styled, Typography, Box, IconButton, Link } from '@mui/material';
import React from 'react';

import { Logo } from '../Logo';

import { LinkExt, SectionRoot } from '../custom';
import { MHidden } from '../custom/MHidden';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { NavbarList, NavBarRoot } from './styled';

export const NavBar = () => {
  return (
    <SectionRoot>
      <NavBarRoot>
        <Logo />
        <MHidden type='down' value='md'>
          <NavbarList>
            <LinkExt href='#portfolio'>
              <Typography variant='subtitle2' color='text.primary'>
                Portfolio
              </Typography>
            </LinkExt>
            <Typography variant='subtitle2'>About Us</Typography>
            <Typography variant='subtitle2'>Blog</Typography>
            <Typography variant='subtitle2'>Contact Us</Typography>
          </NavbarList>
        </MHidden>
        <MHidden type='up' value='md'>
          <IconButton>
            <MenuOpenIcon />
          </IconButton>
        </MHidden>
      </NavBarRoot>
    </SectionRoot>
  );
};
