import React from 'react';
import { useTransition } from 'react-spring';
import * as S from './styles';
import { ToastMessage } from '../../context/Toast';
import Toast from './Toast';

type ToastProps = {
  messages: ToastMessage[];
};
const ToastContainer: React.FC<ToastProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: {
        right: '-120%',
        opacity: '0',
      },
      enter: { right: '0%', opacity: '1' },
      leave: { right: '-120%', opacity: '0' },
    },
  );
  return (
    <S.Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
