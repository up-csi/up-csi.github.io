import * as v from 'valibot';
import { Officer } from './officer';

export interface Board extends v.InferOutput<typeof Board> {
    src: string;
}

export const Board = v.object({
    year: v.string(),
    officers: v.array(Officer),
});
