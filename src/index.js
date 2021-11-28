import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './components/generic/theme';
import { AuthProvider } from './context/authContext';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <AuthProvider>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <App />
            </AuthProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
