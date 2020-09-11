import styled from 'styled-components';
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
export const Login = styled.div`
  display: flex;
  flex-direction: column;

  width: 34rem;
`;
export const Logo = styled.img`
  margin-top: 12.9rem;
`;
export const Form = styled.form`
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
`;

export const InputGroup = styled.div`
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
