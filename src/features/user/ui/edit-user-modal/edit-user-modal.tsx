import React from 'react';
import { Form, Spin } from 'antd';
import { Modal } from '@/shared/ui';
import { useEditUserForm } from '../../model/use-edit-user-form';
import { EditUserModalFooter } from './edit-user-modal-footer';
import { UserFormFields } from '../user-form-fields';

interface EditUserModalProps {
  open: boolean;
  userId: string;
  onClose: () => void;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  open,
  userId,
  onClose,
}) => {
  const { form, user, handleSubmit, handleDelete, isLoading, isDeleting } =
    useEditUserForm({
      open,
      userId,
      onSuccess: onClose,
    });

  if (!user) {
    return (
      <Modal
        open={open}
        title="Редактировать пользователя"
        onCancel={onClose}
        footer={null}
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <Spin />
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      open={open}
      title="Редактировать пользователя"
      onCancel={onClose}
      maskClosable={!isLoading}
      keyboard={!isLoading}
      footer={[
        <EditUserModalFooter
          isLoading={isLoading}
          isDeleting={isDeleting}
          onDelete={handleDelete}
          onCancel={onClose}
          onSubmit={() => form.submit()}
        />,
      ]}
    >
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <UserFormFields
          isLoading={isLoading}
          showId
          userId={user?.id}
        />
      </Form>
    </Modal>
  );
};
