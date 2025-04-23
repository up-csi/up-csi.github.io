import type { EnhancedImgAttributes } from "@sveltejs/enhanced-img";

import { type InferOutput, object, picklist, pipe, string, transform } from "valibot";

export const TAGS = [
    'EX Series',
    'App Process',
    'Teambuilding',
    'Partnership',
    'Workshop', 
    'Other'
] as const;

const TYPES = ['Internal', 'External'];

export const Event = object({
    tag: picklist(TAGS),
    type: picklist(TYPES),
    name: string(),
    description: string(),
    start_date: pipe(string(), transform(Date)),
    end_date: pipe(string(), transform(Date)),
    slug: string()
});

export interface Event extends InferOutput<typeof Event> {
    imgs: (EnhancedImgAttributes['src'])[]
}