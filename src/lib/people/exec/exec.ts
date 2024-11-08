import { type Board, Board as BoardSchema } from '$lib/models/board';
import { type InferOutput, parse } from 'valibot';
import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';
import { Officer as OfficerSchema } from '$lib/models/officer';
import { basename } from 'node:path';

async function getOfficers(data: InferOutput<typeof OfficerSchema>[], folder: string) {
    const promises = data.map(async datum => {
        const person = parse(OfficerSchema, datum);
        const img = person.name.replace(/\s+/g, '-').toLowerCase();

        try {
            const src: string | null = (
                await import(`$lib/people/exec/images/${folder}/${img}.webp?url`)
            ).default;
            return { ...person, src };
        } catch {
            const src: string | null = null;
            return { ...person, src };
        }
    });

    return await Promise.all(promises);
}

export async function getExec() {
    const imports = import.meta.glob<Board>('./boards/*.json');

    const promises = Object.entries(imports).map(async ([path, asset]) => {
        const acadYear = basename(path, '.json');
        const board = parse(BoardSchema, await asset());
        const { year, officers: data } = board;

        const officers = await getOfficers(data, acadYear);

        try {
            const src: EnhancedImgAttributes['src'] | null = (
                await import(`$lib/people/exec/images/${acadYear}/${acadYear}.webp?enhanced?url`)
            ).default;
            return { year, officers, src };
        } catch {
            const src: EnhancedImgAttributes['src'] | null = null;
            return { year, officers, src };
        }
    });

    return await Promise.all(promises);
}
