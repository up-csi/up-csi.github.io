import * as v from 'valibot';
import { POSITIONS } from '$lib/types/positions';
import type { HTMLImgAttributes } from 'svelte/elements';

export interface Officer extends v.InferOutput<typeof Officer> {
    src: HTMLImgAttributes['src'] | null;
}

export const Officer = v.object({
    name: v.string(),
    pos: v.picklist(POSITIONS),
});
