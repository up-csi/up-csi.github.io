import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
// @ts-expect-error This module currently does not provide type declarations.
import pruneVar from 'postcss-prune-var';
import purgeCss from '@fullhuman/postcss-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwind from 'tailwindcss';

export default defineConfig({
    plugins: [sveltekit()],
    css: {
        postcss: {
            plugins: [
                tailwind,
                autoprefixer,
                pruneVar,
                purgeCss({
                    content: ['src/**/*.{css,html,js,svelte,ts}'],
                    defaultExtractor(content) {
                        // Once Tailwind is able to prune global variables more effectively,
                        // we must use third-party PostCSS plugins for the meantime.
                        // https://github.com/FullHuman/purgecss/issues/796
                        return content.match(/[\w-/:[\]]+(?<!:)/g) || [];
                    },
                }),
            ],
        },
    },
});
