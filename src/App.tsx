import React from 'react';
import './App.css';

import GlobalStyle from './styles/global';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Signup />
  </>
);

export default App;
