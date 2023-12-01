import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from '../src/style/theme/theme.js';
import {BrowserRouter,Routes,} from "react-router-dom"
import {ThemeProvider} from '@mui/material/style' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Routes path="/" element={<app/>}/>
        <Routes path="/oi" element={<h1>oi</h1>}/>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    <App />
  </React.StrictMode>
);
reportWebVitals();
