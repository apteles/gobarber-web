import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import * as S from './styles';
import logoImage from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Signin: React.FC = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Login>
          <S.Logo src={logoImage} alt="Gobarber" />

          <S.Form>
            <h1>Faça seu login</h1>

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

            <Button type="submit">Entrar</Button>

            <a href="#/">Esqueci a senha</a>
          </S.Form>

          <S.Register>
            <FiLogIn />
            <a href="/">Criar conta</a>
          </S.Register>
        </S.Login>
      </S.Left>

      <S.Right />
    </S.Container>
  );
};

export default Signin;
