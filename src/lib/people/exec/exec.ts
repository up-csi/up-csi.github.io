import { type Board, Board as BoardSchema } from '$lib/models/board';
import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';
import { Officer as OfficerSchema } from '$lib/models/officer';

import { basename } from 'node:path';
import { parse } from 'valibot';

export async function getExec() {
    const imports = import.meta.glob<Board>('./boards/*.json');

    const promises = Object.entries(imports).map(async ([path, asset]) => {
        const acadYear = basename(path, '.json');
        const board = parse(BoardSchema, await asset());
        const { year, officers: data } = board;

        const officers = data.map(async (datum) => {
            const person = parse(OfficerSchema, datum)
            const personImg = person.name.replace(/\s+/g, '-').toLowerCase();

            try {
                const personSrc: string | null = (await import(`$lib/people/exec/images/${acadYear}/${personImg}.webp?url`)).default;
                return { ...person, personSrc };
            } catch {
                const personSrc: string | null = null;
                return { ...person, personSrc };
            }
        });

        try {
            const src: EnhancedImgAttributes['src'] | null = (await import(`$lib/people/exec/images/${acadYear}/${acadYear}.webp?enhanced?url`)).default;
            return { year, officers, src };
        } catch {
            const src: EnhancedImgAttributes['src'] | null = null;
            return { year, officers, src };
        }
    });

    return await Promise.all(promises);
}