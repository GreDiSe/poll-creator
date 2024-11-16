import React, { InputHTMLAttributes } from 'react';
import { InputContainer, StyledInput, Label, ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
    return (
        <InputContainer>
            {label && <Label>{label}</Label>}
            <StyledInput {...props} />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputContainer>
    );
};
