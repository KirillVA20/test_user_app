import React from 'react';
import { Form, Spin } from 'antd';
import { Modal, Input } from '@/shared/ui';
import { useEditUserForm } from '../../model/use-edit-user-form';
import { EditUserModalFooter } from './edit-user-modal-footer';

interface EditUserModalProps {
  open: boolean;
  userId: string;
  onClose: () => void;
}

const nameRules = [
  { required: true, message: 'Пожалуйста, введите имя' },
  { min: 2, message: 'Имя должно содержать минимум 2 символа' },
];

const avatarRules = [
  { required: true, message: 'Пожалуйста, введите URL аватара' },
  { type: 'url' as const, message: 'Пожалуйста, введите корректный URL' },
  {
    pattern: /^https?:\/\/.+/,
    message: 'URL должен начинаться с http:// или https://',
  },
];

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
        <Form.Item label="ID">
          <Input value={user?.id} disabled />
        </Form.Item>

        <Form.Item name="name" label="Имя" rules={nameRules}>
          <Input placeholder="Введите имя" disabled={isLoading} />
        </Form.Item>

        <Form.Item name="avatar" label="Аватар (URL)" rules={avatarRules}>
          <Input
            placeholder="https://example.com/avatar.jpg"
            disabled={isLoading}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
