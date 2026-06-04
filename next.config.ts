import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-85c4415b8777427885a5ec962d4969d2.r2.dev",
      },
    ],
  },
};

export default nextConfig;
