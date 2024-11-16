import { createSlice } from '@reduxjs/toolkit';
import { Poll } from '../../types';
import { PayloadAction } from '@reduxjs/toolkit';
import { t } from 'i18next';
import { fetchPolls, deletePoll, submitPollForm } from './pollThunks';

interface PollState {
    polls: Poll[];
    status: 'succeeded' | 'loading' | 'failed';
    openedPoll: {
        selectedPollId?: string;
        deleteError?: string;
    };
    form: {
        question: string;
        newOption: string;
        options: string[];
        errors: {
            question?: string;
            newOption?: string;
            create?: string;
        };
    };
}

const initialState: PollState = {
    polls: [],
    status: 'succeeded',
    openedPoll: {
        selectedPollId: undefined,
        deleteError: undefined,
    },
    form: {
        question: '',
        newOption: '',
        options: [],
        errors: {},
    },
};

const pollSlice = createSlice({
    name: 'polls',
    initialState,
    reducers: {
        setQuestion: (state, action: PayloadAction<string>) => {
            state.form.question = action.payload;
        },
        setNewOption: (state, action: PayloadAction<string>) => {
            state.form.newOption = action.payload;
            if (state.form.errors.newOption) {
                state.form.errors.newOption = undefined;
            }
        },
        addOption: (state) => {
            const { newOption, options } = state.form;
            if (!newOption.trim()) {
                state.form.errors.newOption = t('polls.errors.enterOption');
                return;
            }
            if (options.some((opt: string) => opt.toLowerCase() === newOption.trim().toLowerCase())) {
                state.form.errors.newOption = t('polls.errors.optionExists');
                return;
            }
            state.form.options.push(newOption.trim());
            state.form.newOption = '';
            state.form.errors = {};
        },
        removeOption: (state, action: PayloadAction<number>) => {
            state.form.options = state.form.options.filter((_, i) => i !== action.payload);
        },
        setErrors: (state, action: PayloadAction<typeof initialState.form.errors>) => {
            state.form.errors = action.payload;
        },
        resetForm: (state) => {
            state.form = initialState.form;
        },
        setSelectedPoll: (state, action: PayloadAction<string | undefined>) => {
            state.openedPoll.selectedPollId = action.payload;
            state.openedPoll.deleteError = undefined;
        },
        setDeleteError: (state, action: PayloadAction<string | undefined>) => {
            state.openedPoll.deleteError = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPolls.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPolls.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.polls = action.payload;
            })
            .addCase(fetchPolls.rejected, (state, action) => {
                state.status = 'failed';
            })
            .addCase(deletePoll.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deletePoll.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.polls = state.polls.filter((poll) => poll.id !== action.payload);
            })
            .addCase(deletePoll.rejected, (state, action) => {
                state.status = 'failed';
            })
            .addCase(submitPollForm.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitPollForm.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(submitPollForm.rejected, (state, action) => {
                state.status = 'failed';
            });
    },
});

export const { setQuestion, setNewOption, addOption, removeOption, setErrors, resetForm, setSelectedPoll, setDeleteError } = pollSlice.actions;

export default pollSlice.reducer;
