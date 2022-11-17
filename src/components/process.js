import { Typography } from '@mui/material';
import React from 'react';

import { SectionRoot } from './RootStyles';

const Process = () => {
  return (
    <SectionRoot>
      <Typography variant='h3' gutterBottom>
        Our Process
      </Typography>
      <Typography
        variant='body2'
        color='textSecondary'
        className='sectionMaxWid'
        align='center'
        fullWidth
      >
        Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm,
        emedan semis. Härat rär par.
      </Typography>
    </SectionRoot>
  );
};

export default Process;
