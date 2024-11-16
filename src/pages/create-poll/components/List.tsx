import React from 'react';
import { ListItem } from './ListItem';
import { ListContainer } from './List.styles';

interface ListProps {
    items: string[];
    onRemove: (index: number) => void;
}

export const List: React.FC<ListProps> = ({ items, onRemove }) => {
    if (items.length === 0) return null;

    return (
        <ListContainer>
            {items.map((item, index) => (
                <ListItem key={index} text={item} onRemove={() => onRemove(index)} />
            ))}
        </ListContainer>
    );
};
