import { useEffect } from 'react';
import { Form } from 'antd';
import { useCreateUser } from '@/entities/user';
import type { UserFormValues } from './types';

interface UseCreateUserFormParams {
  open: boolean;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useCreateUserForm = ({ open, onSuccess, onError }: UseCreateUserFormParams) => {
  const [form] = Form.useForm<UserFormValues>();
  const createMutation = useCreateUser();

  useEffect(() => {
    if (open) {
      form.resetFields();
    }
  }, [open, form]);

  const handleSubmit = (values: UserFormValues) => {
    createMutation.mutate(values, {
      onSuccess,
      onError,
    });
  };

  return {
    form,
    handleSubmit,
    isLoading: createMutation.isPending,
  };
};
