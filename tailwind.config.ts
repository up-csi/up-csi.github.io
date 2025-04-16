import { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typo from '@tailwindcss/typography';

export default {
    content: ['./src/**/*.{css,html,js,svelte,ts}'],
    theme: {
        extend: {
            backgroundImage: {
                lino: 'url("$lib/assets/lino/lino-hero.svg")',
            },
            colors: {
                background: 'var(--color-background)',
                foreground: 'var(--color-foreground)',

                invert: 'var(--color-invert)',
                'invert-foreground': 'var(--color-invert-foreground)',

                primary: 'var(--color-primary)',
                'primary-foreground': 'var(--color-primary-foreground)',

                highlight: 'var(--color-highlight)',
                'highlight-foreground': 'var(--color-highlight-foreground)',

                secondary: 'var(--color-secondary)',
                'secondary-foreground': 'var(--color-secondary-foreground)',

                muted: 'var(--color-muted)',
                'muted-foreground': 'var(--color-muted-foreground)',

                button: 'var(--color-button)',
                'button-foreground': 'var(--color-button-foreground)',
                'button-hover': 'var(--color-button-hover)',

                filter: 'var(--color-filter)',
                'filter-foreground': 'var(--color-filter-foreground)',
                'filter-hover': 'var(--color-filter-hover)',
                'selected-filter': 'var(--color-selected-filter)',
                'selected-filter-foreground': 'var(--color-selected-filter-foreground)',

                float: 'var(--color-float)',
                'float-foreground': 'var(--color-float-foreground)',
            },
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': 'var(--color-foreground)',
                        '--tw-prose-headings': 'var(--color-foreground)',
                        '--tw-prose-bullets': 'var(--color-foreground)',
                    },
                },
            },
        },
    },
    plugins: [forms, typo],
} satisfies Config;
