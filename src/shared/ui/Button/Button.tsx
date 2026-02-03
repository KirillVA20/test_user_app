import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(AntButton)`
  &.ant-btn {
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

export interface ButtonProps extends AntButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
