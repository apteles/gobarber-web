import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <S.Container {...props}>{loading ? 'Carregando...' : children}</S.Container>
  );
};

export default Button;
