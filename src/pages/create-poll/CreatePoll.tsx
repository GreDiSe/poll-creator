import React from 'react';
import CreatePollForm from './components/CreatePollForm';
import { Container } from './CreatePoll.styles';

const CreatePoll: React.FC = () => {
    return (
        <Container>
            <CreatePollForm />
        </Container>
    );
};

export default CreatePoll;
