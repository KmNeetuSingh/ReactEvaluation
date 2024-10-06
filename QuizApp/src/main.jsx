import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App.jsx';
import store from './redux/store.jsx';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <Provider store={store}>
    <ChakraProvider>
    <Router>  
      <App />
    </Router>
    </ChakraProvider>
  </Provider>
);
