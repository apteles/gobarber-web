import React, { InputHTMLAttributes, forwardRef } from 'react';

import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  name: string;
  isFocused?: boolean;
  isFilled?: boolean;
}

const Input: React.RefForwardingComponent<HTMLInputElement, InputProps> = (
  { icon, isFocused, isFilled, ...props },
  ref,
) => {
  console.log(isFocused);

  return (
    <S.InputGroup isFocused={isFocused} isFilled={isFilled} hasIcon={!!icon}>
      {!!icon && icon}
      <input {...props} ref={ref} />
    </S.InputGroup>
  );
};

export default forwardRef(Input);
