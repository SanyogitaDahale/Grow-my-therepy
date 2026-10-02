import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // 50 is used for the banner photo, which always sits under a dark overlay.
    qualities: [50, 75],
  },
};

export default nextConfig;
