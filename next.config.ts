import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.sanity.io/images/rmnv3nxc/production/**"),
    ],
  },
};

export default nextConfig;
