import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './store/theme.context';
import { CountriesProvider } from './store/countries.context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
