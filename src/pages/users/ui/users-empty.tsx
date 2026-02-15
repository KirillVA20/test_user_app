import React from 'react';
import { Empty } from 'antd';
import { AddUserButton, CreateUserModal } from '@/features/user';
import { UsersLayout } from './users-layout';
import { useUserModalsState } from '../model';

export const UsersEmpty: React.FC = () => {
  const { createModalOpen, handleAddUser, handleCloseCreateModal } =
    useUserModalsState();

  return (
    <UsersLayout headerAction={<AddUserButton onClick={handleAddUser} />}>
      <Empty description="Пользователи не найдены" />
      <CreateUserModal
        open={createModalOpen}
        onClose={handleCloseCreateModal}
      />
    </UsersLayout>
  );
};
