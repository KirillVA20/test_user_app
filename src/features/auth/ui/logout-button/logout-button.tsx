import React from 'react';
import { Button } from '@/shared/ui';
import { useLogout } from '../../model';
import type { ButtonProps } from 'antd';

interface LogoutButtonProps extends Omit<ButtonProps, 'onClick'> {
  onSuccess?: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({
  onSuccess,
  ...props
}) => {
  const { logout } = useLogout({ onSuccess });

  return (
    <Button onClick={logout} {...props}>
      Выйти
    </Button>
  );
};
