import React from 'react';
import { ListItemContainer, Text } from './ListItem.styles';
import { Button } from '../../../components/button';
import { useTranslation } from 'react-i18next';

interface ListItemProps {
    text: string;
    onRemove: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({ text, onRemove }) => {
    const { t } = useTranslation();
    return (
        <ListItemContainer>
            <Text>{text}</Text>
            <Button variant="text" type="button" size="small" onClick={onRemove}>
                {t('createPoll.options.removeButton')}
            </Button>
        </ListItemContainer>
    );
};
