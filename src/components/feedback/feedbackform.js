import {
  Button,
  FormControl,
  Grid,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { CustomFormControl, GridExt } from './styled';

const interestSubj = [
  { value: 'wd', label: 'Web Development' },
  { value: 'apd', label: 'Android App Development' },
  { value: 'wid', label: 'Windows App Development' },
];

const userBudget = [
  { value: 11, label: '$10 - $100' },
  { value: 12, label: '$100 - $500' },
  { value: 13, label: '$500 - $1000' },
  { value: 14, label: '$1000 - $1500' },
  { value: 15, label: '$1500 - $2000' },
];

export const Feedbackform = () => {
  const defaultState = {
    interest: interestSubj[0].value,
    budget: userBudget[0].value,
  };

  const [state, setState] = useState({ ...defaultState });

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setState((st) => ({ ...st, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <GridExt container spacing={5} mt={6}>
        <Grid item sm={12} md={12}>
          <CustomFormControl>
            <TextField
              name='name'
              value=''
              placeholder='Your name*'
              variant='outlined'
              fullWidth
            />
          </CustomFormControl>
        </Grid>
        <Grid item sm={12} md={12}>
          <CustomFormControl>
            <TextField
              name='email'
              type='email'
              value=''
              placeholder='Your Email*'
              variant='outlined'
              fullWidth
            />
          </CustomFormControl>
        </Grid>
        <Grid item sm={12} md={12}>
          <CustomFormControl>
            <TextField
              name='compName'
              value=''
              placeholder='Your company name*'
              variant='outlined'
              fullWidth
            />
          </CustomFormControl>
        </Grid>

        <Grid item sm={12}>
          <CustomFormControl>
            <TextField
              name='howHearAboutUs'
              value=''
              placeholder='How did you hear about us (optional)'
              variant='outlined'
            />
          </CustomFormControl>
        </Grid>
        <Grid item sm={12}>
          <CustomFormControl>
            <TextField
              name='message'
              value=''
              placeholder='Your Message'
              variant='outlined'
              multiline
              rows={7}
            />
          </CustomFormControl>
        </Grid>
        <Grid item sm={12} sx={{ textAlign: 'center' }}>
          <Button
            variant='contained'
            type='submit'
            // size='large'
            sx={{ width: '12rem', height: '3rem', fontSize: '1.2rem' }}
          >
            Send Message
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} sx={{ textAlign: 'center' }}>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ maxWidth: 350, marginInline: 'auto' }}
          >
            This site is protected by reCAPTCHA and the Google{' '}
            <Link href='/' color='inherit'>
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href='/' color='inherit'>
              Terms of Service
            </Link>{' '}
            apply.
          </Typography>
        </Grid>
      </GridExt>
    </form>
  );
};
