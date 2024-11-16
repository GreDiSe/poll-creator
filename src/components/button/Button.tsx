import React from 'react';
import { StyledButton } from './Button.styles';

export type ButtonVariant = 'primary' | 'danger' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    isLoading = false,
    children,
    disabled,
    ...props
}) => {
    const styledProps = {
        $variant: variant,
        $size: size,
        $fullWidth: fullWidth,
        $isLoading: isLoading,
    };

    return (
        <StyledButton {...styledProps} disabled={disabled || isLoading} {...props}>
            {isLoading ? 'Loading...' : children}
        </StyledButton>
    );
};
