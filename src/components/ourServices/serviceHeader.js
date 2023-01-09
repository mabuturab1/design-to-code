import { Box, Button, Typography } from '@mui/material';
import {
  FlexForImgCont,
  HeadrAlgnCentr,
  LargeRespImage,
  SectionRoot,
} from 'components/custom';
import Image from 'next/image';
import React from 'react';

export default function ServiceHeader(props) {
  const { title, description, img } = props;

  return (
    <SectionRoot className='sectionGap' mt={2}>
      <FlexForImgCont>
        <HeadrAlgnCentr>
          <Typography variant='h3'>{title}</Typography>
          <Typography variant='body1' gutterBottom sx={{ fontWeight: 300 }}>
            {description}
          </Typography>
          <Box>
            <Button variant='contained' color='primary' size='large'>
              Book Free Consultation
            </Button>
          </Box>
        </HeadrAlgnCentr>
        <LargeRespImage>
          <Image
            src={img}
            layout='responsive'
            width={560}
            height={400}
            alt={title}
            className='image'
          />
        </LargeRespImage>
      </FlexForImgCont>
    </SectionRoot>
  );
}
