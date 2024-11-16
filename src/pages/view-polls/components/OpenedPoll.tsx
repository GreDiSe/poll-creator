import React from 'react';
import {
    OpenedPollContainer,
    Header,
    Title,
    Options,
    OptionItem,
    OptionsTitle,
    ButtonContainer,
    ModalOverlay,
    ErrorMessage,
} from './OpenedPoll.styles';
import { Button } from '../../../components/button';
import { Poll } from '../../../types';
import { useDispatch } from 'react-redux';
import { deletePoll } from '../../../store/poll/pollThunks';
import { AppDispatch, RootState } from '../../../store/store';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { setDeleteError } from '../../../store/poll/pollSlice';

interface OpenedPollProps {
    poll: Poll;
    onClose: () => void;
}

export const OpenedPoll: React.FC<OpenedPollProps> = ({ poll, onClose }) => {
    const dispatch = useDispatch<AppDispatch>();
    const isMobile = window.innerWidth <= 768;
    const { t } = useTranslation();
    const isLoading = useSelector((state: RootState) => state.polls.status === 'loading');
    const deleteError = useSelector((state: RootState) => state.polls.openedPoll.deleteError);

    const handleDelete = async () => {
        const isDeletedResponse = await dispatch(deletePoll(poll.id));
        if(isDeletedResponse.payload) {
            onClose();
        }
    };

    const closeModalIfClickedOutside = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const content = (
        <OpenedPollContainer>
            <Header>
                <Title>{poll.question}</Title>
            </Header>

            <OptionsTitle>{t('openedPoll.options')}</OptionsTitle>
            <Options>
                {poll.options.map((option, index) => (
                    <OptionItem key={index}>• {option}</OptionItem>
                ))}
            </Options>

            <ButtonContainer>
                {isMobile && (
                    <Button variant="primary" size="small" onClick={onClose}>
                        {t('openedPoll.close')}
                    </Button>
                )}
                <Button variant="primary" size="small" onClick={handleDelete} isLoading={isLoading}>
                    {t('openedPoll.delete')}
                </Button>
            </ButtonContainer>
            {deleteError && <ErrorMessage>{deleteError}</ErrorMessage>}
        </OpenedPollContainer>
    );

    return isMobile ? <ModalOverlay onClick={closeModalIfClickedOutside}>{content}</ModalOverlay> : content;
};