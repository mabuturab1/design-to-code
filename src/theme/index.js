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
          fontSize: 20,
          minWidth: '14rem',
          padding: '15px 10px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          backgroundColor: palette.background.neutral,
          paddingInline: '14px',

          '& textarea': {
            paddingInline: '14px',
          },
        },
      },
    },
  },
});
const theme = createTheme(themeOptions);

export default theme;
