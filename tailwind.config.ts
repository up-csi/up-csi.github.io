import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typo from '@tailwindcss/typography';

export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.html'],
    theme: { fontFamily: { heading: ['Panamera', ...defaultTheme.fontFamily.sans] } },
    plugins: [forms, typo],
} satisfies Config;
