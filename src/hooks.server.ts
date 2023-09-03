import type { Handle } from '@sveltejs/kit';
import { building } from '$app/environment';
import nano from 'htmlnano';

// https://kit.svelte.dev/docs/migrating#integrations-html-minifier
export const handle = (({ event, resolve }) => {
    let page = '';
    return resolve(event, {
        async transformPageChunk({ html, done }) {
            page += html;
            if (!done) return;
            if (!building) return page;
            const { html: result } = await nano.process(page, {}, nano.presets.safe);
            return result;
        },
    });
}) satisfies Handle;
