import { getExec } from '$lib/people/exec/exec';
import { getTeam } from '$lib/data/team';

export async function load() {
    return { team: await getTeam(), exec: (await getExec()).reverse() };
}
