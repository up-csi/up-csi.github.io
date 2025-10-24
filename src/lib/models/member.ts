import { type InferOutput, array, object, optional, picklist, record, string } from 'valibot';

import { MemberCommittees } from '$lib/types/committees';
import { MemberSocialMedia } from '$lib/types/social_media';
import { POSITIONS } from '$lib/models/position';

export const Member = object({
    name: string(),
    img: string(),
    title: optional(array(picklist(POSITIONS))),
    committee: array(picklist(Object.keys(MemberCommittees))),
    socials: optional(record(picklist(Object.keys(MemberSocialMedia)), string())),
});

export interface Member extends InferOutput<typeof Member> {
    src: string;
}
