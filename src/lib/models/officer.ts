import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

import { type InferOutput, array, object, string } from 'valibot';

import type { Position } from '$lib/models/position';

export const Officer = object({
    name: object({
        last_name: string(),
        nickname: string(),
    }),
    img: string(),
    pos: array(string()),
});

export interface Officer extends InferOutput<typeof Officer> {
    parsed_pos: Record<string, Position[]>;
}
