import React from 'react';
import { Form } from 'antd';
import { Modal, Button, Input } from '@/shared/ui';
import { useCreateUserForm } from '../../model/use-create-user-form';

interface CreateUserModalProps {
  open: boolean;
  onClose: () => void;
}

const nameRules = [
  { required: true, message: 'Пожалуйста, введите имя' },
  { min: 2, message: 'Имя должно содержать минимум 2 символа' },
];

const avatarRules = [
  { required: true, message: 'Пожалуйста, введите URL аватара' },
  { type: 'url' as const, message: 'Пожалуйста, введите корректный URL' },
  { pattern: /^https?:\/\/.+/, message: 'URL должен начинаться с http:// или https://' },
];

export const CreateUserModal: React.FC<CreateUserModalProps> = ({ open, onClose }) => {
  const { form, handleSubmit, isLoading } = useCreateUserForm({ open, onSuccess: onClose });

  return (
    <Modal
      open={open}
      title="Добавить пользователя"
      onCancel={onClose}
      maskClosable={!isLoading}
      keyboard={!isLoading}
      footer={[
        <Button key="cancel" onClick={onClose} disabled={isLoading}>
          Отмена
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={isLoading}
          onClick={() => form.submit()}
        >
          Создать
        </Button>,
      ]}
    >
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item name="name" label="Имя" rules={nameRules}>
          <Input placeholder="Введите имя" disabled={isLoading} />
        </Form.Item>

        <Form.Item name="avatar" label="Аватар (URL)" rules={avatarRules}>
          <Input placeholder="https://example.com/avatar.jpg" disabled={isLoading} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
