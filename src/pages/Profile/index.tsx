import React, { ChangeEvent, useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { getValidationErrors } from '../../utils/getValidationErrors';
import Button from '../../components/Button';
import Input from '../../components/InputForm';
import api from '../../services/api';
import * as S from './styles';
import { useToast } from '../../context/Toast';
import { useAuth } from '../../context/AuthContext';

type ProfileFormData = {
  name: string;
  email: string;
  password: string;
};

const Profile: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const { user, updateUser } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
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

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const formData = new FormData();
        formData.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', formData).then(response => {
          updateUser(response.data);
          addToast({
            type: 'success',
            title: 'Avatar atualizado!',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  return (
    <S.Container>
      <S.Header>
        <Link to="/dashboard">
          <FiArrowLeft />
        </Link>
      </S.Header>
      <S.Content>
        <Form
          ref={formRef}
          initialData={{ name: user.name, email: user.email }}
          onSubmit={handleSubmit}
        >
          <S.AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </S.AvatarInput>

          <h1>Meu perfil</h1>
          <Input type="text" name="name" placeholder="Nome" icon={<FiUser />} />

          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            icon={<FiMail />}
          />

          <Input
            containerStyle={{ marginTop: '20px' }}
            type="password"
            name="password"
            placeholder="Nova senha"
            icon={<FiLock />}
          />

          <Input
            type="password"
            name="old_password"
            placeholder="Senha atual"
            icon={<FiLock />}
          />

          <Input
            type="password"
            name="password_confirmation"
            placeholder="Confirmação de senha"
            icon={<FiLock />}
          />

          <Button disabled type="submit">
            Confirmar mudanças
          </Button>
        </Form>
      </S.Content>
    </S.Container>
  );
};

export default Profile;
