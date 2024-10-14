import * as v from 'valibot';
import { committees } from '$lib/people/team/team';

export const Member = v.object({
    name: v.string(),
    title: v.string(),
    committee: v.pipe(
        v.string(),
        v.check(i => committees.includes(i), 'invalid committee'),
    ),
    socials: v.optional(v.record(v.string(), v.pipe(v.string(), v.url()))),
});
