import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <S.Container {...props}>{children}</S.Container>;
};

export default Button;
