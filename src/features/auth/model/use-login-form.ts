import { Form } from 'antd';
import { useLogin } from './use-login';
import type { LoginCredentials } from '../api';

interface UseLogingForm {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export const useLoginForm = ({ onSuccess, onError }: UseLogingForm) => {
  const [form] = Form.useForm<LoginCredentials>();
  const { mutate: login, isPending, isError, error } = useLogin({ onSuccess, onError});

  const handleSubmit = (values: LoginCredentials) => {
    login(values);
  };

  const handleReset = () => {
    form.resetFields();
  };

  return {
    form,
    handleSubmit,
    handleReset,
    isLoading: isPending,
    isError,
    error,
  };
};
