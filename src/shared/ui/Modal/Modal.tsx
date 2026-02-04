import React from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';
import styled from 'styled-components';

const StyledModal = styled(AntModal)`
  .ant-modal-content {
    border-radius: 12px;
    overflow: hidden;
  }

  .ant-modal-close {
    color: #fff;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .ant-modal-footer {
    border-top: 1px solid #f0f0f0;
    padding: 16px 0;
  }
`;

export interface ModalProps extends AntModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  return <StyledModal {...props}>{children}</StyledModal>;
};
