import { type Member, Member as MemberSchema } from '$lib/models/member';
import { basename } from 'node:path';
import { parse } from 'valibot';

export async function getTeam() {
    const imports = import.meta.glob<Member>('./members/*.json');

    const promises = Object.entries(imports).map(async ([path, asset]) => {
        // Derive the image name from the original path
        const base = basename(path, '.json');
        const src: string = (await import(`$lib/people/team/images/${base}.webp?url`)).default;

        const member = parse(MemberSchema, await asset());

        // Type-safety enforced at build-time and run-time!
        return { ...member, src };
    });

    return await Promise.all(promises);
}
