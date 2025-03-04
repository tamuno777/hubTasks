import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placekitten.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "dummyimage.com" },
    ],
  },
}

export default nextConfig;
