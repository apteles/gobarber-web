import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Signin from '../../pages/Signin';

jest.mock('react-router-dom', () => {
  return {
    useHistory: jest.fn(),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});
describe('Signin Page', () => {
  it('should be able to sign in', () => {
    render(<Signin />);

    // const emailField = getByPlaceholderText('E-mail');
    // const passwordField = getByPlaceholderText('Senha');
  });
});
