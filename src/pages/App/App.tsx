import React from 'react';
import './App.css';
import Home from '../Home/home';
import logo from '../../assets/icons/logo.svg';
import { Container, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  )
    
  }
export default App;