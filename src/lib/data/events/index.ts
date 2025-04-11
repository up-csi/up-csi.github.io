import { parse } from 'valibot';

import { type Event, Event as EventSchema } from '$lib/models/event';

export async function getEvents() {
    const imports = import.meta.glob<Event>('./json/*.json');

    const promises = Object.entries(imports).map(async ([_, asset]) => {
        const event = parse(EventSchema, await asset());
        const parsed_start_date = new Date(event.start_date);
        const parsed_end_date = new Date(event.end_date);

        const parsed_event: Event = { ...event, parsed_start_date, parsed_end_date }
        return parsed_event;
    });

    return await Promise.all(promises);
}
