import React from 'react';
import PollForm from '../../../components/poll-form/PollForm';
import { EditOpenedPollContainer } from './EditOpenedPoll.styles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import {editPollForm, fetchPolls} from '../../../store/poll/pollThunks';

interface Props {
    id: string;
    closeModal(): void;
}

export const EditOpenedPoll: React.FC<Props> = ({ id, closeModal }) => {
    const dispatch = useDispatch<AppDispatch>();
    const onSubmit = async () => {
        await dispatch(editPollForm(id)).unwrap();
        closeModal();
        await dispatch(fetchPolls());
    };
    return (
        <EditOpenedPollContainer>
            <PollForm onSubmit={onSubmit} />
        </EditOpenedPollContainer>
    );
};
