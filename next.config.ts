import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://176.97.218.63/api/:path*',
      },
    ];
  },
};

export default nextConfig;
