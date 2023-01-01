import { Box, styled } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
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
          <motion.div
            className='logoBox'
            whileInView={{ opacity: [0, 1] }}
            transition={{
              duration: 1.25,
              ease: 'easeOut',
            }}
          >
            <picture>
              <img
                height='100%'
                width='100%'
                src='/static/images/comp_logo_1.svg'
                alt='Landscape picture'
              />
            </picture>
          </motion.div>
          <motion.div
            className='logoBox'
            whileInView={{ opacity: [0, 1] }}
            transition={{
              duration: 1.25,
              ease: 'easeOut',
              delay: 0.25,
            }}
          >
            <picture>
              <img
                height='100%'
                width='100%'
                src='/static/images/comp_logo_2.svg'
                alt='Landscape picture'
              />
            </picture>
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
            <picture>
              <img
                height='100%'
                width='100%'
                src='/static/images/comp_logo_3.svg'
                alt='Landscape picture'
              />
            </picture>
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
            <picture>
              <img
                height='100%'
                width='100%'
                src='/static/images/comp_logo_4.svg'
                alt='Landscape picture'
              />
            </picture>
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
            <picture>
              <img
                height='100%'
                width='100%'
                src='/static/images/comp_logo_5.svg'
                alt='Landscape picture'
              />
            </picture>
          </motion.div>
        </Container>
      </SectionRoot>
    </RootStyle>
  );
};

export default Clients;
