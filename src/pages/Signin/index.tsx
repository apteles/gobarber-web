import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import * as S from './styles';
import logoImage from '../../assets/logo.svg';

const Signin: React.FC = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Login>
          <S.Logo src={logoImage} alt="Gobarber" />

          <S.Form>
            <h1>Faça seu login</h1>

            <S.InputGroup>
              <FiMail />
              <input type="emai" placeholder="E-mail" />
            </S.InputGroup>

            <S.InputGroup>
              <FiLock />
              <input type="password" placeholder="Senha" />
            </S.InputGroup>

            <button type="submit">Entrar</button>

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
