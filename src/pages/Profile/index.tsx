import React, { ChangeEvent, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  old_password: string;
  password_confirmation: string;
};

const Profile: React.FC = () => {
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
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: val => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf(
              [Yup.ref('password'), undefined],
              'Confirmação de senha incorreta',
            ),
        });
        await schema.validate(data, { abortEarly: false });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);
        updateUser(response.data);

        addToast({
          type: 'success',
          title: 'Atualizado realizado!',
          description: 'Senhas atualizadas com sucesso.',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização!',
          description:
            'Ocorreu um erro ao atualizar o perfil. Entre em contato com suporte.',
        });
      }
    },
    [addToast, updateUser],
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
            type="password"
            name="old_password"
            placeholder="Senha atual"
            icon={<FiLock />}
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
            name="password_confirmation"
            placeholder="Confirmação de senha"
            icon={<FiLock />}
          />

          <Button type="submit">Confirmar mudanças</Button>
        </Form>
      </S.Content>
    </S.Container>
  );
};

export default Profile;
