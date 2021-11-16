import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from './context/authContext';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
