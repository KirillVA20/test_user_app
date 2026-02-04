import React from 'react';
import styled from 'styled-components';
import { Alert, Empty } from 'antd';
import { useUsers, UserCard } from '@/entities/user';
import { UsersLayout } from './ui';

const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

export const Users: React.FC = () => {
  const { data: users, isError, error } = useUsers();

  if (isError) {
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
  }

  if (!users || users.length === 0) {
    return (
      <UsersLayout>
        <Empty description="Пользователи не найдены" />
      </UsersLayout>
    );
  }

  return (
    <UsersLayout>
      <UsersGrid>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UsersGrid>
    </UsersLayout>
  );
};
