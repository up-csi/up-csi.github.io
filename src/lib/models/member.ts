import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

import { type InferOutput, array, object, optional, picklist, record, string } from 'valibot';

import { COMMITTEES } from '$lib/types/committees';
import { POSITIONS } from '$lib/types/positions';
import { MemberSocialMedia } from '$lib/types/social_media';

export const Member = object({
    name: string(),
    img: string(),
    title: optional(array(picklist(POSITIONS))),
    committee: array(picklist(COMMITTEES)),
    socials: optional(record(picklist(Object.keys(MemberSocialMedia)), string())),
});

export interface Member extends InferOutput<typeof Member> {
    src: EnhancedImgAttributes['src'];
}
