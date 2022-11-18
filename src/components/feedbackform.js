import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { BackIllustration, SectionRoot } from './CustomComp';

const CustomFormControl = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%',
}));

const GridExt = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('600')]: {
    '& .MuiGrid-item': {
      flexBasis: '100%',
    },
  },
}));

const Feedbackform = () => {
  return (
    <SectionRoot>
      <Box position='relative'>
        <Typography
          variant='h2'
          gutterBottom
          sx={{ textAlign: { sm: 'center', md: 'left' } }}
        >
          Love to hear from you. <br />
          Get in Touch
        </Typography>
        <BackIllustration>
          <picture>
            <img
              src='/static/images/dots.svg'
              height='100%'
              width='100%'
              alt='Landscape picture'
            />
          </picture>
        </BackIllustration>
      </Box>
      <Typography
        variant='body1'
        color='textSecondary'
        fullWidth
        sx={{ textAlign: { sm: 'center', md: 'left' } }}
      >
        Lörem ipsum georening buköska vaben. Dögyns eurong. Povisovis josm,
        emedan semis. Härat rär par.
      </Typography>

      <GridExt container spacing={5} mt={6}>
        <Grid item sm={12} md={6}>
          <CustomFormControl>
            <Typography variant='subtitle1' fullWidth>
              Name
            </Typography>
            <TextField
              name='name'
              value=''
              placeholder='Name'
              variant='outlined'
              fullWidth
            />
          </CustomFormControl>
        </Grid>
        <Grid item sm={12} md={6}>
          <CustomFormControl>
            <Typography variant='subtitle1' fullWidth>
              Your Email
            </Typography>
            <TextField
              name='email'
              type='email'
              value=''
              placeholder='Your Email'
              variant='outlined'
              fullWidth
            />
          </CustomFormControl>
        </Grid>
        <Grid item sm={12} md={6}>
          <CustomFormControl>
            <Typography variant='subtitle1' fullWidth>
              What are you interested in?
            </Typography>
            <FormControl fullWidth>
              <Select
                name='interest'
                value='wd'
                // label='Age'
                // onChange={handleChange}
              >
                <MenuItem value='wd'>Web Development</MenuItem>
                <MenuItem value='apd'>Android App Development</MenuItem>
                <MenuItem value='wad'>Windows App Development</MenuItem>
              </Select>
            </FormControl>
          </CustomFormControl>
        </Grid>
        <Grid item sm={12} md={6}>
          <CustomFormControl>
            <Typography variant='subtitle1' fullWidth>
              Your budget?
            </Typography>
            <FormControl fullWidth>
              <Select name='budget' value={0}>
                <MenuItem value={0}>$500 - $1000</MenuItem>
                <MenuItem value={1}>$1000 - $1500</MenuItem>
                <MenuItem value={2}>$5000 - $2000</MenuItem>
              </Select>
            </FormControl>
          </CustomFormControl>
        </Grid>
        <Grid item sm={12}>
          <CustomFormControl>
            <Typography variant='subtitle1' fullWidth>
              Message
            </Typography>
            <TextField
              name='message'
              value=''
              placeholder='Message'
              variant='outlined'
              multiline
              rows={7}
            />
          </CustomFormControl>
        </Grid>
        <Grid item sm={12} sx={{ textAlign: 'right' }}>
          <Button variant='contained'>Send Message</Button>
        </Grid>
      </GridExt>
    </SectionRoot>
  );
};

export default Feedbackform;
