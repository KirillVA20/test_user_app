import React from 'react';
import styled from 'styled-components';
import { UserCard, type User } from '@/entities/user';
import { AddUserButton, CreateUserModal, EditUserModal } from '@/features/user';
import { UsersLayout } from './users-layout';
import { useUserModalsState } from '../model';

const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

interface UsersListProps {
  users: User[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const {
    createModalOpen,
    editModalOpen,
    selectedUserId,
    handleAddUser,
    handleEditUser,
    handleCloseCreateModal,
    handleCloseEditModal,
  } = useUserModalsState();

  return (
    <UsersLayout headerAction={<AddUserButton onClick={handleAddUser} />}>
      <UsersGrid>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onClick={handleEditUser} />
        ))}
      </UsersGrid>
      <CreateUserModal open={createModalOpen} onClose={handleCloseCreateModal} />
      {selectedUserId && (
        <EditUserModal open={editModalOpen} userId={selectedUserId} onClose={handleCloseEditModal} />
      )}
    </UsersLayout>
  );
};
