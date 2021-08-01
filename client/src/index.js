import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom';
import theme from './helper/theme.js'
ReactDOM.render(
  <BrowserRouter>
  <ChakraProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

