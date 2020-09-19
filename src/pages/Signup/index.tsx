import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import logoImage from '../../assets/logo.svg';
import { getValidationErrors } from '../../utils/getValidationErrors';
import Button from '../../components/Button';
import Input from '../../components/InputForm';
import api from '../../services/api';
import * as S from './styles';
import { useToast } from '../../context/Toast';

type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: SignupFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 caracteres'),
        });
        await schema.validate(data, { abortEarly: false });

        await api.post('/users', data);
        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no Gobarber',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro!',
          description:
            'Ocorreu um erro ao fazer seu cadastro, cheque suas informações.',
        });
      }
    },
    [addToast, history],
  );
  return (
    <S.Container>
      <S.Left>
        <S.Register>
          <S.Logo src={logoImage} alt="Gobarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input
              type="text"
              name="name"
              placeholder="Nome"
              icon={<FiUser />}
            />

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

            <Button type="submit">Registrar</Button>
          </Form>

          <S.Login>
            <FiArrowLeft />
            <Link to="/">Voltar para Login</Link>
          </S.Login>
        </S.Register>
      </S.Left>

      <S.Right />
    </S.Container>
  );
};

export default Signup;
