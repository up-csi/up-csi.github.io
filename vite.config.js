import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';

import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';

export default defineConfig({
    plugins: [enhancedImages(), sveltekit(), purgeCss()],
    css: { postcss: { plugins: [tailwind, autoprefixer] } },
});
