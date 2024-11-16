import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Container } from './ViewPolls.styles';
import { PollList } from './components/PollList';
import { OpenedPoll } from './components/OpenedPoll';
import { Poll } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchPolls } from '../../store/poll/pollThunks';
import { Loader } from '../../components/loader';
import { setSelectedPoll } from '../../store/poll/pollSlice';

const ViewPolls: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { polls, status, openedPoll: { selectedPollId } } = useSelector((state: RootState) => state.polls);
    const navigate = useNavigate();
    const location = useLocation();
    const urlPollId = location.pathname.split('/view-polls/')[1];

    useEffect(() => {
        dispatch(fetchPolls());
    }, [dispatch]);

    useEffect(() => {
        if (polls.length && urlPollId !== selectedPollId) {
            const poll = polls.find((p) => p.id === urlPollId);
            if (poll) {
                dispatch(setSelectedPoll(urlPollId));
            } else if (status === 'succeeded') {
                navigate('/view-polls');
            }
        }
    }, [urlPollId, selectedPollId, polls, status, navigate, dispatch]);

    const handlePollClick = (poll: Poll) => {
        dispatch(setSelectedPoll(poll.id));
        navigate(`/view-polls/${poll.id}`);
    };

    const handlePollClose = () => {
        dispatch(setSelectedPoll(undefined));
        navigate('/view-polls');
    };

    const handleEmptyPollClick = () => {
        navigate('/create-poll');
    };

    const selectedPoll = selectedPollId ? polls.find(p => p.id === selectedPollId) : null;

    if (!polls.length && status === 'loading') return <Loader />;

    return (
        <Container>
            <PollList
                polls={polls}
                selectedPollId={selectedPollId}
                onPollClick={handlePollClick}
                onEmptyPollClick={handleEmptyPollClick}
            />
            {selectedPoll && <OpenedPoll poll={selectedPoll} onClose={handlePollClose} />}
        </Container>
    );
};

export default ViewPolls;
