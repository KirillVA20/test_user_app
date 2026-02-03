import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Spin, Alert, Empty } from 'antd';
import { LogoutButton } from '@/features/auth';
import { useUsers, UserCard } from '@/entities/user';

const Container = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

export const Users: React.FC = () => {
  const navigate = useNavigate();
  const { data: users, isLoading, isError, error } = useUsers();

  const handleLogout = () => {
    navigate('/login');
  };

  if (isLoading) {
    return (
      <Container>
        <Header>
          <Title>Пользователи</Title>
          <LogoutButton type="primary" onSuccess={handleLogout} />
        </Header>
        <LoadingContainer>
          <Spin size="large" tip="Загрузка пользователей..." />
        </LoadingContainer>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Header>
          <Title>Пользователи</Title>
          <LogoutButton type="primary" onSuccess={handleLogout} />
        </Header>
        <Alert
          message="Ошибка загрузки"
          description={error?.message || 'Не удалось загрузить список пользователей'}
          type="error"
          showIcon
        />
      </Container>
    );
  }

  if (!users || users.length === 0) {
    return (
      <Container>
        <Header>
          <Title>Пользователи</Title>
          <LogoutButton type="primary" onSuccess={handleLogout} />
        </Header>
        <Empty description="Пользователи не найдены" />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Пользователи</Title>
        <LogoutButton type="primary" onSuccess={handleLogout} />
      </Header>
      <UsersGrid>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UsersGrid>
    </Container>
  );
};
