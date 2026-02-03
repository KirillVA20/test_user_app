import React from 'react';
import { useAuthState } from './use-auth-state';
import { AuthContext, AuthContextType } from './auth-context';


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
