import styled from 'styled-components';

export const ListItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.65rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

    &:last-child {
        border-bottom: none;
    }
`;

export const Text = styled.div`
    color: ${({ theme }) => theme.colors.black};
    font-size: 1rem;
`;
