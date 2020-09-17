import React from 'react';
import './App.css';

import GlobalStyle from './styles/global';
import AuthContext from './context/AuthContext';
import Signin from './pages/Signin';
// import Signup from './pages/Signup';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthContext.Provider value={{ name: 'André' }}>
      <Signin />
    </AuthContext.Provider>
  </>
);

export default App;
