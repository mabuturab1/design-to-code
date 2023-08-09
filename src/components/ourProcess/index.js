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
        How we get it done
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        className='sectionMaxWid'
        sx={{ textAlign: 'center' }}
      >
       Our seamless product development lifecycle
      </Typography>
      <HorizontalStepper />
    </SectionRoot>
  );
};

export default Process;
