import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/shared/lib/auth';

interface PublicRouteProps {
  children: React.ReactNode;
}

export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/users" replace />;
  }

  return <>{children}</>;
};
