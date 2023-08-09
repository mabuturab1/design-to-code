import { alpha, Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SectionRoot } from '../custom';
import { motion } from 'framer-motion';
import { CONTACTUS_LINK } from 'utils/links';

const Wrapper = styled(motion.div)(({ theme }) => ({
  background: `linear-gradient(64deg,${alpha(theme.palette.primary.main, 0.12)},${alpha(theme.palette.grey[300], 0.2)})`,
  padding: '4rem 1.5rem',
  borderRadius: '1.5rem',
  textAlign: 'center',
}));

const Consultation = () => {
  return (
    <SectionRoot className='sectionGap'>
      <Wrapper
        // initial='hidden'
        // whileInView='visible'
        // viewport={{ once: true }}
        // transition={{ duration: 1.25 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}>
        <Typography variant='h3' mb={4} px={4}>
          Work with people CTOs praise as “super-friendly” and “reliable”
        </Typography>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.75 }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 30, opacity: 0 },
          }}>
          <Button variant='contained' color='primary' size='large'  href={CONTACTUS_LINK} endIcon={<ArrowForwardIcon />}>
            Book free consultation
          </Button>
        </motion.div>
      </Wrapper>
    </SectionRoot>
  );
};

export default Consultation;
