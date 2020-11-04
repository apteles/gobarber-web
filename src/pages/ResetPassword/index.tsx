import React, { useRef, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import * as S from './styles';
import logoImage from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/InputForm';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { ResetCredentialsType } from '../../context/AuthContext';
import { useToast } from '../../context/Toast';
import api from '../../services/api';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const handleSubmit = useCallback(
    async ({ password, password_confirmation }: ResetCredentialsType) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().required('Senha é obrigatório'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Senhas não conferem',
          ),
        });
        await schema.validate(
          { password_confirmation, password },
          { abortEarly: false },
        );

        const token = location.search.replace('?token=', '');

        if (!token) {
          throw new Error('');
        }

        await api.post('password/reset', {
          password,
          password_confirmation,
          token,
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao redefinir a senha',
          description:
            'Ocorreu um erro ao redefinir a senha, cheque suas credenciais.',
        });
      }
    },
    [location, addToast, history],
  );

  return (
    <S.Container>
      <S.Left>
        <S.Login>
          <S.Logo src={logoImage} alt="Gobarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Redefinir Senha</h1>

            <Input
              type="password"
              name="password"
              placeholder="Senha"
              icon={<FiLock />}
            />

            <Input
              type="password"
              name="password_confirmation"
              placeholder="Confirme sua Senha"
              icon={<FiLock />}
            />

            <Button type="submit">Alterar senha</Button>
          </Form>
        </S.Login>
      </S.Left>

      <S.Right />
    </S.Container>
  );
};

export default ResetPassword;
