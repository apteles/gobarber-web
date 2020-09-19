/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

export type ToastMessage = {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
};

type ToastContextApp = {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
};

export const ToastContext = createContext<ToastContextApp>(
  {} as ToastContextApp,
);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  const addToast = useCallback(({ title, type, description }) => {
    const id = uuid();
    const toast = {
      id,
      title,
      type,
      description,
    };

    setMessages(previosState => [...previosState, toast]);
  }, []);
  const removeToast = useCallback((id: string) => {
    setMessages(previosState => previosState.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
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
