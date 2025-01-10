import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mining.com",
        pathname: "/**", // Allow all paths from this host
      },
    ],
  },
};

export default nextConfig;
