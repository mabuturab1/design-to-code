import { Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <React.Fragment>
      <Typography variant='h3' gutterBottom>
        {title}
      </Typography>
      <Typography
        variant='body2'
        color='textSecondary'
        sx={{ maxWidth: '25rem' }}
        align='center'
      >
        {subtitle}
      </Typography>
    </React.Fragment>
  );
};

export default SectionTitle;
