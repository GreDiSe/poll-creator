import { createAsyncThunk } from '@reduxjs/toolkit';
import { t } from 'i18next';

import { pollsApi } from '../../services/api';
import { RootState } from '../store';
import { addNotification } from '../notificationSlice';
import { setErrors, resetForm, setDeleteError } from './pollSlice';

const validateForm = (question: string, options: string[]) => {
    const errors: { question?: string; options?: string; newOption?: string } = {};
    if (!question.trim()) {
        errors.question = t('polls.errors.enterQuestion');
    }
    if (options.length < 2) {
        errors.newOption = t('polls.errors.minOptions');
    }
    return errors;
};

export const fetchPolls = createAsyncThunk('polls/fetchPolls', async () => {
    return await pollsApi.getPolls();
});

export const deletePoll = createAsyncThunk('polls/deletePoll', async (id: string, { dispatch }) => {
    try {
        await pollsApi.deletePoll(id);

        dispatch(
            addNotification({
                message: t('polls.success.deleted'),
                type: 'success',
                autoClose: true,
            }),
        );
        dispatch(setDeleteError(undefined));
        return id;
    } catch (error) {
        dispatch(setDeleteError(t('polls.errors.generic')));
        dispatch(
            addNotification({
                message: t('polls.errors.deleteFailed'),
                type: 'error',
                autoClose: true,
            }),
        );
        return null;
    }
});

export const submitPollForm = createAsyncThunk('polls/submitPollForm', async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { question, options } = state.polls.form;

    const errors = validateForm(question, options);
    if (Object.keys(errors).length > 0) {
        dispatch(setErrors(errors));
        return;
    }

    try {
        const poll = { question, options: options.filter((opt) => opt.trim()) };
        const result = await pollsApi.createPoll(poll);
        dispatch(
            addNotification({
                message: t('polls.success.created'),
                type: 'success',
                autoClose: true,
            }),
        );
        dispatch(resetForm());
        return result;
    } catch (error) {
        dispatch(
            addNotification({
                message: t('polls.errors.createFailed'),
                type: 'error',
                autoClose: true,
            }),
        );
    }
});

export const editPollForm = createAsyncThunk('polls/editPollForm', async (id: string, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { question, options } = state.polls.form;

    const errors = validateForm(question, options);
    if (Object.keys(errors).length > 0) {
        dispatch(setErrors(errors));
        return;
    }

    try {
        const poll = { question, options: options.filter((opt) => opt.trim()) };
        const result = await pollsApi.updatePoll(poll, id);
        dispatch(
            addNotification({
                message: t('polls.success.created'),
                type: 'success',
                autoClose: true,
            }),
        );
        dispatch(resetForm());
        return result;
    } catch (error) {
        dispatch(
            addNotification({
                message: t('polls.errors.createFailed'),
                type: 'error',
                autoClose: true,
            }),
        );
    }
});
