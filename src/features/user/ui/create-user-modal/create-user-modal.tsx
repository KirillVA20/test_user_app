import React from 'react';
import { Form } from 'antd';
import { Modal, Button } from '@/shared/ui';
import { useCreateUserForm } from '../../model/use-create-user-form';
import { UserFormFields } from '../user-form-fields';

interface CreateUserModalProps {
  open: boolean;
  onClose: () => void;
}

export const CreateUserModal: React.FC<CreateUserModalProps> = ({
  open,
  onClose,
}) => {
  const { form, handleSubmit, isLoading } = useCreateUserForm({
    open,
    onSuccess: onClose,
  });

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
        <UserFormFields isLoading={isLoading} />
      </Form>
    </Modal>
  );
};
