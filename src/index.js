import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import theme from './style/theme/meutheme'
import {BrowserRouter,Routes,Route} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <BrowserRouter>
      <Routes>
        <Routes path="/" element={<app/>}/>
        <Routes path="/oi" element={<h1>oi</h1>}/>
      </Routes>
      </BrowserRouter>
    {/* </ThemeProvider> */}
    <App />
  </React.StrictMode>
);
reportWebVitals();
