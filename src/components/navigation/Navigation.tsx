import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Nav, NavLink } from './Navigation.styles';

const Navigation: React.FC = () => {
    const location = useLocation();
    const isViewPolls = location.pathname.startsWith('/view-polls');
    const { t } = useTranslation();

    return (
        <Nav>
            <NavLink as={Link} to="/create-poll" $active={location.pathname === '/create-poll'}>
                {t('navigation.createPoll')}
            </NavLink>
            <NavLink as={Link} to="/view-polls" $active={isViewPolls}>
                {t('navigation.viewPolls')}
            </NavLink>
        </Nav>
    );
};

export default Navigation;
