import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from '@/shared/ui';

interface AddUserButtonProps {
  onClick: () => void;
}

export const AddUserButton: React.FC<AddUserButtonProps> = ({ onClick }) => (
  <Button type="primary" icon={<PlusOutlined />} onClick={onClick}>
    Добавить нового юзера
  </Button>
);
