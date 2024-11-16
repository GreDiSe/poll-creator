import React from 'react';
import { PollsList } from './PollList.styles';
import { PollItem } from './PollItem';
import { Poll } from '../../../types';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

interface PollListProps {
    polls: Poll[];
    selectedPollId?: string;
    onPollClick: (poll: Poll) => void;
    onEmptyPollClick: () => void;
}

export const PollList: React.FC<PollListProps> = ({ polls, selectedPollId, onPollClick, onEmptyPollClick }) => {
    const { t } = useTranslation();

    return (
        <PollsList>
            {polls.length === 0 ? (
                <PollItem
                    title={t('pollList.emptyState.title')}
                    date={t('pollList.emptyState.subtitle')}
                    onClick={onEmptyPollClick}
                />
            ) : (
                polls.map((poll) => (
                    <PollItem
                        key={poll.id}
                        title={poll.question}
                        date={format(new Date(poll.createdAt), 'MM/dd/yyyy')}
                        onClick={() => onPollClick(poll)}
                        selected={selectedPollId === poll.id}
                    />
                ))
            )}
        </PollsList>
    );
};
