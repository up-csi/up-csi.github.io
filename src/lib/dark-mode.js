import { browser } from '$app/environment';
import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<Boolean>} */
export const darkMode = writable(
    browser ? window.matchMedia('(prefers-color-scheme: dark)').matches : false,
);

darkMode.subscribe($darkMode => {
    if (browser)
        if ($darkMode) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
});
