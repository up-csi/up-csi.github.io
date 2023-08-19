import type { Config } from 'tailwindcss';

export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.html'],
    theme: { fontFamily: { sans: ['Panamera', 'ui-sans-serif', 'system-ui'] } },
} satisfies Config;
