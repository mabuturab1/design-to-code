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

import { MHidden } from '../custom/MHidden';
import { BackIllustration, SectionRoot, SmallBackEllipse } from '../custom';

import LensIcon from '@mui/icons-material/Lens';
import {
  InnerBox,
  TimelineConnectorExt,
  TimelineDotExt,
  TypoExt,
} from './styled';

const Process = () => {
  return (
    <SectionRoot className='dispFlexColAlgnCen' sx={{ position: 'relative' }}>
      <SmallBackEllipse sx={{ left: 0 }} />
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
        <BackIllustration sx={{ top: 0, right: '2.5rem' }}>
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
      {/* <MHidden type='down' value='md'> */}
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
      {/* </MHidden> */}
    </SectionRoot>
  );
};

export default Process;
