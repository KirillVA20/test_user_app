import React from 'react';
import { useUsers } from '@/entities/user';
import { UsersError, UsersEmpty, UsersList } from './ui';

export const Users: React.FC = () => {
  const { data: users, isError, error } = useUsers();

  if (isError) {
    return <UsersError error={error} />;
  }

  if (!users?.length) {
    return <UsersEmpty />;
  }

  return <UsersList users={users} />;
};
