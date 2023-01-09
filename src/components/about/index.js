import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { FlexForImgCont, LargeRespImage } from '../custom';
import { WorkContent } from './styled';
import { CountUp } from 'use-count-up';
import Image from 'next/image';

const index = () => {
  return (
    <FlexForImgCont alignItems='center' gap='1rem'>
      <LargeRespImage
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 1.25,
          ease: 'easeOut',
          delay: 1,
        }}
      >
        <Image
          src='/static/images/aboutUsIllustration.svg'
          layout='responsive'
          width={560}
          height={400}
          alt='About ConovoTech'
          className='image'
          priority
        />
      </LargeRespImage>

      <WorkContent
        animate={{ x: [40, 0], opacity: [0, 1] }}
        transition={{
          duration: 1.25,
          ease: 'easeOut',
          delay: 0.5,
        }}
      >
        <Typography variant='h2'>About Us</Typography>
        <Typography variant='body1' color='textSecondary' className='subtitle'>
          Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm,
          emedan semis. Härat rär par. Lörem ipsum georening buköska vaben.
          Dögyns eurong. Povisovis josm, emedan semis. Härat rär par.
        </Typography>
        <div className='statsContent'>
          <Box display='flex' flexWrap='nowrap' gap='1.5rem'>
            <Avatar
              variant='square'
              src='/static/images/customerRating.svg'
              alt='Satisfied Customers'
              sx={{ width: 55, height: 55 }}
            />

            <Box>
              <Typography variant='h3' sx={{ lineHeight: 1 }}>
                <CountUp
                  isCounting
                  start={0}
                  end={500}
                  duration={2.9}
                  easing='linear'
                />
                +
              </Typography>
              <Typography variant='body1'>Satisfied Customers</Typography>
            </Box>
          </Box>
          <Box display='flex' flexWrap='nowrap' gap='1.5rem'>
            <Avatar
              variant='square'
              src='/static/images/workExp_2.svg'
              alt='Satisfied Customers'
              sx={{ width: 55, height: 55 }}
            />

            <Box>
              <Typography variant='h3' sx={{ lineHeight: 1 }}>
                <CountUp
                  isCounting
                  start={0}
                  end={12}
                  duration={2.9}
                  easing='linear'
                />
                +
              </Typography>
              <Typography variant='body1'>Experience</Typography>
            </Box>
          </Box>
        </div>
      </WorkContent>
    </FlexForImgCont>
  );
};

export default index;
