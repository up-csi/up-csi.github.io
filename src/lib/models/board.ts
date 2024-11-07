import * as v from 'valibot';

export const POSITIONS = [
    'President',
    'Vice President for Innovation',
    'Vice President for Service',
    'Director for External Relations',
    'Director for Membership & Internals',
    'Director for Branding & Creatives',
    'Director for Engineering',
] as const;


export interface Board extends v.InferOutput<typeof Board> {
    src: string;
}

export const Board = v.object({
    year: v.string(),
    officers: v.array(v.record(
        v.string(),
        v.picklist(POSITIONS),
    )),
});
