import React from 'react';

import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  disable?: boolean;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'submit';
};

const Button: React.FC<ButtonProps> = ({
  children,
  disable = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Container disabled={disable} {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
