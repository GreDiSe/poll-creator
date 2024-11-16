import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 1.5rem;
    height: 100%;
    margin: 1.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
