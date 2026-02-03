import { useAuth } from '@/shared/lib/auth';

interface UseLogout {
  onSuccess?: () => void
}

export const useLogout = ({ onSuccess }: UseLogout = {}) => {
  const { removeToken } = useAuth();

  const handleLogout = () => {
    removeToken();
    onSuccess?.();
  };

  return {
    logout: handleLogout,
  };
};
