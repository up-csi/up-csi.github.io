export interface EventSession {
    type: 'Internal' | 'External';
    start: Date;
    end: Date;
    description: string | null;
}

export const dummy_session: EventSession = {
    type: 'Internal',
    start: new Date(),
    end: new Date(),
    description: '',
};
