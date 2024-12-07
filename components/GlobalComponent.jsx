import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import HeroSection from '../pages/home';

const GlobalComponent = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function to switch between dark and light mode
  const toggleTheme = (mode) => {
    setIsDarkMode(mode);
  };

  console.log(isDarkMode)
  // Memoized theme based on the dark mode state
  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: isDarkMode ? 'dark' : 'light',
        primary: {
          main: '#ff7101',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: isDarkMode ? '#121212' : '#f5f5f5', // Dark mode background
          paper: isDarkMode ? '#1e1e1e' : '#ffffff', // Paper background for cards
        },
        text: {
          primary: isDarkMode ? '#ffffff' : '#000000', // Text color for dark and light modes
        },
      },
       typography: {
        fontFamily: '"Montserrat", sans-serif', // Adding Montserrat font
      },
    }), [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {/* {children} */}
      <HeroSection />
    </ThemeProvider>
  );
};

GlobalComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalComponent;
