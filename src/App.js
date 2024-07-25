import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import Stage6 from './pages/Stage6';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Introduction from './pages/Introduction';
import { lightTheme, darkTheme } from './themes';


function ScrollToTop() {
  const { pathname } = useLocation();
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <Box
      ref={boxRef}
      component="main"
      sx={{ flexGrow: 1, p: 3, height: '100vh', overflowY: 'scroll' }}
    >
      <Routes>
        <Route path="/" element={<Introduction/>} />
        <Route path="/stage1" element={<Stage1 />} />
        <Route path="/stage2" element={<Stage2 />} />
        <Route path="/stage3" element={<Stage3 />} />
        <Route path="/stage4" element={<Stage4 />} />
        <Route path="/stage5" element={<Stage5 />} />
        <Route path="/stage6" element={<Stage6 />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </Box>
  );
}

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
          <IconButton
            sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1100 }}
            onClick={handleThemeToggle}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <ScrollToTop />
          <Footer/>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
