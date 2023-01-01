import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { SectionRoot } from '../custom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { WorkContent, WorkContentCont, WorkImgSm } from './styled';

const index = () => {
  return (
    <SectionRoot className='sectionGap' sx={{ position: 'relative' }}>
      <WorkContentCont>
        <motion.div
          className='illustration'
          whileInView={{ opacity: [0, 1] }}
          transition={{
            duration: 1.25,
            ease: 'easeOut',
            delay: 1,
          }}
        >
          <picture>
            <img
              src='/static/images/aboutUsIllustration.svg'
              height='100%'
              width='100%'
              alt='Landscape picture'
            />
          </picture>
        </motion.div>
        <WorkContent
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{
            duration: 1.25,
            ease: 'easeOut',
            delay: 1.5,
          }}
        >
          <Typography variant='h2'>About Us</Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            className='subtitle'
          >
            Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm,
            emedan semis. Härat rär par. Lörem ipsum georening buköska vaben.
            Dögyns eurong. Povisovis josm, emedan semis. Härat rär par.
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
                <CountUp start={0} end={500} delay={1} suffix='+'>
                  {({ countUpRef, start }) => (
                    <Typography
                      ref={countUpRef}
                      variant='h3'
                      sx={{ lineHeight: 1 }}
                    />
                  )}
                </CountUp>
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
                <CountUp start={0} end={12} delay={1} suffix='+'>
                  {({ countUpRef, start }) => (
                    <Typography
                      ref={countUpRef}
                      variant='h3'
                      sx={{ lineHeight: 1 }}
                    />
                  )}
                </CountUp>
                <Typography variant='body1'>Experience</Typography>
              </Box>
            </Box>
          </div>
        </WorkContent>
      </WorkContentCont>
    </SectionRoot>
  );
};

export default index;
