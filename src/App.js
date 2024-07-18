// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Sidebar from './components/Sidebar';
import Stage1 from './pages/Stage1';
import Stage2 from './pages/Stage2';
import Stage3 from './pages/Stage3';
import Stage4 from './pages/Stage4';
import Stage5 from './pages/Stage5';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import { lightTheme, darkTheme } from './themes';

function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router initialEntries={['/stage1']}>
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, height:'100vh', overflowY: 'scroll' }}
          >
            <IconButton
              sx={{ position: 'fixed', top: 16, right: 16 }}
              onClick={handleThemeToggle}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Routes>
            <Route path="/" element={<Stage1 />} />
              <Route path="/stage1" element={<Stage1 />} />
              <Route path="/stage2" element={<Stage2 />} />
              <Route path="/stage3" element={<Stage3 />} />
              <Route path="/stage4" element={<Stage4 />} />
              <Route path="/stage5" element={<Stage5 />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </Box>
          <Footer/>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
