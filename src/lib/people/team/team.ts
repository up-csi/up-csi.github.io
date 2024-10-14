import { type InferOutput, parse } from 'valibot';
import { Member } from '$lib/models/member';

export const committees = [
    'Executive',
    'Innovation',
    'Service',
    'External Relations',
    'Membership & Internals',
    'Branding & Creatives',
    'Engineering',
];

export interface Member extends InferOutput<typeof Member> {
    img: string;
}

const baseRe = /(?<base>\w+).json$/;

export async function getTeam(): Promise<Member[]> {
    const imports = import.meta.glob<Member>('./members/*.json');

    const promises = Object.entries(imports).map(async ([path, asset]) => {
        // Derive the image name from the original path
        // It goes without saying that this may not be the right approach for this
        const base = path.match(baseRe)?.groups?.base;
        const img: string = (await import(`$lib/people/team/images/${base}.webp`)).default;

        const member = parse(Member, await asset());

        // Type-safety enforced at build-time and run-time!
        return { ...member, img };
    });

    return await Promise.all(promises);
}
