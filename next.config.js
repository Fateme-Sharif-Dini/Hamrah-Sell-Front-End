/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://176.97.218.63/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
