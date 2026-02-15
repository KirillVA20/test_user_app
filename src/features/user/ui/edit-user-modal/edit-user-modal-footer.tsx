import React from 'react';
import { Popconfirm } from 'antd';
import { Button } from '@/shared/ui';

interface EditUserModalFooterProps {
  isLoading: boolean;
  isDeleting: boolean;
  onDelete: () => void;
  onCancel: () => void;
  onSubmit: () => void;
}

export const EditUserModalFooter: React.FC<EditUserModalFooterProps> = ({
  isLoading,
  isDeleting,
  onDelete,
  onCancel,
  onSubmit,
}) => (
  <>
    <Popconfirm
      key="delete"
      title="Вы уверены?"
      description="Это действие нельзя отменить"
      onConfirm={onDelete}
      okText="Да"
      cancelText="Нет"
      disabled={isLoading}
    >
      <Button
        danger
        loading={isDeleting}
        disabled={isLoading && !isDeleting}
        style={{ float: 'left' }}
      >
        Удалить
      </Button>
    </Popconfirm>
    <Button key="cancel" onClick={onCancel} disabled={isLoading}>
      Отмена
    </Button>
    <Button
      key="submit"
      type="primary"
      loading={isLoading && !isDeleting}
      disabled={isDeleting}
      onClick={onSubmit}
    >
      Сохранить
    </Button>
  </>
);
