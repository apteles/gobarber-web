import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 16rem;
    background: #ff9000;
    padding: 0.8rem;
    border-radius: 4px;
    font-size: 1.4rem;
    font-weight: 500;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 0.6rem 0.6rem 0 0.6rem;
      top: 100%;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
