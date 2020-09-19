import React from 'react';
import './App.css';

import GlobalStyle from './styles/global';
import AppProvider from './context';
import Signin from './pages/Signin';

// import Signup from './pages/Signup';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppProvider>
      <Signin />
    </AppProvider>
  </>
);

export default App;
