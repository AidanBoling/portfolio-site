/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: './build', // Changes the build output directory

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dg8lucrkskkqo.cloudfront.net',
                port: '',
            },
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

    // experimental: {
    //     scrollRestoration: true,
    // },

    // compiler: {
    //     removeConsole: {
    //         exclude: ['error'],
    //     },
    // },
};

module.exports = nextConfig;
