import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

import { parse } from 'valibot';

import { type Event, Event as EventSchema } from '$lib/models/event';
import type { State } from '$lib/types/state';

import { type EventSession, dummy_session } from '$lib/types/event_session';

export async function getEvents() {
    const imports = import.meta.glob<Event>('./json/*.json');

    const promises = Object.entries(imports).map(async ([_, asset]) => {
        const event = parse(EventSchema, await asset());

        const parsed_sessions: EventSession[] = [];
        event.sessions.forEach(detail => {
            const [type, start, end, description] = detail.split('|');
            if ((type === 'Internal' || type === 'External') && start && end) {
                const new_session: EventSession = {
                    type,
                    start: new Date(start),
                    end: new Date(end),
                    description: description ?? null,
                };
                parsed_sessions.push(new_session);
            }
        });
        parsed_sessions.sort((a, b) => {
            return b.end.getTime() - a.end.getTime();
        });

        let state: State = 'Past';
        const present = new Date().getTime();
        let current_session: EventSession = parsed_sessions[0] ?? dummy_session;
        parsed_sessions.forEach(ps => {
            const { start, end } = ps;
            if (end.getTime() < present) {
                state = 'Past';
            } else if (start.getTime() <= present) {
                state = 'Ongoing';
                current_session = ps;
            } else {
                if (state === 'Past') {
                    current_session = ps;
                }
                state = 'Future';
            }
        });
        if (state === 'Past') {
            current_session = parsed_sessions[parsed_sessions.length - 1] ?? dummy_session;
        }

        const parsed_event: Event = { ...event, parsed_sessions, current_session, state };
        return parsed_event;
    });

    return await Promise.all(promises);
}
