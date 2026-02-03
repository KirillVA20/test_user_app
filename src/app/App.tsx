import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { ProtectedRoute, PublicRoute } from '@/features/auth';
import { Login } from '@/pages/login';
import { Users } from '@/pages/users';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
