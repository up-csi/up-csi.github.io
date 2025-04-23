import type { EnhancedImgAttributes } from '@sveltejs/enhanced-img';

import { parse } from 'valibot';

import { type Event, Event as EventSchema } from '$lib/models/event';

export async function getEvents() {
    const imports = import.meta.glob<Event>('./json/*.json');

    const promises = Object.entries(imports).map(async ([_, asset]) => {
        const event = parse(EventSchema, await asset());

        const imgs: (EnhancedImgAttributes['src'])[] = [];
        for (let i = 0; i < 5; i++) {
            try {
                imgs.push((await import(`$lib/assets/events/${event.slug}/${i}.webp?enhanced?url`)).default);
            } catch {
                break;
            }
        }

        const parsed_event: Event = { ...event, imgs }
        return parsed_event;
    });

    return await Promise.all(promises);
}
