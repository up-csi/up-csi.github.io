import { type InferOutput, array, object, picklist, string } from 'valibot';

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
] as const;

export const Event = object({
    tag: picklist(TAGS),
    name: string(),
    description: string(),
    sessions: array(string()),
    slug: string(),
});

export interface Event extends InferOutput<typeof Event> {
    parsed_sessions: EventSession[];
    current_session: EventSession;
    state: State;
}
