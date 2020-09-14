import styled from 'styled-components';

type InputStyle = {
  hasIcon?: boolean;
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
