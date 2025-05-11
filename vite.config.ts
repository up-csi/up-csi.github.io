import path from 'path';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    resolve: {
        alias: {
            $lib: path.resolve('src/lib'),
            $routes: path.resolve('/src/routes'),
            $static: path.resolve('static')
        },
    },
    plugins: [enhancedImages(), sveltekit(), tailwindcss()],
});
