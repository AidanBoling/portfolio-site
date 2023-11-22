/** @type {import('tailwindcss').Config} */
module.exports = {
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
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            smaller: '50%',
        },
    },
    plugins: [],
};
