import styled from 'styled-components';

export const PollItemContainer = styled.div<{ $selected?: boolean }>`
    padding: 1rem;
    cursor: pointer;
    background-color: ${({ $selected, theme }) => ($selected ? theme.colors.whiteSmoke : 'white')};

    &:hover {
        background-color: ${({ theme }) => theme.colors.whiteSmoke};
    }
`;

export const PollTitle = styled.p`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 500;
`;

export const PollDate = styled.p`
    margin: 0.5rem 0 0;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};
`;
