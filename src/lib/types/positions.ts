export const POSITIONS = [
    'President',
    'Vice President for Innovation',
    'Vice President for Service',
    'Director for External Relations',
    'Director for Membership & Internals',
    'Director for Branding & Creatives',
    'Director for Engineering'
] as const;

export type Position = typeof POSITIONS[number];

export const isPosition = (x: any): x is Position => { return POSITIONS.includes(x) };