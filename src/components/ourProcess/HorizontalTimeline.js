import * as React from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Stepper, StepperContext, Typography } from '@mui/material';
import {
  QontoConnector,
  QontoStepIconRoot,
  StepLabelExt,
  StepperConnectorHorExt,
  StepperConnectorVerExt,
  StepperContentExt,
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
              <TypoExt sx={{ fontSize: '10rem' }}>1</TypoExt>
              <Typography variant='h4'>Project Discovery Call</Typography>
              <Typography variant='body1'>
                Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                bera i dibäs och anat. Vivyng dissa
              </Typography>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <TypoExt sx={{ fontSize: '10rem' }}>2</TypoExt>
              <Typography variant='h4'>Project Discovery Call</Typography>
              <Typography variant='body1'>
                Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                bera i dibäs och anat. Vivyng dissa
              </Typography>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <TypoExt sx={{ fontSize: '10rem' }}>3</TypoExt>
              <Typography variant='h4'>Project Discovery Call</Typography>
              <Typography variant='body1'>
                Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                bera i dibäs och anat. Vivyng dissa
              </Typography>
            </StepLabel>
            <StepperConnectorHorExt
              id='last'
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
              <Typography variant='h4'>Project Discovery Call</Typography>
              <Typography variant='body1'>
                Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                bera i dibäs och anat. Vivyng dissa
              </Typography>
            </StepLabelExt>
          </Step>
          <Step>
            <StepLabelExt>
              <Typography variant='h4'>Project Discovery Call</Typography>
              <Typography variant='body1'>
                Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                bera i dibäs och anat. Vivyng dissa
              </Typography>
            </StepLabelExt>
          </Step>
          <Step>
            <StepLabelExt>
              <Typography variant='h4'>Project Discovery Call</Typography>
              <Typography variant='body1'>
                Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev
                potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror
                bera i dibäs och anat. Vivyng dissa
              </Typography>
            </StepLabelExt>
          </Step>
          <StepperConnectorVerExt />
        </Stepper>
      </MHidden>
    </Box>
  );
};

export default HorizontalStepper;
