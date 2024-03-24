import { type Readable, writable } from 'svelte/store';
import { getContext, hasContext, setContext } from 'svelte';
import { assert } from '$lib/assert';
import { browser } from '$app/environment';

const KEY = 'theme';
const THEME = Symbol(KEY);

interface Store {
    subscribe: Readable<boolean>['subscribe'];
    toggle: () => void;
}

function getTheme() {
    const result = localStorage.getItem(KEY);
    return result === null ? null : Boolean(JSON.parse(result));
}

function persistTheme(isDark: boolean) {
    localStorage.setItem(KEY, isDark ? '1' : '0');
}

function resetTheme() {
    localStorage.removeItem(KEY);
}

/** Assumes browser environment. */
function createBrowserThemeStore() {
    const media = matchMedia('(prefers-color-scheme: dark)');
    const init = getTheme() ?? media.matches;
    const { subscribe, update } = writable(init, set => {
        // eslint-disable-next-line func-style
        const listener = ({ matches }: MediaQueryListEvent) => {
            // Reset the storage because this is an off-browser override
            resetTheme();
            set(matches);
        };
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    });
    return {
        subscribe,
        toggle() {
            update(value => {
                const toggled = !value;
                persistTheme(toggled);
                return toggled;
            });
        },
    };
}

function createNullThemeStore() {
    const { subscribe, update } = writable(false);
    return {
        subscribe,
        toggle() {
            update(value => !value);
        },
    };
}

export function init() {
    const init = browser ? createBrowserThemeStore : createNullThemeStore;
    setContext(THEME, init());
}

export function get() {
    assert(hasContext(THEME), 'theme store not yet initialized');
    return getContext<Store>(THEME);
}
