/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: './build', // Changes the build output directory

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
            },
        ],
        // minimumCacheTTL: 3600,
    },

    // compiler: {
    //     removeConsole: {
    //         exclude: ['error'],
    //     },
    // },
};

module.exports = nextConfig;
