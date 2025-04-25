import type { Member } from '$lib/models/member';
import { MemberCommittees } from '$lib/types/committees';

import { getExec } from '$lib/data/exec';
import { getTeam } from '$lib/data/team';

export async function load() {
    const team = await getTeam();

    const filteredTeams: Record<string, Member[]> = {};
    Object.keys(MemberCommittees).forEach(filterComm => {
        filteredTeams[filterComm] = team.filter(({ committee }) => {
            let in_committee = false;
            committee.forEach(comm => {
                in_committee ||= comm === filterComm;
            });
            return in_committee;
        });
    });

    return { team, filteredTeams, exec: await getExec() };
}
