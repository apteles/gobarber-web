import React from 'react';
import './App.css';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Signin />
  </>
);

export default App;
