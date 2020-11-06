import styled from 'styled-components';
import { shade } from 'polished';
import backgroundImage from '../../assets/register-background.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  background: #28262e;
  width: 100%;
  height: 14.4rem;
  display: flex;
  align-items: center;

  > a {
    margin-left: 36.5rem;
    font-size: 3rem;
    color: #999591;
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  margin: -15rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > form {
    width: 40rem;
    display: flex;
    flex-direction: column;
    margin-top: 9.5rem;

    text-align: center;

    h1 {
      font-size: 2rem;
      text-align: left;
      margin-bottom: 3.2rem;
      font-weight: 500;
      color: #f4ede8;
    }

    input[type='file'] {
      display: none;
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
  }
`;
export const Right = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
`;

export const Logo = styled.img`
  margin-top: 12.9rem;
`;

export const AvatarInput = styled.div`
  margin-bottom: 3.2rem;
  width: 18.6rem;
  align-self: center;
  position: relative;
  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }
  > label {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 4.8rem;
    height: 4.8rem !important;
    border-radius: 50% !important;
    border: none;
    background-color: #ff9000;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #28262e;
    cursor: pointer;
  }
`;
