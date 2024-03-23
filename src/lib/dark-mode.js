import { browser } from '$app/environment';
import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<Boolean>} */
export let darkMode = writable(
    (browser)
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false
);

darkMode.subscribe(($darkMode) => {
    if (browser) {
        ($darkMode)
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    }
});