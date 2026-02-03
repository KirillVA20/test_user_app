import React from 'react';
import { RouterProvider } from './providers/router';
import { QueryProvider } from './providers/query';
import App from './App';

export const Application: React.FC = () => {
  return (
    <QueryProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </QueryProvider>
  );
};
