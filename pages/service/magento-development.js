import React from 'react';
import clsx from 'clsx';
import { Icon } from '@iconify/react';
import { Box, Button, Grid, Typography, Avatar } from '@mui/material';

import {
  BackColoredCont,
  SectionRoot,
  FlexForImgCont,
  LargeRespImage,
} from 'components/custom';
import SubServicesCard from 'components/ourServices/subServiceCard';

import { ContentList } from 'components/ourServices/styled';

import Image from 'next/image';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import magentoIcon from '@iconify/icons-simple-icons/magento';
import html5Icon from '@iconify/icons-simple-icons/html5';
import css3Icon from '@iconify/icons-simple-icons/css3';
import jsonIcon from '@iconify/icons-simple-icons/json';
import phpIcon from '@iconify/icons-simple-icons/php';
import mysqlIcon from '@iconify/icons-simple-icons/mysql';
import nodedotjsIcon from '@iconify/icons-simple-icons/nodedotjs';

import { MagentoServices } from 'components/ourServices/services.data';
import { CardContainer } from 'components/ourWork/styled';
import WorkCard from 'components/ourWork/workCard';
import { Work } from 'data';
import ServiceHeader from 'components/ourServices/serviceHeader';

const avatarSize = { width: 60, height: 60 };

function getIcon(icon) {
  return <Icon icon={icon} width='100%' height='100%' color='#637381' />;
}

function avatarExt(icon) {
  return (
    <Avatar
      variant='square'
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

export default function MagentoDevelopment() {
  return (
    <React.Fragment>
      <ServiceHeader
        title='Magento Development Services'
        description='We offer design, development, and deployment of online eCommerce
              stores using the Magento framework. The result is a beautiful
              eCommerce website with powerful features.'
        img='/static/images/magento-banner.webp'
      />
      <BackColoredCont className='sectionGap'>
        <SectionRoot className='dispFlexColAlgnCen'>
          <Typography variant='h3' gutterBottom>
            Why Magento?
          </Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            align='center'
            className='sectionMaxWid'
            sx={{ width: '100%' }}
          >
            Magento is a leading PHP-based framework used for creating
            enterprise-level eCommerce solutions.
          </Typography>
          <FlexForImgCont mt={5}>
            <LargeRespImage>
              <Image
                src='/static/images/why-magento.webp'
                layout='responsive'
                width={560}
                height={400}
                alt='Magento Banner'
                className='image'
              />
            </LargeRespImage>
            <Box display='flex' alignItems='center'>
              <ContentList>
                <li>
                  <KeyboardArrowRightIcon />
                  <Typography variant='body1' color='textSecondary'>
                    Magento currently has over 200,000 online retailers.
                  </Typography>
                </li>
                <li>
                  <KeyboardArrowRightIcon />
                  <Typography variant='body1' color='textSecondary'>
                    The framework has a huge active community of developers.
                  </Typography>
                </li>
                <li>
                  <KeyboardArrowRightIcon />
                  <Typography variant='body1' color='textSecondary'>
                    Unity is the de-facto indie game development platform that
                    is powered by C#.
                  </Typography>
                </li>
                <li>
                  <KeyboardArrowRightIcon />
                  <Typography variant='body1' color='textSecondary'>
                    It has been estimated that 1 of every 4 online businesses is
                    powered by Magento.
                  </Typography>
                </li>
              </ContentList>
            </Box>
          </FlexForImgCont>
        </SectionRoot>
      </BackColoredCont>
      <SectionRoot className={clsx('dispFlexColAlgnCen', 'sectionGap')}>
        <Typography variant='h3' align='center' gutterBottom>
          Magento Services Offered
        </Typography>
        <Grid mt={3} container spacing={4}>
          {MagentoServices.map((el) => (
            <Grid key={el.title} item xs={12} sm={12} md={6}>
              <SubServicesCard {...el} />
            </Grid>
          ))}
        </Grid>
      </SectionRoot>
      <Box
        className='sectionGap'
        sx={{
          backgroundColor: 'background.neutral',
        }}
      >
        <SectionRoot className='dispFlexColAlgnCen' gap='1rem'>
          <Typography variant='h3' gutterBottom>
            Technologies
          </Typography>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-evenly'
            width='100%'
            sx={{ gap: '1.5rem', padding: '1rem' }}
            flexWrap='wrap'
          >
            {avatarExt(magentoIcon, 'Magento')}
            {avatarExt(html5Icon, 'HTML5')}
            {avatarExt(css3Icon, 'CSS3')}
            {avatarExt(jsonIcon, 'JSON')}
            {avatarExt(phpIcon, 'PHP')}
            {avatarExt(mysqlIcon, 'MySql')}
            {avatarExt(nodedotjsIcon, 'JavaScript')}
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
