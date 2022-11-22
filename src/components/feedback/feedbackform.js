import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { CustomFormControl, GridExt } from './styled';

export const Feedbackform = () => {
  const handleSubmit = () => {
    console.log('Form Submitted');
  };
  return (
    <form onSubmit={handleSubmit}>
      <GridExt container spacing={5} mt={6}>
        <Grid item sm={12} md={6}>
          <CustomFormControl>
            <Typography variant='subtitle1'>Name</Typography>
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
            <Typography variant='subtitle1'>Your Email</Typography>
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
            <Typography variant='subtitle1'>
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
            <Typography variant='subtitle1'>Your budget?</Typography>
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
            <Typography variant='subtitle1'>Message</Typography>
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
          <Button variant='contained' type='submit'>
            Send Message
          </Button>
        </Grid>
      </GridExt>
    </form>
  );
};
