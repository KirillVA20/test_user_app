import React from 'react';
import { Form } from 'antd';
import styled from 'styled-components';
import { Button, Input } from '@/shared/ui';
import { useLoginForm } from '../../model';

const LoginCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  color: #333;
  font-size: 28px;
  font-weight: 600;
`;

const ErrorBlock = styled.div`
  background-color: #fff2f0;
  border: 1px solid #ffccc7;
  border-radius: 6px;
  padding: 12px 16px;
  color: #ff4d4f;
  margin-top: 16px;
`;

interface LoginFormProps {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

const usernameRules = [{ required: true, message: 'Пожалуйста, введите логин' }]
const passwordRules = [{ required: true, message: 'Пожалуйста, введите пароль' }]

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, onError }) => {
  const { form, handleSubmit, handleReset, isLoading, isError, error } = useLoginForm({ onSuccess, onError });

  return (
    <LoginCard>
      <Title>Вход в систему</Title>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="username"
          rules={usernameRules}
        >
          <Input placeholder="Логин" size="large" disabled={isLoading} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={passwordRules}
        >
          <Input.Password
            placeholder="Пароль"
            size="large"
            disabled={isLoading}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            block
          >
            {isLoading ? 'Вход...' : 'Войти'}
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="button"
            size="large"
            onClick={handleReset}
            disabled={isLoading}
            block
          >
            Сбросить
          </Button>
        </Form.Item>
      </Form>

      {isError && error && <ErrorBlock>{error.message}</ErrorBlock>}
    </LoginCard>
  );
};
