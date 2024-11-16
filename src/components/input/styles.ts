import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
`;

export const StyledInput = styled.input`
    padding: 0.625rem 0;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    font-size: 1rem;
    width: 100%;
    font-weight: 400;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.lightGray};
    }
`;

export const Label = styled.label`
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
`;

export const ErrorMessage = styled.span`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.danger};
`;
