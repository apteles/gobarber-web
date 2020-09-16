import React from 'react';

import * as S from './styles';

type TooltipProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Tooltip = ({ title, className = '', children }: TooltipProps) => {
  return (
    <S.Container className={className}>
      {children}
      <span>{title}</span>
    </S.Container>
  );
};

export default Tooltip;
