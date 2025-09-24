import { parse } from 'valibot';

import { type Member, Member as MemberSchema } from '$lib/models/member';

export async function getTeam() {
    const imports = import.meta.glob<Member>('./json/*.json');

    const promises = Object.entries(imports).map(async ([_, asset]) => {
        const member = parse(MemberSchema, await asset());
        const parsed_member: Member = { ...member, src: member.img };
        return parsed_member;
    });

    return await Promise.all(promises);
}
