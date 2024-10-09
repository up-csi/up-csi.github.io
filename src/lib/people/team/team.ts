export interface Member {
    name: string;
    title: string;
    committee: string;
    img: string;
    socials: Record<string, string>;
}

export default function getTeam(): Member[] {
    const memberFiles: Record<string, Member> = import.meta.glob('./members/*.json', {
        import: 'default',
        eager: true,
    });

    const team: Member[] = [];
    for (const path in memberFiles) {
        const memberObj = memberFiles[path];

        if (memberObj) {
            team.push(memberObj);
        }
    }

    return team;
}
