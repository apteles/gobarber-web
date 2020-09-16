import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

type InputStyle = {
  hasIcon?: boolean;
  isFocused?: boolean;
  isFilled?: boolean;
  hasError?: boolean;
};
export const InputGroup = styled.div<InputStyle>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5.8rem;
  margin-bottom: 0.8rem;
  border-radius: 1rem;
  background: #232129;

  padding: 2rem 0 2rem 1.8rem;
  border: 2px solid transparent;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: #c53030;
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      > svg {
        color: #ff9000 !important;
      }

      border-color: #ff9000 !important;
    `}
  ${({ isFilled }) =>
    isFilled &&
    css`
      > svg {
        color: #ff9000 !important;
      }
    `}


  > input {
    width: 100%;
    border: none;
    background: transparent;
    color: #666360;
  }
  > svg {
    color: #666360;
    margin-right: 1.3em;
  }
`;

export const Error = styled(Tooltip)`
  margin-right: 1.6rem;
  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
