export const COMMITTEES = [
    'Executive',
    'Innovation',
    'Service',
    'External Relations',
    'Membership & Internals',
    'Branding & Creatives',
    'Engineering'
] as const;

export type Committee = typeof COMMITTEES[number];

export const isCommittee = (x: any): x is Committee => { return COMMITTEES.includes(x) };