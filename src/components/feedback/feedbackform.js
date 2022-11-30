import {
  Button,
  FormControl,
  Grid,
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

  // const [interest, setInterest] = useState(interestSubj[0].value);
  // const [budget, setBudget] = useState(userBudget[0].value);
  const [state, setState] = useState({ ...defaultState });

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setState((st) => ({ ...st, [e.target.name]: e.target.value }));
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
                value={state.interest}
                onChange={handleChange}
              >
                {interestSubj.map((el) => (
                  <MenuItem key={el.value} value={el.value}>
                    {el.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CustomFormControl>
        </Grid>
        <Grid item sm={12} md={6}>
          <CustomFormControl>
            <Typography variant='subtitle1'>Your budget?</Typography>
            <FormControl fullWidth>
              <Select
                name='budget'
                data-type='budget'
                value={state.budget}
                onChange={handleChange}
              >
                {userBudget.map((el) => (
                  <MenuItem key={el.value} value={el.value}>
                    {el.label}
                  </MenuItem>
                ))}
                {/* <MenuItem value={1}>$1000 - $1500</MenuItem>
                <MenuItem value={2}>$5000 - $2000</MenuItem> */}
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
