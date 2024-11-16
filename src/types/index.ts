export interface Poll {
    id: string;
    question: string;
    options: string[];
    createdAt: string;
}

export type NewPoll = Omit<Poll, 'id' | 'createdAt'>;
