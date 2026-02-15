import React from 'react';
import { Form } from 'antd';
import { Input } from '@/shared/ui';
import { nameRules, avatarRules } from '../../model/validation';

interface UserFormFieldsProps {
  isLoading?: boolean;
  showId?: boolean;
  userId?: string;
}

export const UserFormFields: React.FC<UserFormFieldsProps> = ({
  isLoading = false,
  showId = false,
  userId,
}) => {
  return (
    <>
      {showId && (
        <Form.Item label="ID">
          <Input value={userId} disabled />
        </Form.Item>
      )}

      <Form.Item name="name" label="Имя" rules={nameRules}>
        <Input placeholder="Введите имя" disabled={isLoading} />
      </Form.Item>

      <Form.Item name="avatar" label="Аватар (URL)" rules={avatarRules}>
        <Input
          placeholder="https://example.com/avatar.jpg"
          disabled={isLoading}
        />
      </Form.Item>
    </>
  );
};
