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
  BulletBorder,
  BulletCircle,
  InnerBox,
  MobileContent,
  TimelineConnectorExt,
  TimelineDotExt,
  TypoExt,
} from './styled';
import HorizontalStepper from './HorizontalTimeline';

const Process = () => {
  return (
    <SectionRoot
      className='dispFlexColAlgnCen sectionGap'
      sx={{ position: 'relative' }}
    >
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
      <HorizontalStepper />
    </SectionRoot>
  );
};

export default Process;
