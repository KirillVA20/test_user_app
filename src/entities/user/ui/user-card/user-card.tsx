import React, { useMemo } from 'react';
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import type { User } from '../../model/types';

dayjs.locale('ru');

const StyledCard = styled(Card)`
  &.ant-card {
    border-radius: 12px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      transform: translateY(-4px);
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const CreatedDate = styled.div`
  font-size: 14px;
  color: #888;
`;

interface UserCardProps {
  user: User;
  onClick?: (user: User) => void;
}

const formatDate = (dateString: string) => {
  return dayjs(dateString).format('D MMMM YYYY');
};

export const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  const date = useMemo(() => formatDate(user?.createdAt), [user?.createdAt])

  return (
    <StyledCard onClick={() => onClick?.(user)}>
      <CardContent>
        <Avatar
          size={64}
          src={user.avatar}
          icon={<UserOutlined />}
        />
        <UserInfo>
          <UserName>{user.name}</UserName>
          <CreatedDate>
            Зарегистрирован: {date}
          </CreatedDate>
        </UserInfo>
      </CardContent>
    </StyledCard>
  );
}