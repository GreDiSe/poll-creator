import styled from 'styled-components';

export const OpenedPollContainer = styled.div`
    padding: 2rem;
    background: white;
    border-radius: 0.7rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    width: 100%;
    max-width: 28.25rem;
    height: 100%;
    animation: slideIn 0.3s ease-out;

    @media (max-width: 768px) {
        margin: 1rem;
        max-height: 90vh;
        overflow-y: auto;

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 500;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 1.25rem 0 1.25rem 0.75rem;
`;

export const OptionItem = styled.div`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black};
`;

export const OptionsTitle = styled.h3`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.darkGray};
    margin: 0 0 1rem 0;
    font-weight: 500;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
    gap: 0.75rem;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.danger};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1rem;
`;
