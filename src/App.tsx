import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import AppProvider from './context';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;
