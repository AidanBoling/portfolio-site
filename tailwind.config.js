/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
            },
            typography: {
                DEFAULT: {
                    css: {
                        lineHeight: '1.6rem',
                        a: {
                            color: '#3182ce',
                            '&:hover': {
                                color: '#2c5282',
                            },
                        },
                    },
                },
            },
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            smaller: '50%',
        },
        container: {
            center: true,
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
