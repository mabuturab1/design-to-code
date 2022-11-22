import { styled, Typography, Box, IconButton } from '@mui/material';
import React from 'react';

import { Logo } from '../Logo';

import { SectionRoot } from '../custom';
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
            <Typography variant='body2' color='text.primary'>
              Portfolio
            </Typography>
            <Typography variant='body2'>About Us</Typography>
            <Typography variant='body2'>Blog</Typography>
            <Typography variant='body2'>Contact Us</Typography>
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
