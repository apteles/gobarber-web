import React from 'react';
import { render } from '@testing-library/react';
import InputForm from '../../components/InputForm';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});
describe('InputForm component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <InputForm name="email" placeholder="E-mail" />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
  });
});
