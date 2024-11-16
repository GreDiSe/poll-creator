import { Poll, NewPoll } from '../types';

// Might be a good idea to not move it to a .env file
const API_BASE_URL = 'https://6626a09d052332d553238268.mockapi.io/api/polls-example';

export const pollsApi = {
    getPolls: async (): Promise<Poll[]> => {
        const response = await fetch(`${API_BASE_URL}`);
        if (!response.ok) throw new Error('Failed to fetch polls');
        return response.json();
    },

    createPoll: async (poll: NewPoll): Promise<Poll> => {
        const response = await fetch(`${API_BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(poll),
        });
        if (!response.ok) throw new Error('Failed to create poll');
        return response.json();
    },

    deletePoll: async (id: string): Promise<void> => {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete poll');
    },
};
