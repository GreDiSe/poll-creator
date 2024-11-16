import React from 'react';
import { PollItemContainer, PollTitle, PollDate } from './PollItem.styles';

interface PollItemProps {
    title: string;
    date: string;
    selected?: boolean;
    onClick: () => void;
}

export const PollItem: React.FC<PollItemProps> = ({ title, date, selected, onClick }) => {
    return (
        <PollItemContainer onClick={onClick} $selected={selected}>
            <PollTitle>{title}</PollTitle>
            <PollDate>{date}</PollDate>
        </PollItemContainer>
    );
};
