import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import {
  BackColoredCont,
  LargeRespImage,
  SectionRoot,
} from 'components/custom';
import ServiceHeader from 'components/ourServices/serviceHeader';
import {
  WebDevPojApproach,
  WebDevServices,
} from 'components/ourServices/services.data';
import React from 'react';
import clsx from 'clsx';

import html5 from '@iconify/icons-logos/html-5';
import css3 from '@iconify/icons-logos/css-3';
import javascriptIcon from '@iconify/icons-logos/javascript';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import typescriptIcon from '@iconify/icons-logos/typescript-icon';
import javaIcon from '@iconify/icons-logos/java';
import phpAlt from '@iconify/icons-logos/php-alt';
import laravelIcon from '@iconify/icons-logos/laravel';
import expressIcon from '@iconify/icons-logos/express';
import djangoIcon from '@iconify/icons-logos/django';
import sassIcon from '@iconify/icons-logos/sass';
import { Icon } from '@iconify/react';

import angularIcon from '@iconify/icons-logos/angular-icon';
import reactIcon from '@iconify/icons-logos/react';
import vueIcon from '@iconify/icons-logos/vue';
import pythonIcon from '@iconify/icons-logos/python';

import mysqlIcon from '@iconify/icons-logos/mysql';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import { CardContainer } from 'components/ourWork/styled';
import WorkCard from 'components/ourWork/workCard';
import { Work } from 'data';
import Image from 'next/image';
import { MHidden } from 'components/custom/MHidden';

const avatarSize = { width: 60, height: 60 };

function getIcon(icon) {
  return <Icon icon={icon} width='100%' height='100%' />;
}

function avatarExt(icon) {
  return (
    <Avatar
      sx={{
        ...avatarSize,
        borderRadius: 3,
        backgroundColor: 'transparent',
      }}
    >
      {getIcon(icon)}
    </Avatar>
  );
}

export default function WebDevelopment() {
  return (
    <React.Fragment>
      <ServiceHeader
        title='Web Application Development'
        description='Are you looking for top-notch Web Application development services? Conovotech offers full-stack web development services for different sectors to thrive in their business. We create intuitive, high-quality, secure, and performance-based web solutions to convert your dream ideas into reality.'
        img='/static/images/web-dev-service/web-dev.png'
      />
      <Box py={5} className='sectionGap' backgroundColor='background.neutral'>
        <SectionRoot className='dispFlexColAlgnCen'>
          <Typography variant='h3' gutterBottom align='center'>
            Web Development Services
          </Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            align='center'
            className='sectionMaxWid'
            sx={{ width: '100%', maxWidth: '42rem' }}
          >
            Get your robust, scalable, and secure web application for a
            delightful experience.
          </Typography>
          <Grid mt={3} container spacing={4}>
            {WebDevServices.map((el) => (
              <Grid key={el.title} item xs={12} sm={6} md={4}>
                <Box
                  display='flex'
                  flexDirection='column'
                  backgroundColor='#fff'
                  border='1px solid #e9e9e9'
                  padding='2rem'
                  height='100%'
                  gap={2}
                  borderRadius={4}
                >
                  <Avatar
                    variant='rounded'
                    sx={{ width: 90, height: 90 }}
                    src={el.img}
                  />
                  <Typography variant='h5'>{el.title}</Typography>
                  <Typography variant='body1' color='textSecondary'>
                    {el.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </SectionRoot>
      </Box>

      <SectionRoot className={clsx('dispFlexColAlgnCen', 'sectionGap')}>
        <Typography variant='h3' gutterBottom align='center'>
          Web App Development Process
        </Typography>
        <Typography
          variant='body1'
          color='textSecondary'
          className={clsx('sectionMaxWid', 'fullWidth')}
          align='center'
        >
          Plan, design, develop, test and roll out each version of your web
          application with zero downtime.
        </Typography>

        <LargeRespImage sx={{ marginTop: '4rem' }}>
          <MHidden type='up' value='sm'>
            <Image
              className='image'
              src='/static/images/web-dev-service/web-dev-process-mobile.svg'
              layout='responsive'
              width={560}
              height={400}
              alt='Web Development Process'
            />
          </MHidden>
          <MHidden type='down' value='sm'>
            <Image
              className='image'
              src='/static/images/web-dev-service/web-dev-process.svg'
              layout='responsive'
              width={560}
              height={400}
              alt='Web Development Process'
            />
          </MHidden>
        </LargeRespImage>
      </SectionRoot>
      <Box py={5} className='sectionGap' backgroundColor='background.neutral'>
        <SectionRoot className='dispFlexColAlgnCen'>
          <Typography variant='h3' gutterBottom align='center'>
            Web Development Tech-Stack
          </Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            align='center'
            className='sectionMaxWid'
            sx={{ width: '100%', maxWidth: '42rem' }}
          >
            The right technology stack is the foundation of your website. We
            build your site with the latest core technologies, to suit any type
            of application.
          </Typography>

          <Box
            mt={6}
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            gap={6}
            flexWrap='wrap'
          >
            {avatarExt(html5)}
            {avatarExt(css3)}
            {avatarExt(javascriptIcon)}
            {avatarExt(nodejsIcon)}
            {avatarExt(bootstrapIcon)}
            {avatarExt(typescriptIcon)}
            {avatarExt(javaIcon)}
            {avatarExt(phpAlt)}
            {avatarExt(laravelIcon)}
            {avatarExt(expressIcon)}
            {avatarExt(djangoIcon)}
            {avatarExt(sassIcon)}
            {avatarExt(angularIcon)}
            {avatarExt(reactIcon)}
            {avatarExt(vueIcon)}
            {avatarExt(pythonIcon)}
            {avatarExt(mysqlIcon)}
            {avatarExt(mongodbIcon)}
          </Box>
        </SectionRoot>
      </Box>

      <SectionRoot
        className={clsx('dispFlexColAlgnCen', 'sectionGap')}
        gap='4rem'
      >
        <Box className='dispFlexColAlgnCen'>
          <Typography variant='h3' gutterBottom>
            Our Work
          </Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            className={clsx('sectionMaxWid', 'fullWidth')}
            align='center'
            sx={{ width: '100%' }}
          >
            The story of our company told through the success of our clients.
          </Typography>
        </Box>
        <CardContainer>
          {Work.slice(0, 3).map((el, i) => (
            <WorkCard key={`${i}-${el.title}`} {...el} />
          ))}
        </CardContainer>
        <Button variant='contained' color='primary'>
          See More Work
        </Button>
      </SectionRoot>
    </React.Fragment>
  );
}
