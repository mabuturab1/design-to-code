import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Box, styled, Typography } from '@mui/material';
import React from 'react';

import LensIcon from '@mui/icons-material/Lens';

// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';

import { BackIllustration, SectionRoot } from './CustomComp';
import clsx from 'clsx';

const TypoExt = styled(Typography)(({ theme }) => ({
  fontSize: '14rem',
  color: theme.palette.background.default,
  paddingInline: '2.5rem',
  textAlign: 'center',

  [theme.breakpoints.up('sm')]: {},
}));

const InnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  height: '100%',
  paddingInline: '2.5rem',
}));

const TimelineDotExt = styled(TimelineDot)(({ theme }) => ({
  boxShadow: `0px 0px 49px 10px ${theme.palette.primary.main}3b`,
  backgroundColor: 'transparent',
}));
const TimelineConnectorExt = styled(TimelineConnector)(({ theme }) => ({
  boxShadow: `0px 0px 49px 10px ${theme.palette.primary.main}3b`,
  backgroundColor: 'transparent',
}));

const Process = () => {
  return (
    <SectionRoot className='dispFlexColAlgnCen'>
      <Typography variant='h3' gutterBottom>
        Our Process
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
      <Box position='relative'>
        <BackIllustration>
          <picture>
            <img
              height='100%'
              width='100%'
              src='/static/images/dots3.svg'
              alt='Landscape picture'
            />
          </picture>
        </BackIllustration>
      </Box>
      <Timeline position='alternate' sx={{ mt: 5 }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align='right'
            variant='body2'
            color='text.secondary'
          >
            <TypoExt>1</TypoExt>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnectorExt
              sx={{ width: 5, backgroundColor: 'primary.main' }}
            />
            <TimelineDotExt sx={{ backgroundColor: 'primary.main' }}>
              <LensIcon />
            </TimelineDotExt>
            <TimelineConnectorExt
              sx={{ width: 5, backgroundColor: 'primary.main' }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ py: 5 }}>
            <InnerBox>
              <Typography variant='h4'>Project Discovery Call</Typography>
              <Typography variant='body1'>
                Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                bera i dibäs och anat. Vivyng dissa
              </Typography>
            </InnerBox>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align='right'
            variant='body2'
            color='text.secondary'
          >
            <TypoExt>2</TypoExt>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnectorExt
              sx={{ width: 5, backgroundColor: 'primary.main' }}
            />
            <TimelineDotExt sx={{ backgroundColor: 'primary.main' }}>
              <LensIcon />
            </TimelineDotExt>
            <TimelineConnectorExt
              sx={{ width: 5, backgroundColor: 'primary.main' }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ py: 5 }}>
            <InnerBox>
              <Typography variant='h4'>Project Discovery Call</Typography>
              <Typography variant='body1'>
                Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                bera i dibäs och anat. Vivyng dissa
              </Typography>
            </InnerBox>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align='right'
            variant='body2'
            color='text.secondary'
          >
            <TypoExt>3</TypoExt>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnectorExt
              sx={{ width: 5, backgroundColor: 'primary.main' }}
            />
            <TimelineDotExt sx={{ backgroundColor: 'primary.main' }}>
              <LensIcon />
            </TimelineDotExt>
            <TimelineConnectorExt
              sx={{ width: 5, backgroundColor: 'primary.main' }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ py: 5 }}>
            <InnerBox>
              <Typography variant='h4'>Project Discovery Call</Typography>
              <Typography variant='body1'>
                Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                bera i dibäs och anat. Vivyng dissa
              </Typography>
            </InnerBox>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </SectionRoot>
  );
};

export default Process;
