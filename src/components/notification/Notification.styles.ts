import styled, { css, keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const NotificationContainer = styled.div`
    position: fixed;
    top: 1.25rem;
    right: 1.25rem;
    z-index: 1000;
`;

interface NotificationItemProps {
    type: 'success' | 'warning' | 'error';
    $closing: boolean;
}

export const NotificationItem = styled.div<NotificationItemProps>`
    padding: 1rem 1.5rem;
    margin-bottom: 0.625rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 18.75rem;
    animation: ${slideIn} 0.3s ease-out;

    ${(props) =>
        props.$closing &&
        css`
            animation: ${slideOut} 0.3s ease-out forwards;
        `}

    ${(props) => {
        switch (props.type) {
            case 'success':
                return css`
                    background-color: #e7f6ed;
                    color: #0a541e;
                `;
            case 'warning':
                return css`
                    background-color: #fff4e5;
                    color: #663c00;
                `;
            case 'error':
                return css`
                    background-color: #ffebee;
                    color: #c62828;
                `;
            default:
                return '';
        }
    }}
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 0.75rem;
    color: inherit;
    opacity: 0.7;

    &:hover {
        opacity: 1;
    }
`;
