import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.html'],
    theme: { fontFamily: { sans: ['Panamera', 'ui-sans-serif', 'system-ui'] } },
    plugins: [forms],
} satisfies Config;
