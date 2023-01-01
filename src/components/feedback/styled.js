import { Grid, styled, Typography } from '@mui/material';

export const CustomFormControl = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%',
}));
export const GridExt = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('600')]: {
    '& .MuiGrid-item': {
      flexBasis: '100%',
    },
  },
}));
export const TypographyExt = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
  [theme.breakpoints.up('dm')]: {
    textAlign: 'start',
  },
}));
