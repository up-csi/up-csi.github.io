import * as v from 'valibot';

export const COMMITTEES = [
    'Executive',
    'Innovation',
    'Service',
    'External Relations',
    'Membership & Internals',
    'Branding & Creatives',
    'Engineering',
] as const;

export interface Member extends v.InferOutput<typeof Member> {
    src: string;
}

export const Member = v.object({
    name: v.string(),
    title: v.string(),
    committee: v.picklist(COMMITTEES),
    socials: v.optional(v.record(v.string(), v.pipe(v.string(), v.url()))),
});
