import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <Routes>
        <Route path="/" element={<div>Главная страница</div>} />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
