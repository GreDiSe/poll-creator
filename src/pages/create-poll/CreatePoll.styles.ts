import styled from 'styled-components';

export const Container = styled.div`
    max-width: 37.5rem;
    margin: 2rem auto;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        max-width: 90%;
    }
`;
