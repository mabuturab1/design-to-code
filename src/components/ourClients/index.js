import { Avatar, styled } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionRoot } from '../custom';

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

const Clients = () => {
  return (
    <RootStyle>
      <SectionRoot className='sectionGap' sx={{ marginBottom: '0' }}>
        <Container>
          <motion.div
            className='logoBox'
            whileInView={{ opacity: [0, 1] }}
            transition={{
              duration: 1.25,
              ease: 'easeOut',
              delay: 0.25,
            }}
          >
            <Avatar
              variant='square'
              src='/static/images/comp_logo_1.svg'
              alt='Client'
              sx={{ width: '100%', height: '100%', maxWidth: 125 }}
            />
          </motion.div>
          <motion.div
            className='logoBox'
            whileInView={{ opacity: [0, 1] }}
            transition={{
              duration: 1.25,
              ease: 'easeOut',
              delay: 0.5,
            }}
          >
            <Avatar
              variant='square'
              src='/static/images/comp_logo_2.svg'
              alt='Client'
              sx={{ width: '100%', height: '100%', maxWidth: 125 }}
            />
          </motion.div>
          <motion.div
            className='logoBox'
            whileInView={{ opacity: [0, 1] }}
            transition={{
              duration: 1.25,
              ease: 'easeOut',
              delay: 0.75,
            }}
          >
            <Avatar
              variant='square'
              src='/static/images/comp_logo_3.svg'
              alt='Client'
              sx={{ width: '100%', height: '100%', maxWidth: 125 }}
            />
          </motion.div>
          <motion.div
            className='logoBox'
            whileInView={{ opacity: [0, 1] }}
            transition={{
              duration: 1.25,
              ease: 'easeOut',
              delay: 1,
            }}
          >
            <Avatar
              variant='square'
              src='/static/images/comp_logo_4.svg'
              alt='Client'
              sx={{ width: '100%', height: '100%', maxWidth: 125 }}
            />
          </motion.div>
          <motion.div
            className='logoBox'
            whileInView={{ opacity: [0, 1] }}
            transition={{
              duration: 1.25,
              ease: 'easeOut',
              delay: 1.25,
            }}
          >
            <Avatar
              variant='square'
              src='/static/images/comp_logo_5.svg'
              alt='Client'
              sx={{ width: '100%', height: '100%', maxWidth: 125 }}
            />
          </motion.div>
        </Container>
      </SectionRoot>
    </RootStyle>
  );
};

export default Clients;
