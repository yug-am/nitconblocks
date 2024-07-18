// src/themes.js
import { createTheme } from '@mui/material/styles';
import { colors } from './Colors';
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    link: {
      main:  colors.green, // Green color
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: colors.green, // Green color
          '&:hover': {
            color: colors.lightGreen, // Lighter green for hover state
          },
        },
      },
    },
  },
});