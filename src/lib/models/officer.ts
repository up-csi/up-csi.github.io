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

export interface Officer extends v.InferOutput<typeof Officer> {
    src: string | null;
}

export const Officer = v.object({
    name: v.string(),
    pos: v.picklist(POSITIONS),
});
