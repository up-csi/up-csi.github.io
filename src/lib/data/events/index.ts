import { parse } from 'valibot';

import { type Event, Event as EventSchema } from '$lib/models/event';
import type { State } from '$lib/types/state';

import { supabase } from '$lib/supabaseClient';

import { type EventSession, dummy_session } from '$lib/types/event_session';

export async function getEvents() {
    const { data, error } = await supabase
        .from('events')
        .select(
            `
            id, name, tag, description, img_url, slug,
            event_sessions (audience_type, start_time, end_time, session_desc)
        `,
        )
        .order('id');

    if (error) throw new Error('events data fetching error');

    const events: Event[] = [];
    for (const eventData of data ?? []) {
        const event = parse(EventSchema, eventData);

        const currEventSessions = eventData.event_sessions ?? [];

        const parsed_sessions: EventSession[] = currEventSessions.map(s => ({
            type: s.audience_type as 'Internal' | 'External',
            start: new Date(s.start_time),
            end: new Date(s.end_time),
            description: s.session_desc ?? null,
        }));

        parsed_sessions.sort((a, b) => b.end.getTime() - a.end.getTime());

        let state: State = 'Past';
        const present = new Date().getTime();
        let current_session: EventSession = parsed_sessions[0] ?? dummy_session;
        for (const ps of parsed_sessions) {
            const { start, end } = ps;
            if (end.getTime() < present) {
                state = 'Past';
            } else if (start.getTime() <= present) {
                state = 'Ongoing';
                current_session = ps;
            } else {
                if (state === 'Past') current_session = ps;

                state = 'Future';
            }
        }

        if (state === 'Past')
            current_session = parsed_sessions[parsed_sessions.length - 1] ?? dummy_session;

        events.push({ ...event, parsed_sessions, current_session, state } as Event);
    }

    return events;
}
