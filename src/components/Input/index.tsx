import React, { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  name: string;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = (
  { icon, ...props },
  ref,
) => {
  return (
    <S.InputGroup hasIcon={!!icon}>
      {!!icon && icon}
      <input {...props} ref={ref} />
    </S.InputGroup>
  );
};

export default forwardRef(Input);
