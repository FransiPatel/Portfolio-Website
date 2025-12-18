import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Ensure this matches your repository name EXACTLY (case-sensitive)
  basePath: isProd ? "/Portfolio-Website" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
