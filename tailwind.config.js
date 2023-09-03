import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typo from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: { fontFamily: { heading: ['Panamera', ...defaultTheme.fontFamily.sans] } },
    plugins: [forms, typo],
};
