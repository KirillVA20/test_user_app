import React from 'react';
import { AuthContext, AuthContextType } from './AuthContext';
import { useAuthState } from './useAuthState';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { token, setToken, removeToken, isLoading } = useAuthState();

  const value: AuthContextType = {
    isAuthenticated: !!token,
    token,
    setToken,
    removeToken,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
