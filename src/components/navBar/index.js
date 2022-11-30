import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Logo } from '../Logo';
import { Link } from '@mui/material';
import { NavbarList, NavBarRoot, NavLink } from './styled';

// const navItems = ['Portfolio', 'About Us', 'Blog', 'Contact Us'];

const navItems = [
  {
    label: 'Portfolio',
    url: '#portfolio',
  },
  {
    label: 'About Us',
    url: '/about-us',
  },
  {
    label: 'Blog',
    url: '/',
  },
  {
    label: 'Contact Us',
    url: '#contact-us',
  },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position='sticky'
      color='inherit'
      sx={{
        boxShadow: '0 0 3px 1px #0003',
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <NavBarRoot>
            <Logo sx={{ maxWidth: 175 }} />
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='small'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <NavbarList>
              {navItems.map((navItem) => (
                <NavLink
                  href={navItem.url}
                  key={navItem.label}

                  // sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {navItem.label}
                </NavLink>
              ))}
            </NavbarList>
          </NavBarRoot>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
