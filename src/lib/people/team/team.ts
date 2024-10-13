import * as v from 'valibot';

export const committees = [
    'Executive',
    'Innovation',
    'Service',
    'External Relations',
    'Membership & Internals',
    'Branding & Creatives',
    'Engineering',
];

const MemberSchema = v.object({
    name: v.string(),
    title: v.string(),
    committee: v.pipe(
        v.string(),
        v.check(i => committees.includes(i), 'invalid committee'),
    ),
    socials: v.optional(v.record(v.string(), v.pipe(v.string(), v.url()))),
});

export interface Member extends v.InferOutput<typeof MemberSchema> {
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

        const member = v.parse(MemberSchema, await asset());

        // Type-safety enforced at build-time and run-time!
        return { ...member, img };
    });

    const members = await Promise.all(promises);

    return members;
}
