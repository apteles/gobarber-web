import styled from 'styled-components';

export const Container = styled.div``;
export const Header = styled.header`
  padding: 3.2rem;
  background: #28262e;
`;
export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 8rem;
  }
  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 2rem;
      height: 2rem;
      transition: color 500ms;

      &:hover {
        color: #ff9000;
      }
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8rem;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.4rem;

    span {
      color: #f4ede8;
    }
    strong {
      color: #ff9000;
    }
  }
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 12rem;

  h1 {
    font-size: 3.6rem;
  }
  p {
    margin-top: 0.8rem;
    color: #ff9000;
    span + span {
      margin-left: 0.8rem;
      padding-left: 0.8rem;
      border-left: 1px solid #ff9000;
    }
  }
`;
export const NextAppointment = styled.div`
  margin-top: 64px;
  > strong {
    color: #999591;
    font-size: 2rem;
    font-weight: 400;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 1.6rem 2.4rem;
    border-radius: 1rem;
    margin-top: 2.4rem;
    position: relative;

    &:before {
      position: absolute;
      height: 80%;
      width: 0.5rem;
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      left: 0;
      top: 10%;
      content: '';
      background: #ff9000;
    }

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    strong {
      margin-left: 2.4rem;
      color: #fff;
    }
    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 0.8rem;
      }
    }
  }
`;
export const Calendar = styled.aside`
  width: 38rem;
`;
export const Content = styled.main`
  max-width: 1120px;
  margin: 6.4rem auto;
  display: flex;
`;
