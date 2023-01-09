import { Avatar, Box, Link, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { Card_Sec_Root } from './styled';

export default function SubServicesCard(props) {
  const { title, desc, img } = props;
  return (
    <Card_Sec_Root>
      <Avatar variant='square' src={img} sx={{ width: 90, height: 90 }} />

      <Box>
        <Typography variant='subtitle1' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body1' component='span' color='text.secondary'>
          {desc}
        </Typography>
      </Box>
    </Card_Sec_Root>
  );
}
