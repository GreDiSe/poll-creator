import styled from 'styled-components';

export const FormContainer = styled.form`
    width: 100%;
`;

export const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 2rem;
    font-size: 1.125rem;
    font-weight: 600;
`;

export const OptionContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
    padding: 1rem;
`;

export const FormPadding = styled.div`
    padding: 1.5rem 1rem 0.5rem 1rem;
`;

export const AddButton = styled.button`
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    line-height: 1;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        opacity: 0.9;
    }
`;

export const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.danger};
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
