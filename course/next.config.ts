import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
    domains: ["example.com"],
  },
};

export default nextConfig;
