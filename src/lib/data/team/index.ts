import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

import { parse } from 'valibot';

import { type Member, Member as MemberSchema } from '$lib/models/member';

export async function getTeam() {
    const imports = import.meta.glob<Member>('./json/*.json');

    const promises = Object.entries(imports).map(async ([_, asset]) => {
        const member = parse(MemberSchema, await asset());
        const src: EnhancedImgAttributes['src'] = (
            await import(`$lib/assets/team/${member.img}.webp?enhanced?url`)
        ).default;

        const parsed_member: Member = { ...member, src };
        return parsed_member;
    });

    return await Promise.all(promises);
}
