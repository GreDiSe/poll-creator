import styled from 'styled-components';

export const PollsList = styled.div`
    display: flex;
    flex-direction: column;
    width: 25rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
