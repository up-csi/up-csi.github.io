import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typo from '@tailwindcss/typography';

export default {
    darkMode: 'selector',
    content: ['./src/**/*.{css,html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            dm: ['DMSans', ...defaultTheme.fontFamily.sans],
            inter: ['Inter', ...defaultTheme.fontFamily.sans],
        },
        colors: {
            'csi-blue': '#00C6D7',
            'csi-black': '#212121',
            'csi-yellow': '#F7CF2F',
            'csi-white': '#F9FAFB',
            'csi-neutral': {
                '50': '#F6F6F6',
                '100': '#E7E7E7',
                '200': '#D1D1D1',
                '300': '#B0B0B0',
                '400': '#888888',
                '500': '#6D6D6D',
                '600': '#5D5D5D',
                '700': '#4F4F4F',
                '800': '#454545',
                '900': '#3D3D3D',
                '950': '#1D1D1D',
            },
            'warm-white': '#E0E1E0',
            'blue-white': '#D7E6ED',
            'blue-neutral': '#32718E',
            blue: '#35ADBB',
            black: '#253242',
            gray: '#A6A6A6',
            white: '#FFFFFF',
        },
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': theme('colors.csi-black'),
                        '--tw-prose-headings': theme('colors.csi-black'),
                        '--tw-prose-bullets': theme('colors.csi-black'),
                        '--tw-prose-invert-body': theme('colors.csi-white'),
                        '--tw-prose-invert-headings': theme('colors.csi-white'),
                        '--tw-prose-invert-bullets': theme('colors.csi-white'),
                    }
                }
            }),
            backgroundImage: {
                lino: 'url("$lib/lino-hero.svg")',
            },
        }
    },
    plugins: [forms, typo],
} satisfies Config;
