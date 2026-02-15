import React from 'react';
import { RouterProvider } from './providers/router';
import { QueryProvider } from './providers/query';
import { AuthProvider } from '@/shared/lib/auth';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';

export const Application: React.FC = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <QueryProvider>
        <AuthProvider>
          <RouterProvider />
        </AuthProvider>
      </QueryProvider>
    </ConfigProvider>
  );
};
