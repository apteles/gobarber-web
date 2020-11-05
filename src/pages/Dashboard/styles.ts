import styled from 'styled-components';
import { shade } from 'polished';

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

  .DayPicker {
    border-radius: 10px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 10px;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
    top: 1.6rem;
    right: 1.5rem;
  }

  .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5rem;
    margin-right: 0;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    /* margin-bottom: 1rem;
    padding: 0 1rem; */

    color: #f4ede8;

    > div {
      text-align: center;
      font-size: 1.6rem;
    }
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
    font-size: 1.6rem;
  }

  .DayPicker-Weekday {
    font-size: 1.6rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
export const Content = styled.main`
  max-width: 1120px;
  margin: 6.4rem auto;
  display: flex;
`;

export const Section = styled.section`
  margin-top: 4.8rem;
  > strong {
    color: #999591;
    font-size: 2rem;
    line-height: 2.6rem;
    display: block;
    border-bottom: 1px solid #3e3b47;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
  }
  > p {
    color: #999591;
  }
`;
export const Appointment = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: auto;
    display: flex;
    align-items: center;
    color: #f4ede8;

    svg {
      color: #ff9000;
      margin-right: 0.8rem;
    }
  }

  & + div {
    margin-top: 1.6rem;
  }

  div {
    flex: 1;
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 1.6rem 2.4rem;
    border-radius: 1rem;
    margin-left: 2.4rem;
    position: relative;

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }

    strong {
      margin-left: 2.4rem;
      color: #fff;
      font-size: 2rem;
    }
  }
`;
