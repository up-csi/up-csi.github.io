import { getTeam } from '$lib/people/team/team';

export async function load() {
    return {
        team: await getTeam(),
    };
}
