import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './index.styled';
import { theme } from './theme/Theme';
import { ThemeProvider } from 'styled-components';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router basename={process.env.PUBLIC_URL}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <App />
        </GoogleOAuthProvider>
      </Router >
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();