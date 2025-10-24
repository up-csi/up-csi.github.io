import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * @import { Config } from '@sveltejs/kit'
 * @type {Config}
 */
export default {
    extensions: ['.svelte', '.md'],
    preprocess: vitePreprocess(),
    kit: { adapter: adapter({ fallback: '404.html' }) },
};
