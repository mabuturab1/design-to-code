import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import palette from './palette';
import typography from './typography';
import ButtonOverride from './ButtonOverride';

// Create a theme instance.
const themeOptions = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          color: '#fff',
          boxShadow: 'none',
        },
      },
    },
  },
});
const theme = createTheme(themeOptions);

export default theme;
