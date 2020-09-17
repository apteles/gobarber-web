import React from 'react';
import './App.css';

import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';
import Signin from './pages/Signin';
// import Signup from './pages/Signup';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <Signin />
    </AuthProvider>
  </>
);

export default App;
