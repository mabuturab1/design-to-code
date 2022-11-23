import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { BackIllustration, SectionRoot } from '../custom';
import { Container, WorkContent, WorkContentCont, WorkImgSm } from './styled';

const index = () => {
  return (
    <Container>
      <SectionRoot sx={{ position: 'relative' }}>
        <WorkContentCont>
          <div className='illustration'>
            <picture>
              <img
                src='/static/images/aboutUsIllustration.svg'
                height='100%'
                width='100%'
                alt='Landscape picture'
              />
            </picture>
          </div>
          <WorkContent>
            <Typography variant='h2'>About Us</Typography>
            <Typography
              variant='body1'
              color='textSecondary'
              className='subtitle'
            >
              Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis
              josm, emedan semis. Härat rär par. Lörem ipsum georening buköska
              vaben. Dögyns eurong. Povisovis josm, emedan semis. Härat rär par.
            </Typography>
            <div className='statsContent'>
              <Box display='flex' flexWrap='nowrap' gap='1.5rem'>
                <WorkImgSm>
                  <picture>
                    <img
                      src='/static/images/customerRating.svg'
                      height='100%'
                      width='100%'
                      alt='Landscape picture'
                    />
                  </picture>
                </WorkImgSm>
                <Box>
                  <Typography variant='h3' sx={{ lineHeight: 1 }}>
                    500+
                  </Typography>
                  <Typography variant='body1'>Satisfied Customers</Typography>
                </Box>
              </Box>
              <Box display='flex' flexWrap='nowrap' gap='1.5rem'>
                <WorkImgSm>
                  <picture>
                    <img
                      src='/static/images/workExp_2.svg'
                      height='100%'
                      width='100%'
                      alt='Landscape picture'
                    />
                  </picture>
                </WorkImgSm>
                <Box>
                  <Typography variant='h3' sx={{ lineHeight: 1 }}>
                    12+
                  </Typography>
                  <Typography variant='body1'>Experience</Typography>
                </Box>
              </Box>
            </div>
          </WorkContent>
        </WorkContentCont>
      </SectionRoot>
    </Container>
  );
};

export default index;
