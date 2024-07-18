// src/themes.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    link: {
      main: '#4caf50', // Green color
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: '#4caf50', // Green color
          '&:hover': {
            color: '#81c784', // Lighter green for hover state
          },
        },
      },
    },
  },
});