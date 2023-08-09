import * as React from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { CardMedia, Stepper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { IconImage, ProjectDiscoveryImageWrapper, QontoConnector, QontoStepIconRoot, StepLabelExt, StepperConnectorHorExt, StepperConnectorVerExt, StepperExt, TypoExt } from './styled';
import { MHidden } from '../custom/MHidden';
import { ANIMATION_DURATION, getHVAnimationConfigs } from 'data';

function QontoStepIcon(props) {
  const { className } = props;
  return (
    <QontoStepIconRoot className={className}>
      <div className='QontoStepIcon-circle' />
    </QontoStepIconRoot>
  );
}
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const HorizontalStepper = () => {
  const renderContent = <React.Fragment></React.Fragment>;
  return (
    <Box mt={8} sx={{ width: '100%', overflow: 'hidden' }}>
      <MHidden type='down' value='md'>
        <StepperExt alternativeLabel connector={<QontoConnector />} orientation='horizontal'>
          <Step>
            <StepperConnectorHorExt id='first' sx={{ left: 'calc(0% + 8px)', right: 'calc(50% + 8px)' }}>
              <span />
            </StepperConnectorHorExt>

            <motion.div {...getHVAnimationConfigs({ y: 60, x: 0, opacity: 0 }, { y: 0, x: 0, opacity: 1 }, { delay: ANIMATION_DURATION.small })}>
              <ProjectDiscoveryImageWrapper>
                <IconImage component={'img'} image={'/static/images/research.svg'} />
              </ProjectDiscoveryImageWrapper>

              <Typography variant='h4'>Discovery Call</Typography>
              <Typography variant='body1'>
                We work closely with you and your team to understand your needs and objectives through collaborative sessions, delving into the project&apos;s core requirements, goals, and
                expectations.
              </Typography>
            </motion.div>
          </Step>
          <Step>
            <motion.div {...getHVAnimationConfigs({ y: 60, x: 0, opacity: 0 }, { y: 0, x: 0, opacity: 1 }, { delay: ANIMATION_DURATION.small })}>
              <ProjectDiscoveryImageWrapper>
                <IconImage component={'img'} image={'/static/images/mobile-app-development.svg'} />
              </ProjectDiscoveryImageWrapper>
              <Typography variant='h4'>Design and Development</Typography>
              <Typography variant='body1'>
                we brainstorm and conceptualize a user-friendly user interface, which we then bring to life using state-of-the-art tools to develop a fully functional product
              </Typography>
            </motion.div>
          </Step>
          <Step>
            <motion.div {...getHVAnimationConfigs({ y: 60, x: 0, opacity: 0 }, { y: 0, x: 0, opacity: 1 }, { delay: ANIMATION_DURATION.small })}>
              <ProjectDiscoveryImageWrapper>
                <IconImage component={'img'} image={'/static/images/rocket.svg'} />
              </ProjectDiscoveryImageWrapper>
              <Typography variant='h4'>Make it live</Typography>
              <Typography variant='body1'>
                Following the launch, we diligently track the app&apos;s performance using activity reporting tools and consistently enhance its functionality to provide users with an increasingly
                valuable experience.
              </Typography>
            </motion.div>
            <StepperConnectorHorExt sx={{ left: 'calc(50% + 8px)', right: 'calc(0% + 8px)' }}>
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
          }}>
          <Step>
            <StepLabelExt>
              <motion.div {...getHVAnimationConfigs({ opacity: 0 }, { opacity: 1 }, { delay: ANIMATION_DURATION.small })}>
                <Typography variant='h4'>Project Discovery Call</Typography>
                <Typography variant='body1'>
                  Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera i dibäs och anat. Vivyng dissa
                </Typography>
              </motion.div>
            </StepLabelExt>
          </Step>
          <Step>
            <StepLabelExt>
              <motion.div {...getHVAnimationConfigs({ opacity: 0 }, { opacity: 1 }, { delay: ANIMATION_DURATION.small })}>
                <Typography variant='h4'>Project Discovery Call</Typography>
                <Typography variant='body1'>
                  Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera i dibäs och anat. Vivyng dissa
                </Typography>
              </motion.div>
            </StepLabelExt>
          </Step>
          <Step>
            <StepLabelExt>
              <motion.div {...getHVAnimationConfigs({ opacity: 0 }, { opacity: 1 }, { delay: ANIMATION_DURATION.small })}>
                <Typography variant='h4'>Project Discovery Call</Typography>
                <Typography variant='body1'>
                  Mivinde bes, nynde prosat geober geotiligt. Proktigt ribev potrena. Prokror speprehet. Jåtegon kolåbång. Vasoskapet kror bera i dibäs och anat. Vivyng dissa
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
