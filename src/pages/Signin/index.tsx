import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import * as S from './styles';
import logoImage from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/InputForm';
import { getValidationErrors } from '../../utils/getValidationErrors';

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha é obrigatório'),
      });
      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      formRef.current?.setErrors(getValidationErrors(error));
    }
  }, []);

  return (
    <S.Container>
      <S.Left>
        <S.Login>
          <S.Logo src={logoImage} alt="Gobarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input
              type="email"
              name="email"
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
          </Form>

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
