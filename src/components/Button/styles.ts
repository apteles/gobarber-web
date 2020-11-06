import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { ButtonProps } from '.';

export const Container = styled.button<ButtonProps>`
  margin-top: 1.7rem;
  height: 5.8rem;
  border-radius: 1rem;
  border: none;
  background: #ff9000;
  font-size: 1.6rem;
  color: #312e38;
  transition: background 500ms ease;

  width: 100%;
  height: 5.6rem;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      background: rgba(255, 140, 0, 0.8) !important;
      cursor: not-allowed !important;
    `}

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
