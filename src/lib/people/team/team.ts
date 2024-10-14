import { type Member, Member as MemberSchema } from '$lib/models/member';
import { parse } from 'valibot';

const baseRe = /(?<base>\w+).json$/;

export async function getTeam() {
    const imports = import.meta.glob<Member>('./members/*.json');

    const promises = Object.entries(imports).map(async ([path, asset]) => {
        // Derive the image name from the original path
        // It goes without saying that this may not be the right approach for this
        const base = path.match(baseRe)?.groups?.base;
        const src: string = (await import(`$lib/people/team/images/${base}.webp?url`)).default;

        const member = parse(MemberSchema, await asset());

        // Type-safety enforced at build-time and run-time!
        return { ...member, src };
    });

    return await Promise.all(promises);
}
