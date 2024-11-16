import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface Notification {
    id: string;
    message: string;
    type: 'success' | 'warning' | 'error';
    autoClose?: boolean;
    duration?: number;
}

const initialState: Notification[] = [];

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
            const id = uuidv4();
            state.push({ ...action.payload, id });
        },
        removeNotification: (state, action: PayloadAction<string>) => {
            return state.filter((notification) => notification.id !== action.payload);
        },
    },
});

export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
