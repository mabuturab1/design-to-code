import * as React from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Stepper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  QontoConnector,
  QontoStepIconRoot,
  StepLabelExt,
  StepperConnectorHorExt,
  StepperConnectorVerExt,
  StepperExt,
  TypoExt,
} from './styled';
import { MHidden } from '../custom/MHidden';

function QontoStepIcon(props) {
  const { className } = props;
  return (
    <QontoStepIconRoot className={className}>
      <div className='QontoStepIcon-circle' />
    </QontoStepIconRoot>
  );
}
const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

const HorizontalStepper = () => {
  const renderContent = <React.Fragment></React.Fragment>;
  return (
    <Box mt={8} sx={{ width: '100%', overflow: 'hidden' }}>
      <MHidden type='down' value='md'>
        <StepperExt
          alternativeLabel
          connector={<QontoConnector />}
          orientation='horizontal'
        >
          <Step>
            <StepperConnectorHorExt
              id='first'
              sx={{ left: 'calc(0% + 8px)', right: 'calc(50% + 8px)' }}
            >
              <span />
            </StepperConnectorHorExt>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <motion.div
                whileInView={{ y: [60, 0], x: [0, 0], opacity: [0, 1] }}
                transition={{
                  duration: 1.25,
                  ease: 'easeOut',
                  delay: 0.25,
                }}
              >
                <TypoExt sx={{ fontSize: '10rem' }}>1</TypoExt>
                <Typography variant='h4'>Project Discovery Call</Typography>
                <Typography variant='body1'>
                  Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                  potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                  bera i dibäs och anat. Vivyng dissa
                </Typography>
              </motion.div>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <motion.div
                whileInView={{ y: [60, 0], x: [0, 0], opacity: [0, 1] }}
                transition={{
                  duration: 1.25,
                  ease: 'easeOut',
                  delay: 0.25,
                }}
              >
                <TypoExt sx={{ fontSize: '10rem' }}>2</TypoExt>
                <Typography variant='h4'>Project Discovery Call</Typography>
                <Typography variant='body1'>
                  Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                  potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                  bera i dibäs och anat. Vivyng dissa
                </Typography>
              </motion.div>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <motion.div
                whileInView={{ y: [60, 0], x: [0, 0], opacity: [0, 1] }}
                transition={{
                  duration: 1.25,
                  ease: 'easeOut',
                  delay: 0.25,
                }}
              >
                <TypoExt sx={{ fontSize: '10rem' }}>3</TypoExt>
                <Typography variant='h4'>Project Discovery Call</Typography>
                <Typography variant='body1'>
                  Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                  potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                  bera i dibäs och anat. Vivyng dissa
                </Typography>
              </motion.div>
            </StepLabel>
            <StepperConnectorHorExt
              sx={{ left: 'calc(50% + 8px)', right: 'calc(0% + 8px)' }}
            >
              <span />
            </StepperConnectorHorExt>
          </Step>
        </StepperExt>
      </MHidden>
      <MHidden type='up' value='md'>
        <Stepper
          activeStep={-1}
          orientation='vertical'
          sx={{
            marginTop: '2rem',
            position: 'relative',
            '& .MuiStepConnector-line': {
              borderLeft: 0,
            },
          }}
        >
          <Step>
            <StepLabelExt>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  duration: 1.25,
                  ease: 'easeOut',
                  delay: 0.25,
                }}
              >
                <Typography variant='h4'>Project Discovery Call</Typography>
                <Typography variant='body1'>
                  Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                  potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                  bera i dibäs och anat. Vivyng dissa
                </Typography>
              </motion.div>
            </StepLabelExt>
          </Step>
          <Step>
            <StepLabelExt>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  duration: 1.25,
                  ease: 'easeOut',
                  delay: 0.25,
                }}
              >
                <Typography variant='h4'>Project Discovery Call</Typography>
                <Typography variant='body1'>
                  Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                  potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                  bera i dibäs och anat. Vivyng dissa
                </Typography>
              </motion.div>
            </StepLabelExt>
          </Step>
          <Step>
            <StepLabelExt>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  duration: 1.25,
                  ease: 'easeOut',
                  delay: 0.25,
                }}
              >
                <Typography variant='h4'>Project Discovery Call</Typography>
                <Typography variant='body1'>
                  Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                  potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                  bera i dibäs och anat. Vivyng dissa
                </Typography>
              </motion.div>
            </StepLabelExt>
          </Step>
          <StepperConnectorVerExt />
        </Stepper>
      </MHidden>
    </Box>
  );
};

export default HorizontalStepper;
