/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';

// const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [
        require('@tailwindcss/typography'),
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme('fontSize.8xl') },
                // 'h2': { fontSize: theme('fontSize.xl') },
                // 'h3': { fontSize: theme('fontSize.lg') },
            });
        }),
    ],
    theme: {
        extend: {
            backgroundImage: {
                'geometric-pattern':
                    "url('../../public/geometric-dotwork-bg-seamless.png')",
            },
            colors: {
                slate: {
                    925: '#060d1e',
                },
                indigo: {
                    325: '#9dadfd',
                    350: '#93a4fb',
                },
            },
            fontFamily: {
                main: 'var(--font-main)',
                h1: 'var(--font-h1-custom)',
            },
            typography: theme => ({
                DEFAULT: {
                    css: {
                        lineHeight: '1.6rem',
                        a: {
                            fontWeight: 400,
                        },
                        h1: { fontWeight: 500 },
                    },
                },
                // base: {
                //     css: [
                //         {
                //             h1: {
                //                 fontSize: em(36, 16),
                //                 marginTop: '0',
                //                 marginBottom: em(32, 36),
                //                 lineHeight: round(40 / 36),
                //             },
                //         },
                //     ],
                // },
                slate: {
                    css: {
                        '--tw-prose-body': theme('colors.slate[800]'),
                        '--tw-prose-headings': theme('colors.slate[800]'),
                        '--tw-prose-links': theme('colors.indigo[700]'),
                        '--tw-prose-invert-body': theme('colors.slate[200]'),
                        '--tw-prose-invert-headings': theme('colors.white'),
                    },
                },
            }),
        },
        screens: {
            xxs: '350px',
            xs: '560px',
            ...defaultTheme.screens,
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            smaller: '50%',
            const: '200px',
        },
        container: {
            center: true,
        },
    },
};
