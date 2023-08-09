import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { FlexForImgCont, LargeRespImage } from '../custom';
import { AboutUsContainer, Container, WorkContent } from './styled';
import { CountUp } from 'use-count-up';
import Image from 'next/image';
import { ANIMATION_DURATION, getHVAnimationConfigs } from 'data';
import theme from 'theme';

const index = () => {
  return (
    <AboutUsContainer>
      <FlexForImgCont alignItems='center' gap='1rem'>
        <LargeRespImage {...getHVAnimationConfigs({ opacity: 0 }, { opacity: 1 })}>
          <Image src='/static/images/about-us.svg' layout='responsive' width={560} height={400} alt='About ConovoTech' className='image' priority />
        </LargeRespImage>

        <WorkContent {...getHVAnimationConfigs({ opacity: 0, x: 40 }, { opacity: 1, x: 0 }, { duration: ANIMATION_DURATION.big })}>
          <Typography variant='h2' color={'text.primary'}>
            About Us
          </Typography>
          <Typography variant='body1' color='textSecondary' className='subtitle'>
            At ConovoTech, we are passionate about empowering businesses with cutting-edge technology solutions that fuel growth, enhance productivity, and transform the way they operate.
          </Typography>
          <div className='statsContent'>
            <Box display='flex' flexWrap='nowrap' gap='1.5rem'>
              <Avatar variant='square' src='/static/images/customerRating.svg' alt='Satisfied Customers' sx={{ width: 55, height: 55 }} />

              <Box>
                <Typography variant='h3' sx={{ lineHeight: 1 }}>
                  <CountUp isCounting start={0} end={30} duration={2.9} easing='linear' />+
                </Typography>
                <Typography variant='body1'>Satisfied Customers</Typography>
              </Box>
            </Box>
            <Box display='flex' flexWrap='nowrap' gap='1.5rem'>
              <Avatar variant='square' src='/static/images/workExp_2.svg' alt='Satisfied Customers' sx={{ width: 55, height: 55 }} />

              <Box>
                <Typography variant='h3' sx={{ lineHeight: 1 }}>
                  <CountUp isCounting start={0} end={5} duration={2.9} easing='linear' />+
                </Typography>
                <Typography variant='body1'>Experience</Typography>
              </Box>
            </Box>
          </div>
        </WorkContent>
      </FlexForImgCont>
      <Box>
        <Typography variant='h3' fontWeight='bold' color='text.primary'>
          Our Mission
        </Typography>

        <Box marginTop={2} marginBottom={1}>
          <Typography variant='bodyContent1' fontWeight='bold' color='text.primary'>
            Crafting User-Centric Products
          </Typography>
        </Box>
        <Typography variant='bodyContent1'>
          We obsess over the needs of our users, ensuring that every aspect of our products is designed with them in mind. By prioritizing user experience, we create intuitive and engaging solutions
          that leave a lasting impact.
        </Typography>

        <Box marginTop={4} marginBottom={1}>
          <Typography variant='bodyContent1' fontWeight='bold' color='text.primary'>
            Empowering High-Performing Solutions
          </Typography>
        </Box>
        <Typography variant='bodyContent1'>
          Performance is at the heart of everything we build. Our products are optimized for speed, efficiency, and reliability, allowing businesses to thrive in a competitive landscape.
        </Typography>
        <Box marginTop={4} marginBottom={1}>
          <Typography variant='bodyContent1' fontWeight='bold' color='text.primary'>
            Competing with the Giants
          </Typography>
        </Box>
        <Typography variant='bodyContent1'>
          Startups are our passion. We help them level the playing field, making their products competitive against industry giants. With our expertise, startups can stand tall and seize opportunities
          for growth.
        </Typography>
        <Box marginTop={4} marginBottom={1}>
          <Typography variant='bodyContent1' fontWeight='bold' color='text.primary'>
            Collaborating for Success
          </Typography>
        </Box>
        <Typography variant='bodyContent1'>
          We work closely with our clients, forming strong partnerships to develop innovative strategies that increase user engagement and enhance overall usability. Together, we unlock the true
          potential of their products.
        </Typography>

        <Box marginTop={4} marginBottom={1}>
          <Typography variant='bodyContent1' fontWeight='bold' color='text.primary'>
            Communication: The Key to Greatness
          </Typography>
        </Box>
        <Typography variant='bodyContent1'>
          Open and effective communication with both users and stakeholders is our mantra for launching exceptional products. We believe that understanding their needs and expectations is vital to
          driving sustainable business success.
        </Typography>

        <Box marginTop={4}>
          <Typography variant='bodyContent1'>Connect with Us</Typography>
        </Box>
        <Typography variant='bodyContent1'>
          {`   Ready to take your product to the next level? Let's connect and explore how we can help you craft a user-centric, high-performing product that leaves a mark in the market.`}
        </Typography>
      </Box>
    </AboutUsContainer>
  );
};

export default index;
