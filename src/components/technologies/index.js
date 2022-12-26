import React from 'react';
import { Avatar, Box, styled, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

import { BackIllustration, SectionRoot } from '../custom';

import awsIcon from '@iconify/icons-logos/aws';
import reactIcon from '@iconify/icons-logos/react';
import pythonIcon from '@iconify/icons-logos/python';
import javascriptIcon from '@iconify/icons-logos/javascript';
import vueIcon from '@iconify/icons-logos/vue';
import javaIcon from '@iconify/icons-logos/java';
import gitIcon from '@iconify/icons-logos/git-icon';
import firebaseIcon from '@iconify/icons-logos/firebase';
import atlassianIcon from '@iconify/icons-logos/atlassian';
import mongodbIcon from '@iconify/icons-logos/mongodb-icon';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import androidIcon from '@iconify/icons-logos/android-icon';
import postmanIcon from '@iconify/icons-logos/postman-icon';
import mariadbIcon from '@iconify/icons-logos/mariadb-icon';
import swiftIcon from '@iconify/icons-logos/swift';
import { BackMajorEclipse, TechIonsCont } from './styled';

const avatarSize = { width: 90, height: 90 };

const getIcon = (icon) => <Icon icon={icon} width='65%' height='65%' />;

const avatarExt = (icon) => {
  return (
    <Avatar
      variant='square'
      sx={{ backgroundColor: '#fff', ...avatarSize, borderRadius: 3 }}
    >
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
        paddingTop: '2rem',
        overflow: 'hidden',
      }}
    >
      <SectionRoot className='dispFlexColAlgnCen' sx={{ position: 'relative' }}>
        <BackMajorEclipse />
        <Typography variant='h2' gutterBottom align='center'>
          Technologies We Work With
        </Typography>
        <Typography
          variant='body1'
          color='textSecondary'
          className='sectionMaxWid'
          sx={{ textAlign: 'center' }}
        >
          Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm,
          emedan semis. Härat rär par.
        </Typography>
        <TechIonsCont
          whileInView={{ opacity: [0, 1] }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.25,
          }}
        >
          <AvatarCont>{avatarExt(mariadbIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(androidIcon, postmanIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(awsIcon, reactIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(pythonIcon, javascriptIcon)}</AvatarCont>
          <AvatarCont>{avatarExt(vueIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(javaIcon, gitIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(firebaseIcon, atlassianIcon)}</AvatarCont>
          <AvatarCont>{avatars_2(mongodbIcon, postgresqlIcon)}</AvatarCont>
          <AvatarCont>{avatarExt(swiftIcon)}</AvatarCont>
        </TechIonsCont>
      </SectionRoot>
    </Box>
  );
};

export default Technologies;
