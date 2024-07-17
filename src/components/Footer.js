// src/components/Footer.js
import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="body2">
        Copyright © 2024 National Institute of Technology Calicut
      </Typography>
      <a
        href="https://creativecommons.org/licenses/by-nc/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: '10px' }}
      >
        <img
          src="https://licensebuttons.net/l/by-nc/4.0/88x31.png"
          alt="Creative Commons License"
        />
      </a>
    </Box>
  );
};

export default Footer;
