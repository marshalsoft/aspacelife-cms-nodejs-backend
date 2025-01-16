import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/error',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
