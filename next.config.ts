import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shop.mango.com",
      },
    ],
  },
};

export default nextConfig;
