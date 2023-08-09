import React from 'react';
import { Avatar, Box, styled, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

import { BackIllustration, SectionRoot } from '../custom';

import awsIcon from '@iconify/icons-logos/aws';
import reactIcon from '@iconify/icons-logos/react';
import laravelIcon from '@iconify/icons-logos/laravel';
import javascriptIcon from '@iconify/icons-logos/javascript';
import bitBucket from '@iconify/icons-logos/bitbucket';
import angularIcon from '@iconify/icons-logos/angular-icon';
import phpIcon from '@iconify/icons-logos/php';
import gitIcon from '@iconify/icons-logos/git-icon';
import firebaseIcon from '@iconify/icons-logos/firebase';
import mongodbIcon from '@iconify/icons-logos/mongodb-icon';
import postGresIcon from '@iconify/icons-logos/postgresql';
import jiraIcon from '@iconify/icons-logos/jira';
import postmanIcon from '@iconify/icons-logos/postman-icon';
import nodejs from '@iconify/icons-logos/nodejs';
import flutterIcon from '@iconify/icons-logos/flutter';
import { BackMajorEclipse, TechIonsCont } from './styled';

const avatarSize = { width: 90, height: 90 };

const getIcon = (icon) => <Icon icon={icon} width='65%' height='65%' />;

const avatarExt = (icon) => {
  return (
    <Avatar variant='square' sx={{ backgroundColor: '#fff', ...avatarSize, borderRadius: 3 }}>
      {getIcon(icon)}
    </Avatar>
  );
};

const avatars_2 = (icon1, icon2) => {
  return (
    <React.Fragment>
      {avatarExt(icon1)}
      {avatarExt(icon2)}
    </React.Fragment>
  );
};

const AvatarCont = ({ children }) => {
  return (
    <Box className='dispFlexColAlgnCen' sx={{ gap: '1.5rem' }}>
      {children}
    </Box>
  );
};

const Technologies = () => {
  return (
    <Box
      className='sectionGap'
      sx={{
        backgroundColor: 'background.neutral',
        paddingTop: '1rem',
        overflow: 'hidden',
      }}>
      <SectionRoot className='dispFlexColAlgnCen' sx={{ position: 'relative' }}>
        <BackMajorEclipse />
        <Typography variant='h2' gutterBottom align='center'>
          Technologies We Work With
        </Typography>
        <Typography variant='body1' color='textSecondary' className='sectionMaxWid' sx={{ textAlign: 'center' }}>
          We leverage following tech tools to craft exceptional user experiences..
        </Typography>
        <TechIonsCont
          whileInView={{ opacity: [0, 1] }}
          transition={{
            duration: 1.25,
            ease: 'easeOut',
            delay: 0.25,
          }}>
          <AvatarCont>{avatarExt(nodejs)}</AvatarCont>
          <AvatarCont>{avatars_2(mongodbIcon, postGresIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(laravelIcon, angularIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(reactIcon, flutterIcon)}</AvatarCont>
          <AvatarCont>{avatarExt(javascriptIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(bitBucket, gitIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(awsIcon, firebaseIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(postmanIcon, jiraIcon)}</AvatarCont>
          <AvatarCont>{avatarExt(phpIcon)}</AvatarCont>
        </TechIonsCont>
      </SectionRoot>
    </Box>
  );
};

export default Technologies;
