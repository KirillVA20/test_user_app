import { useState } from 'react';
import type { User } from '@/entities/user';

export const useUserModalsState = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>();

  const handleAddUser = () => {
    setCreateModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setSelectedUserId(user.id);
    setEditModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedUserId(undefined);
  };

  return {
    createModalOpen,
    editModalOpen,
    selectedUserId,
    handleAddUser,
    handleEditUser,
    handleCloseCreateModal,
    handleCloseEditModal,
  };
};
