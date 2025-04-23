import { type Event, TAGS as eventTags } from '$lib/models/event';

import { getEvents } from "$lib/data/events";

export async function load() {
    const events = await getEvents();

    const filteredEvents: Record<string, Event[]> = {};
    eventTags.forEach(eventTag => {
        filteredEvents[eventTag] = events.filter(({ tag }) => { return tag === eventTag });
    });

    return { events, filteredEvents }
}