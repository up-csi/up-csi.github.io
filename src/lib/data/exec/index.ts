import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

import { parse } from 'valibot';

import type { Board } from '$lib/types/board';
import type { BoardOfficer } from '$lib/types/board_officer';
import { type Officer, Officer as OfficerSchema } from '$lib/models/officer';
import { type Position, Position as PositionSchema } from '$lib/models/position';

export const pres_term = '2425B';

async function getOfficers() {
    const imports = import.meta.glob<Officer>('./json/*.json');

    const promises = Object.entries(imports).map(async ([_, asset]) => {
        const officer = parse(OfficerSchema, await asset());

        const src: EnhancedImgAttributes['src'] = (
            await import(`$lib/assets/exec/${officer.img}.webp?enhanced?url`)
        ).default;

        const parsed_pos: Array<readonly [string, Position]> = officer.pos.map(raw_detail => {
            const detail = raw_detail.split(':');
            const term = detail[0];
            const actual_pos: Position = parse(PositionSchema, detail[1]);
            
            const parsed_detail: readonly [string, Position] = (term && actual_pos) ? [term, actual_pos] : ['', ''];
            return parsed_detail;
        });

        const parsed_officer: Officer = { ...officer, parsed_pos, src }
        return parsed_officer;
    });

    return await Promise.all(promises);
}

export async function getExec() {
    const officers = await getOfficers();
    const boards: Record<string, Board> = {};
    
    officers.forEach(({ name, src, parsed_pos }) => {
        const { last_name, nickname } = name;
        const officer_name = `${nickname} ${last_name}`;

        parsed_pos.forEach(([term, actual_pos]) => {
            const new_officer: BoardOfficer = { name: officer_name, src, pos: actual_pos }

            if (boards[term] === undefined) {
                const new_board: Board = { term, src: null, officers: [] };
                boards[term] = new_board;
            }

            boards[term].officers.push(new_officer);
        });
    });

    Object.keys(boards).forEach(async term => {
        if (boards[term]) {
            try {
                boards[term].src = (await import(`$lib/assets/team/${term}.webp?enhanced?url`)).default;
            } catch {
                boards[term].src = null;
            }
        }
    });

    return boards;
}
