/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/board/list',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
