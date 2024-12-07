import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
// import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import { Container } from '@mui/material'

const Header = ({ isDarkMode, toggleTheme }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))


  // Create custom themes
  const currentTheme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#f50057',
      },
    },
  })

  return (
    <ThemeProvider theme={currentTheme}>
      
        <AppBar position="relative" sx={{boxShadow:"none"}}>
        <Container disableGutters>
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Experteaze
          </Typography>

          {/* Navigation Links */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit">Services</Button>
              <Button color="inherit">About Us</Button>
            </Box>
          ) : (
            <></>
          )}

          {/* Theme Toggle Switch */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            
            <Switch checked={isDarkMode} onChange={()=>toggleTheme(!isDarkMode)} />
            <Typography variant="body2" sx={{ marginRight: 1 }}>
              {isDarkMode ? 'Dark' : 'Light'}
            </Typography>
          </Box>

          {/* Login Button */}
          <Button
            variant="contained"
            color="secondary"
            sx={{
              marginLeft: { sm: '0', md: '2' },
              color: 'white',
            }}
          >
            Login
          </Button>
        </Toolbar>
        </Container>
      </AppBar>
      
      
    </ThemeProvider>
  )
}

export default Header
