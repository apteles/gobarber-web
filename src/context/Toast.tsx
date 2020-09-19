/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useContext, useState } from 'react';
import ToastContainer from '../components/ToastContainer';

type ToastContextApp = {
  addToast(): void;
  removeToast(): void;
};

export const ToastContext = createContext<ToastContextApp>(
  {} as ToastContextApp,
);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToas');
  }, []);
  const removeToast = useCallback(() => {
    console.log('removeToas');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextApp {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a AuthProvider');
  }
  return context;
}
