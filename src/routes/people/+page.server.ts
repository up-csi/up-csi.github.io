import { getExec } from '$lib/people/exec/exec';
import { getTeam } from '$lib/data/team';
import { MemberCommittees } from '$lib/types/committees';
import type { Member } from '$lib/models/member';

export async function load() {
    const team = await getTeam();

    const filteredTeams: Record<string, Member[]> = {}
    Object.keys(MemberCommittees).forEach(filterComm => {
        filteredTeams[filterComm] = team.filter(({ committee }) => {
            let in_committee = false;
            committee.forEach(comm => {
                in_committee ||= comm === filterComm;
            });
            return in_committee;
        })
    })

    return { team, filteredTeams, exec: (await getExec()).reverse() };
}
