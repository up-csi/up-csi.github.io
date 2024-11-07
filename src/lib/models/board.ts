import * as v from 'valibot';
import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';
import { Officer } from './officer';

export interface Board extends v.InferOutput<typeof Board> {
    src: EnhancedImgAttributes['src'] | null;
}

export const Board = v.object({
    year: v.string(),
    officers: v.array(Officer),
});
