import React from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { ProtectedRoute, PublicRoute } from '@/features/auth';
import { AuthProvider } from '@/shared/lib/auth';
import { Login } from '@/pages/login';
import { Users } from '@/pages/users';
import { NotFound } from '@/pages/not-found';
import { queryClient } from '../query';
import { usersLoader } from '@/pages/users/model/use-user-loader';

const RootLayout: React.FC = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </ConfigProvider>
  );
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/users" replace />,
      },
      {
        path: '/users',
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
        loader: usersLoader(queryClient),
      },
      {
        path: '/login',
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export const RouterProvider: React.FC = () => {
  return <ReactRouterProvider router={router} />;
};
