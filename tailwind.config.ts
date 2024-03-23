import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typo from '@tailwindcss/typography';

export default {
    darkMode: 'class',
    content: ['./src/**/*.{css,html,js,svelte,ts}'],
    theme: {
        backgroundImage: { lino: 'url("$lib/lino-hero.svg")' },
        fontFamily: {
            dm: ['DMSans', ...defaultTheme.fontFamily.sans],
            inter: ['Inter', ...defaultTheme.fontFamily.sans],
        },
        colors: {
            'csi-blue': '#00C6D7',
            'csi-black': '#212121',
            'csi-yellow': '#F7CF2F',
            'csi-white': '#F9FAFB',
            'warm-white': '#E0E1E0',
            'blue-white': '#D7E6ED',
            blue: '#35ADBB',
            black: '#253242',
            gray: '#A6A6A6',
            white: '#FFFFFF',
        },
    },
    plugins: [forms, typo],
} satisfies Config;
