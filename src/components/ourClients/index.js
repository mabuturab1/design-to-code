import { Box, styled } from '@mui/material';
import React from 'react';
import { SectionRoot } from '../custom';

const RootStyle = styled('div')(({ theme }) => ({
  paddingBlock: '1rem',
  marginBottom: '4rem',
  backgroundColor: '#F0F5FD',
}));

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.5rem',
  justifyContent: 'center',
  height: 'fit-content',

  '& .logoBox': {
    border: `2px solid #000`,
    padding: '1rem',
    borderRadius: 10,
    objectFit: 'contain',

    '& img': {
      maxWidth: 125,
    },
  },
}));

const Clients = () => {
  return (
    <RootStyle>
      <SectionRoot className='sectionGap' sx={{ marginBottom: '0' }}>
        <Container>
          <div className='logoBox'>
            <picture>
              <img
                height='100%'
                width='100%'
                src='/static/images/comp_logo_1.svg'
                alt='Landscape picture'
              />
            </picture>
          </div>
          <div className='logoBox'>
            <picture>
              <img
                height='100%'
                width='100%'
                src='/static/images/comp_logo_2.svg'
                alt='Landscape picture'
              />
            </picture>
          </div>
          <div className='logoBox'>
            <picture>
              <img
                height='100%'
                width='100%'
                src='/static/images/comp_logo_3.svg'
                alt='Landscape picture'
              />
            </picture>
          </div>
          <div className='logoBox'>
            <picture>
              <img
                height='100%'
                width='100%'
                src='/static/images/comp_logo_4.svg'
                alt='Landscape picture'
              />
            </picture>
          </div>
          <div className='logoBox'>
            <picture>
              <img
                height='100%'
                width='100%'
                src='/static/images/comp_logo_5.svg'
                alt='Landscape picture'
              />
            </picture>
          </div>
        </Container>
      </SectionRoot>
    </RootStyle>
  );
};

export default Clients;
