import { Box, styled } from '@mui/material';
import React from 'react';
import { SectionRoot } from '../custom';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2.25rem',
  justifyContent: 'center',

  '& svg': {
    maxWidth: 45,
  },
}));

const Clients = () => {
  return (
    <SectionRoot>
      <Container>
        <Box>
          <picture>
            <img
              height='100%'
              width='100%'
              src='/static/images/comp_logo_1.svg'
              alt='Landscape picture'
            />
          </picture>
        </Box>
        <Box>
          <picture>
            <img
              height='100%'
              width='100%'
              src='/static/images/comp_logo_2.svg'
              alt='Landscape picture'
            />
          </picture>
        </Box>
        <Box>
          <picture>
            <img
              height='100%'
              width='100%'
              src='/static/images/comp_logo_3.svg'
              alt='Landscape picture'
            />
          </picture>
        </Box>
        <Box>
          <picture>
            <img
              height='100%'
              width='100%'
              src='/static/images/comp_logo_4.svg'
              alt='Landscape picture'
            />
          </picture>
        </Box>
        <Box>
          <picture>
            <img
              height='100%'
              width='100%'
              src='/static/images/comp_logo_5.svg'
              alt='Landscape picture'
            />
          </picture>
        </Box>
      </Container>
    </SectionRoot>
  );
};

export default Clients;
