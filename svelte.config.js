import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: ['.svelte', '.md'],
    preprocess: vitePreprocess(),
    kit: { 
        adapter: adapter({ fallback: '404.html' }), 
        alias: {
            $lib: 'src/lib',
            $routes: 'src/routes',
            $static: 'static'
        }
    },
};
