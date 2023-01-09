import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';

// Create a theme instance.
const themeOptions = createTheme({
  palette,
  typography,
  breakpoints,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          color: '#fff',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          color: `${palette.primary.dark} !important`,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          paddingInline: '10px',

          '& textarea': {
            paddingInline: '10px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});
const theme = createTheme(themeOptions);

export default theme;
