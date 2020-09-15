import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import logoImage from '../../assets/logo.svg';

import Button from '../../components/Button';
// import Input from '../../components/Input';
import Input from '../../components/InputForm';

import * as S from './styles';

const Signup: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }
  return (
    <S.Container>
      <S.Left>
        <S.Register>
          <S.Logo src={logoImage} alt="Gobarber" />

          <Form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input
              type="text"
              name="name"
              placeholder="Nome"
              icon={<FiUser />}
            />

            <Input
              type="email"
              name="login"
              placeholder="E-mail"
              icon={<FiMail />}
            />

            <Input
              type="password"
              name="password"
              placeholder="Senha"
              icon={<FiLock />}
            />

            <Button type="submit">Registrar</Button>
          </Form>

          <S.Login>
            <FiArrowLeft />
            <a href="/">Voltar para Login</a>
          </S.Login>
        </S.Register>
      </S.Left>

      <S.Right />
    </S.Container>
  );
};

export default Signup;
