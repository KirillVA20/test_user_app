import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import styled from 'styled-components';

const StyledInput = styled(AntInput)`
  &.ant-input {
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
      border-color: #4096ff;
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(64, 150, 255, 0.1);
    }
  }
`;

const StyledTextArea = styled(AntInput.TextArea)`
  &.ant-input {
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
      border-color: #4096ff;
    }

    &:focus {
      box-shadow: 0 0 0 2px rgba(64, 150, 255, 0.1);
    }
  }
`;

const StyledPassword = styled(AntInput.Password)`
  &.ant-input-affix-wrapper {
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
      border-color: #4096ff;
    }

    &:focus,
    &:focus-within {
      box-shadow: 0 0 0 2px rgba(64, 150, 255, 0.1);
    }
  }
`;

export interface InputProps extends AntInputProps {}

export const Input: React.FC<InputProps> & {
  TextArea: typeof StyledTextArea;
  Password: typeof StyledPassword;
} = ({ ...props }) => {
  return <StyledInput {...props} />;
};

Input.TextArea = StyledTextArea;
Input.Password = StyledPassword;
