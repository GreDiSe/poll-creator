import styled, { css } from 'styled-components';
import { ButtonVariant, ButtonSize } from './Button';

const getVariantStyles = (variant: ButtonVariant) => {
    const variants = {
        primary: css`
            background: ${({ theme }) => theme.colors.primary};
            color: white;
            border: none;

            &:hover:not(:disabled) {
                background: ${({ theme }) => `${theme.colors.primary}ee`};
            }
        `,
        danger: css`
            background: ${({ theme }) => theme.colors.danger};
            color: white;
            border: none;

            &:hover:not(:disabled) {
                background: ${({ theme }) => `${theme.colors.danger}ee`};
            }
        `,
        text: css`
            background: none;
            color: ${({ theme }) => theme.colors.primary};
            border: none;
            padding: 0;

            &:hover:not(:disabled) {
                opacity: 0.8;
            }
        `,
    };
    return variants[variant];
};

const getSizeStyles = (size: ButtonSize) => {
    const sizes = {
        small: css`
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
        `,
        medium: css`
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
        `,
        large: css`
            padding: 1rem 2rem;
            font-size: 1.125rem;
        `,
    };
    return sizes[size];
};

export const StyledButton = styled.button<{
    $variant: ButtonVariant;
    $size: ButtonSize;
    $fullWidth: boolean;
    $isLoading: boolean;
}>`
    border-radius: 0.25rem;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
    display: inline-block;

    ${({ $variant, $isLoading, theme }) =>
        $isLoading
            ? css`
                  background: ${theme.colors.whiteSmoke};
                  color: white;
                  cursor: not-allowed;
                  border: none;
                  padding: 0;
                  &:hover {
                      background: ${theme.colors.whiteSmoke};
                  }
              `
            : getVariantStyles($variant)}
    ${({ $size }) => getSizeStyles($size)}
`;
