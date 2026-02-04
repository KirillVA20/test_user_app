import React from 'react';
import styled from 'styled-components';
import { LoginForm } from '@/features/auth';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const onSuccess = () => {
    notification.success({
      message: 'Успешная авторизация',
      description: 'Добро пожаловать!',
    });
    navigate('/users');
  }

  const onError = (error: Error) => {
    notification.error({
      message: 'Ошибка авторизации',
      description: error.message,
    });
  }

  return (
    <LoginContainer>
      <LoginForm onSuccess={onSuccess} onError={onError} />
    </LoginContainer>
  );
};
