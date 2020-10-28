import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import * as S from './styles';
import logoImage from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/InputForm';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { CredentialsType, useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/Toast';

const Signin: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const handleSubmit = useCallback(
    async ({ email, password }: CredentialsType) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha é obrigatório'),
        });
        await schema.validate({ email, password }, { abortEarly: false });

        await signIn({ email, password });
        history.push('/dashboard');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, cheque suas credenciais.',
        });
      }
    },
    [signIn, addToast, history],
  );

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

            <Link to="/forgot">Esqueci a senha</Link>
          </Form>

          <S.Register>
            <FiLogIn />
            <Link to="/signup">Criar conta</Link>
          </S.Register>
        </S.Login>
      </S.Left>

      <S.Right />
    </S.Container>
  );
};

export default Signin;
