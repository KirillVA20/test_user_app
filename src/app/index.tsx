import React from 'react';
import { RouterProvider } from './providers/router';
import { QueryProvider } from './providers/query';
import { AuthProvider } from './providers/auth';
import App from './App';

export const Application: React.FC = () => {
  return (
    <QueryProvider>
      <RouterProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </RouterProvider>
    </QueryProvider>
  );
};
