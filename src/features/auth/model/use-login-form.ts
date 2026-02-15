import { Form } from 'antd';
import type { LoginCredentials } from '../api';

interface UseLogingForm {
  onLogin: (values: LoginCredentials) => void;
}

export const useLoginForm = ({ onLogin }: UseLogingForm) => {
  const [form] = Form.useForm<LoginCredentials>();

  const handleSubmit = (values: LoginCredentials) => {
    onLogin?.(values);
  };

  const handleReset = () => {
    form.resetFields();
  };

  return {
    form,
    handleSubmit,
    handleReset,
  };
};
