import { type InferOutput, object, picklist, string } from "valibot";

export const TAGS = [
    'EX Series',
    'App Process',
    'Teambuilding',
    'Partnership',
    'Workshop', 
    'Other'
] as const;
const STATES = ['Past', 'Ongoing', 'Future'];
const TYPES = ['Internal', 'External']

export const Event = object({
    tag: picklist(TAGS),
    state: picklist(STATES),
    type: picklist(TYPES),
    name: string(),
    description: string(),
    start_date: string(),
    end_date: string(),
    slug: string()
});

export interface Event extends InferOutput<typeof Event> {
    parsed_start_date: Date;
    parsed_end_date: Date;
}