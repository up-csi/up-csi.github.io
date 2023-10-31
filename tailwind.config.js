import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typo from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.{css,html,js,svelte,ts}'],
    theme: {
        backgroundImage: { lino: 'url("$lib/lino-hero.svg")' },
        fontFamily: { heading: ['Panamera', ...defaultTheme.fontFamily.sans] },
        colors: {
            black: {
                DEFAULT: '#212121',
                50: '#1E1E1E',
            },
            blue: {
                DEFAULT: '#00C6D7',
                50: '#00747E',
            },
            white: {
                DEFAULT: '#F9FAFB',
                50: '#FFFFFF',
            },
            yellow: '#F7CF2F',
        },
    },
    plugins: [forms, typo],
};
