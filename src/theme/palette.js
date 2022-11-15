import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  main: '#29AAE3',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: '#000',
    secondary: '#343131',
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: '#E5E5E5',
    neutral: '#F0F5FD',
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
