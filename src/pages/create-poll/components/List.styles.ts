import styled from 'styled-components';

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 0.25rem;
    font-weight: 500;
`;
