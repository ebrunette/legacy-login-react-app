import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material"


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme({
      palette: {mode: "dark"}
    })}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
