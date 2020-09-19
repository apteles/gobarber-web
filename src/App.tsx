import React from 'react';
import './App.css';

import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';
import Signin from './pages/Signin';
import ToastContainer from './components/ToastContainer';
// import Signup from './pages/Signup';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <Signin />
    </AuthProvider>
    <ToastContainer />
  </>
);

export default App;
