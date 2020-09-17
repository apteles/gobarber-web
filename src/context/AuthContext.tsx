import React, { createContext, useCallback } from 'react';
import api from '../services/api';

export type CredentialsType = {
  email: string;
  password: string;
};

type AuthContextApp = {
  name: string;
  signIn(credentials: CredentialsType): Promise<void>;
};

export const AuthContext = createContext<AuthContextApp>({} as AuthContextApp);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });
    console.log(response);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'André', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
