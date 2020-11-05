/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

export type CredentialsType = {
  email: string;
  password: string;
};

export type ForgotCredentialsType = Omit<CredentialsType, 'password'>;

export type ResetCredentialsType = {
  password: string;
  password_confirmation: string;
};

type User = {
  id: string;
  avatar_url: string;
  name: string;
};

export type AuthState = {
  user: User;
  token: string;
};

type AuthContextApp = {
  user: User;
  signIn(credentials: CredentialsType): Promise<void>;
  signOut(): void;
};

export const AuthContext = createContext<AuthContextApp>({} as AuthContextApp);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@gobarber:token');
    const user = localStorage.getItem('@gobarber:user');
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });
    const { token, user } = response.data;
    localStorage.setItem('@gobarber:token', token);
    localStorage.setItem('@gobarber:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@gobarber:token');
    localStorage.removeItem('@gobarber:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextApp {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
