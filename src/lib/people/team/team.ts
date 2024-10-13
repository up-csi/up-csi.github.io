import { assert } from '$lib/assert';

export const committees = [
    'Executive',
    'Innovation',
    'Service',
    'External Relations',
    'Membership & Internals',
    'Branding & Creatives',
    'Engineering',
];

export interface Member {
    name: string;
    title: string;
    committee: string;
    img: string;
    socials: Record<string, string>;
}

export async function getTeam(): Promise<Member[]> {
    /**
     * The usage of dynamic imports in this function will have no effect on page load times.
     * This is because dynamically imported assets will still be bundled on build.
     * Thus, this will make things more organized over storing the images in "static/".
     */
    const teamPromise = import.meta.glob<Member>('./members/*.json', {
        import: 'default',
    });

    const team: Member[] = [];
    for (const path in teamPromise) {
        const memberPromise = teamPromise[path];

        if (memberPromise) {
            const memberObj = { ...(await memberPromise()) };

            /**
             * Since Vite utilizes rollup for dynamic imports,
             * they share the limitation of rollup dynamic imports.
             * One of these limitations is that the file extension must be specified.
             * For this, the ".webp" extension was chosen since it is the preferred image file type for this website.
             *
             * For more information, see:
             * https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#imports-must-end-with-a-file-extension
             */
            memberObj.img = (await import(`$lib/people/team/images/${memberObj.img}.webp`)).default;

            /**
             * Other issues with JSON values should raise an error without us having to explicitly account for them.
             * Might be good to improve this later, but this suffices for the moment.
             */

            assert(
                committees.includes(memberObj.committee),
                `committee "${memberObj.committee}" of "${memberObj.name}" does not exist`,
            );

            team.push(memberObj);
        }
    }

    return team;
}
