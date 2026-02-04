import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LogoutButton } from '@/features/auth';

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

interface UsersLayoutProps {
  children: React.ReactNode;
}

export const UsersLayout: React.FC<UsersLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Container>
      <Header>
        <Title>Пользователи</Title>
        <LogoutButton type="primary" onSuccess={handleLogout} />
      </Header>
      {children}
    </Container>
  );
};
