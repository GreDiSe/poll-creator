import React from 'react';
import PollForm from '../../components/poll-form/PollForm';
import { Container } from './CreatePoll.styles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { submitPollForm } from '../../store/poll/pollThunks';

const CreatePoll: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const onSubmit = async () => {
        await dispatch(submitPollForm()).unwrap();
    };

    return (
        <Container>
            <PollForm onSubmit={onSubmit} />
        </Container>
    );
};

export default CreatePoll;
