import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import clsx from 'clsx';

import WorkCard from './workCard';

import { SectionRoot } from './CustomComp';

import { Work } from '../data';

const RecWorkContainer = styled(Box)(({ theme }) => ({
  width: '200%',
  height: '100%',
  borderRadius: '50%',
  background: `linear-gradient(#F0F5FD,#F2F0FD00)`,
  left: '-50%',
  right: 0,
  position: 'relative',

  [theme.breakpoints.down('449')]: {
    width: '300%',
    left: '-100%',
  },
}));

const CardContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridGap: '2rem',
  gridTemplateColumns: 'repeat(3, 1fr)',

  [theme.breakpoints.between('450', '543')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('449')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

const RecentWork = () => {
  return (
    <Box
      width='100%'
      height='fit-content'
      overflow='hidden'
      position='relative'
      mb={4}
    >
      <RecWorkContainer pt={9}>
        <SectionRoot
          className='sectionGap'
          sx={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
          }}
        >
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
            {Work.map((el, i) => (
              <WorkCard key={`${i}-${el.title}`} {...el} />
            ))}
          </CardContainer>
          <Box textAlign='center'>
            <Button variant='contained' color='primary'>
              See More Work
            </Button>
          </Box>
        </SectionRoot>
      </RecWorkContainer>
    </Box>
  );
};

export default RecentWork;
