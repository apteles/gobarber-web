import React, { InputHTMLAttributes, forwardRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  name: string;
  isFocused?: boolean;
  isFilled?: boolean;
  error?: string;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = (
  { icon, isFocused, isFilled, error, ...props },
  ref,
) => {
  return (
    <S.InputGroup
      isFocused={isFocused}
      hasError={!!error}
      isFilled={isFilled}
      hasIcon={!!icon}
    >
      {!!icon && icon}
      <input {...props} ref={ref} />

      {error && (
        <S.Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </S.Error>
      )}
    </S.InputGroup>
  );
};

export default forwardRef(Input);
