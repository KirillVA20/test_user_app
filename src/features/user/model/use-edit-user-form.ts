import { useEffect } from 'react';
import { Form } from 'antd';
import { useUser, useUpdateUser, useDeleteUser } from '@/entities/user';
import type { UserFormValues } from './types';

interface UseEditUserFormParams {
  open: boolean;
  userId: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useEditUserForm = ({ open, userId, onSuccess, onError }: UseEditUserFormParams) => {
  const [form] = Form.useForm<UserFormValues>();
  const { data: user, isLoading: isUserLoading } = useUser(userId);
  const updateMutation = useUpdateUser();
  const deleteMutation = useDeleteUser();

  useEffect(() => {
    if (open && user) {
      form.setFieldsValue({
        name: user.name,
        avatar: user.avatar,
      });
    }
  }, [open, user, form]);

  const handleSubmit = (values: UserFormValues) => {
    if (user) {
      updateMutation.mutate({ id: user.id, ...values }, {
        onSuccess,
        onError,
      });
    }
  };

  const handleDelete = () => {
    if (user) {
      deleteMutation.mutate(user.id, {
        onSuccess,
        onError,
      });
    }
  };

  return {
    form,
    user,
    handleSubmit,
    handleDelete,
    isLoading: isUserLoading || updateMutation.isPending || deleteMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};
