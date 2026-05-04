import {
    type InferOutput,
    boolean,
    nullable,
    number,
    object,
    picklist,
    pipe,
    string,
    url,
} from 'valibot';

import { MemberCommittees } from '$lib/types/committees';

export const Member = object({
    id: number(),
    last_name: string(),
    nickname: string(),
    image_url: pipe(string(), url('Invalid image URL')),
    committee: picklist(Object.keys(MemberCommittees)),
    is_exec: boolean(),
    github_handle: nullable(string()),
    linkedin_url: nullable(pipe(string(), url('Invalid LinkedIn URL'))),
    instagram_url: nullable(pipe(string(), url('Invalid Instagram URL'))),
    website_url: nullable(pipe(string(), url('Invalid Website URL'))),
});

export interface Member extends Pick<
    InferOutput<typeof Member>,
    'id' | 'last_name' | 'nickname' | 'image_url'
> {
    committees: string[];
    socials: Record<string, string>;
}
