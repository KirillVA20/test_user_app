import React from 'react';
import { Alert } from 'antd';
import { UsersLayout } from './users-layout';

interface UsersErrorProps {
  error?: Error | null;
}

export const UsersError: React.FC<UsersErrorProps> = ({ error }) => {
  return (
    <UsersLayout>
      <Alert
        message="Ошибка загрузки"
        description={error?.message || 'Не удалось загрузить список пользователей'}
        type="error"
        showIcon
      />
    </UsersLayout>
  );
};
