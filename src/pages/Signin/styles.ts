import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import backgroundImage from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Left = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
`;

export const Right = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;

  width: 34rem;

  animation: ${appearFromLeft} 1s;

  > form {
    display: flex;
    flex-direction: column;
    margin-top: 9.5rem;

    text-align: center;

    h1 {
      margin-bottom: 3.2rem;
      font-weight: 500;
      color: #f4ede8;
    }

    button {
      margin-top: 1.7rem;
      height: 5.8rem;
      border-radius: 1rem;
      border: none;
      background: #ff9000;
      font-size: 1.6rem;
      color: #312e38;
      transition: background 500ms ease;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }
    a {
      text-decoration: none;
      margin-top: 3.2rem;
      font-size: 1.6rem;
      color: #f4ede8;
    }
  }
`;
export const Logo = styled.img`
  margin-top: 12.9rem;
`;
export const Register = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 9.5rem;
  color: #ff9000;
  font-size: 1.6rem;

  > a {
    color: inherit;
    text-decoration: none;
    transform: color 500ms ease;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
  svg {
    margin-right: 1.2rem;
  }
`;
