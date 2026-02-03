import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../api';
import type { LoginCredentials } from '../api';
import { useAuth } from '@/shared/lib/auth';

interface UseLogin {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export const useLogin = ({ onSuccess, onError }: UseLogin) => {
  const { setToken } = useAuth();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => loginApi(credentials),
    onSuccess: (data) => {
      setToken(data.token);
      onSuccess?.()
    },
    onError: (error: Error) => {
      onError?.(error)
    },
  });
};
