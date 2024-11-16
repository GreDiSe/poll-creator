import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const NavLink = styled.a<{ $active?: boolean }>`
    text-decoration: none;
    color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.black)};
    font-weight: ${({ $active }) => ($active ? '600' : '400')};
    padding: 0.5rem 1rem;
    transition: color 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
