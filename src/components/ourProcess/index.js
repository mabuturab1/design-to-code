import { Typography } from '@mui/material';
import React from 'react';

import { SectionRoot } from 'components/custom';
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
