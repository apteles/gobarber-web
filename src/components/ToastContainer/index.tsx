import React from 'react';
import * as S from './styles';
import { ToastMessage } from '../../context/Toast';
import Toast from './Toast';

type ToastProps = {
  messages: ToastMessage[];
};
const ToastContainer: React.FC<ToastProps> = ({ messages }) => {
  return (
    <S.Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
