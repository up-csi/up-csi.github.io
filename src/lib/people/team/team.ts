export interface Member {
    name: string;
    title: string;
    committee: string;
    img: string;
    socials: Record<string, string>;
}

export default async function getTeam(): Promise<Member[]> {
    const teamPromise = import.meta.glob<Member>('./members/*.json', {
        import: 'default',
    });

    const team: Member[] = [];
    for (const path in teamPromise) {
        const memberPromise = teamPromise[path];

        if (memberPromise) {
            const memberObj = await memberPromise();
            team.push(memberObj);
        }
    }

    return team;
}
