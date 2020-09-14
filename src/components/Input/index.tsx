import React, { InputHTMLAttributes } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
  name: string;
}

const Input: React.FC<InputProps> = ({ icon, ...props }: InputProps) => {
  return (
    <S.InputGroup hasIcon={!!icon}>
      {!!icon && icon}
      <input {...props} />
    </S.InputGroup>
  );
};

export default Input;
