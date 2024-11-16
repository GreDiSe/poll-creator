import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
`;

export const Spinner = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border: 0.25rem solid ${({ theme }) => theme.colors.lightGray};
    border-top: 0.25rem solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;
