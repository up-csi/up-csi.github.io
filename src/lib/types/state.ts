export const STATES = [
    'Past',
    'Ongoing',
    'Future',
] as const;

export type State = typeof STATES[number];