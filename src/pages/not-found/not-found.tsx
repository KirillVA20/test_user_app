import React from 'react';
import styled from 'styled-components';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <Result
        status="404"
        title="404"
        subTitle="К сожалению, страница не найдена"
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            На главную
          </Button>
        }
      />
    </NotFoundContainer>
  );
};

export default NotFound;
