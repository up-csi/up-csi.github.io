import * as v from 'valibot';
import type { HTMLImgAttributes } from 'svelte/elements';

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
    src: HTMLImgAttributes['src'] | null;
}

export const Officer = v.object({
    name: v.string(),
    pos: v.picklist(POSITIONS),
});
