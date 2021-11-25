import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/authContext';
import './index.scss';

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
