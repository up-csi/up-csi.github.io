import * as v from 'valibot';

export const committees = [
    'Executive',
    'Innovation',
    'Service',
    'External Relations',
    'Membership & Internals',
    'Branding & Creatives',
    'Engineering',
];

export interface Member extends v.InferOutput<typeof Member> {
    src: string;
}

export const Member = v.object({
    name: v.string(),
    title: v.string(),
    committee: v.picklist(committees),
    socials: v.optional(v.record(v.string(), v.pipe(v.string(), v.url()))),
});
