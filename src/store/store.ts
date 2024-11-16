import { configureStore } from '@reduxjs/toolkit';

import pollReducer from './poll/pollSlice';
import notificationReducer from './notificationSlice';
import languageReducer from './languageSlice';

export const store = configureStore({
    reducer: {
        polls: pollReducer,
        notifications: notificationReducer,
        language: languageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
