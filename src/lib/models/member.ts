import { type InferOutput, array, object, optional, picklist, record, string } from 'valibot';
import { COMMITTEES } from '$lib/types/committees';
import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';
import { POSITIONS } from '$lib/types/positions';

const SOCIALS = ['github', 'linkedin', 'instagram', 'website'];

export const Member = object({
    name: string(),
    img: string(),
    title: optional(array(picklist(POSITIONS))),
    committee: array(picklist(COMMITTEES)),
    socials: optional(record(picklist(SOCIALS), string())),
});

export interface Member extends InferOutput<typeof Member> {
    src: EnhancedImgAttributes['src'];
}
