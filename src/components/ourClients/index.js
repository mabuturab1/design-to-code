import { Avatar, styled } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionRoot } from '../custom';
import { ANIMATION_DURATION, getHVAnimationConfigs } from 'data';

const RootStyle = styled('div')(() => ({
  paddingBlock: '1rem',
  marginBottom: '4rem',
  backgroundColor: '#F0F5FD',
}));

const Container = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2.5rem',
  justifyContent: 'center',
  height: 'fit-content',
  alignItems: 'center',
}));

const CLIENT_DATA = ['/static/images/comp_logo_1.svg', '/static/images/comp_logo_2.svg', '/static/images/comp_logo_3.svg', '/static/images/comp_logo_4.svg', '/static/images/comp_logo_5.svg'];

const Clients = () => {
  return (
    <RootStyle>
      <SectionRoot className='sectionGap' sx={{ marginBottom: '0' }}>
        <Container>
          {CLIENT_DATA.map((_d, index) => (
            <motion.div
              key={index}
              {...getHVAnimationConfigs({ opacity: 0 }, { opacity: 1 }, { duration: ANIMATION_DURATION.small, delay: ANIMATION_DURATION.small + index * ANIMATION_DURATION.small })}>
              <Avatar variant='square' src={_d} alt='Client' sx={{ width: '100%', height: '100%', maxWidth: 125 }} />
            </motion.div>
          ))}
        </Container>
      </SectionRoot>
    </RootStyle>
  );
};

export default Clients;
