import { createContext, useContext } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
