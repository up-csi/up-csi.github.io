import { type Member, Member as MemberSchema } from '$lib/models/member';
import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';
import { parse } from 'valibot';

export async function getTeam() {
    const imports = import.meta.glob<Member>('./json/*.json');

    const promises = Object.entries(imports).map(async ([_, asset]) => {
        const member = parse(MemberSchema, await asset());
        const src: EnhancedImgAttributes['src'] = (await import(`$lib/assets/team/${member.img}.webp?enhanced?url`)).default;

        return { ...member, src };
    });

    return await Promise.all(promises);
}
