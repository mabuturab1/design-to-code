import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import clsx from 'clsx';

import WorkCard from './workCard';
import { BackIllustration, SectionRoot, SmallBackEllipse } from '../custom';

import { RecWorkContainer, CardContainer, RootStyle } from './styled';

import { Work } from '../../data';

const RecentWork = () => {
  return (
    <RootStyle id='portfolio' className='sectionGap'>
      <RecWorkContainer pt={5}>
        <SectionRoot
          className='dispFlexColAlgnCen'
          sx={{
            width: '100vw',
            gap: '4rem',
            // position: 'relative',
          }}
        >
          {/* <SmallBackEllipse sx={{ right: 20, opacity: 0.3 }} /> */}
          <Box className='dispFlexColAlgnCen'>
            <Typography variant='h2' gutterBottom>
              Recent Work
            </Typography>
            <Typography
              variant='body1'
              color='textSecondary'
              className={clsx('sectionMaxWid', 'fullWidth')}
              align='center'
              sx={{ width: '100%' }}
            >
              Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis
              josm, emedan semis. Härat rär par.
            </Typography>
          </Box>
          <CardContainer>
            {Work.slice(0, 3).map((el, i) => (
              <WorkCard key={`${i}-${el.title}`} {...el} />
            ))}
          </CardContainer>
          <Box textAlign='center'>
            <Button variant='contained' color='primary'>
              See More Work
            </Button>
          </Box>
          {/* <Box width='100vw' position='relative'>
            <BackIllustration sx={{ bottom: 20, left: 'calc(100vw-15px)' }}>
              <picture>
                <img
                  height='100%'
                  width='100%'
                  src='/static/images/dots.svg'
                  alt='Landscape picture'
                />
              </picture>
            </BackIllustration>
          </Box> */}
        </SectionRoot>
      </RecWorkContainer>
    </RootStyle>
  );
};

export default RecentWork;
