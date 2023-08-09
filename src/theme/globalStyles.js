// @mui
import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#__next': {
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          overflowY: 'auto',
          scrollBehavior: 'smooth',
          scrollPaddingTop: 50,
          overflowX: 'hidden',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        '.sectionGap': { marginBottom: '4rem' },
        '.dispFlexColAlgnCen': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        a: {
          cursor: 'pointer',
          textDecoration: 'none',
        },
        '.sectionMaxWid': {
          maxWidth: '37rem',
        },
        '.fullWidth': {
          width: '100%',
        },
      }}
    />
  );

  return inputGlobalStyles;
}
