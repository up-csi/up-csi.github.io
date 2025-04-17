import { getEvents } from "$lib/data/events";

export async function load() {
    return { events: await getEvents() }
}