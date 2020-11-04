import React, { useRef, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import * as S from './styles';
import logoImage from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/InputForm';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { ForgotCredentialsType } from '../../context/AuthContext';
import { useToast } from '../../context/Toast';
import api from '../../services/api';

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isLoading, setLoading] = useState(false);
  const { addToast } = useToast();
  const handleSubmit = useCallback(
    async ({ email }: ForgotCredentialsType) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
        });
        await schema.validate({ email }, { abortEarly: false });

        // recuperação de senha aqui
        await api.post('/password/forgot', { email });
        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description:
            'Enviamos um e-mail para confirmar a recuperação de senha, cheque sua caixa de entrada',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação',
          description:
            'Ocorreu um erro ao fazer recuperar sua senha, cheque suas credenciais.',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <S.Container>
      <S.Left>
        <S.Login>
          <S.Logo src={logoImage} alt="Gobarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>

            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              icon={<FiMail />}
            />
            <Button loading={isLoading} type="submit">
              Recuperar
            </Button>
          </Form>

          <S.Register>
            <FiLogIn />
            <Link to="/">Voltar ao login</Link>
          </S.Register>
        </S.Login>
      </S.Left>

      <S.Right />
    </S.Container>
  );
};

export default ForgotPassword;
