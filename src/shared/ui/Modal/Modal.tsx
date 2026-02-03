import React from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';
import styled from 'styled-components';

const StyledModal = styled(AntModal)`
  .ant-modal-content {
    border-radius: 12px;
    overflow: hidden;
  }

  .ant-modal-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-bottom: none;
    padding: 20px 24px;

    .ant-modal-title {
      color: #fff;
      font-weight: 600;
      font-size: 18px;
    }
  }

  .ant-modal-close {
    color: #fff;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .ant-modal-body {
    padding: 24px;
  }

  .ant-modal-footer {
    border-top: 1px solid #f0f0f0;
    padding: 16px 24px;
  }
`;

export interface ModalProps extends AntModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  return <StyledModal {...props}>{children}</StyledModal>;
};
