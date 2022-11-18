import React from 'react';
import { Avatar, Box, styled, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

import { BackIllustration, SectionRoot } from './CustomComp';

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

const TechIonsCont = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'no-wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  width: '100%',
  marginTop: '4rem',
  marginBottom: '-5%',

  '& > :nth-child(4n+3  )': {
    marginTop: '-5%',
    alignItems: 'center',
  },
}));

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

const avatars2 = (icon1, icon2) => {
  return (
    <React.Fragment>
      {avatarExt(icon1)}
      {avatarExt(icon2)}
    </React.Fragment>
  );
};

const AvatarCont = ({ children }) => {
  return (
    <Box className='dispFlexColAlgnCen' sx={{ gap: '1rem' }}>
      {children}
    </Box>
  );
};

const Technologies = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.neutral',
        paddingTop: '4rem',
        overflow: 'hidden',
      }}
    >
      <SectionRoot className='dispFlexColAlgnCen'>
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
        <BackIllustration>
          <picture>
            <img
              height='100%'
              width='100%'
              src='/static/images/dot2.svg'
              alt='Landscape picture'
            />
          </picture>
        </BackIllustration>
        <TechIonsCont>
          <AvatarCont>{avatarExt(mariadbIcon)}</AvatarCont>
          <AvatarCont>{avatars2(androidIcon, postmanIcon)}</AvatarCont>
          <AvatarCont>{avatars2(awsIcon, reactIcon)}</AvatarCont>
          <AvatarCont>{avatars2(pythonIcon, javascriptIcon)}</AvatarCont>
          <AvatarCont>{avatarExt(vueIcon)}</AvatarCont>
          <AvatarCont>{avatars2(javaIcon, gitIcon)}</AvatarCont>
          <AvatarCont>{avatars2(firebaseIcon, atlassianIcon)}</AvatarCont>
          <AvatarCont>{avatars2(mongodbIcon, postgresqlIcon)}</AvatarCont>
          <AvatarCont>{avatarExt(swiftIcon)}</AvatarCont>
        </TechIonsCont>
      </SectionRoot>
    </Box>
  );
};

export default Technologies;
