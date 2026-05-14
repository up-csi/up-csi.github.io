import { type InferOutput, object, picklist, string, pipe, url, nullable } from 'valibot';

import type { EventSession } from '$lib/types/event_session';
import type { State } from '$lib/types/state';

export const TAGS = [
    'EX Series',
    'Innov School/InnovCamp',
    'App Process',
    'Teambuilding',
    'Partnership',
    'Workshop',
    'Other',
    'Hackathon',
] as const;

export const Event = object({
    tag: picklist(TAGS),
    name: string(),
    description: string(),
    img_url: nullable(pipe(string(), url('Invalid image URL'))),
    slug: string(),
});

export interface Event extends InferOutput<typeof Event> {
    parsed_sessions: EventSession[];
    current_session: EventSession;
    state: State;
}
