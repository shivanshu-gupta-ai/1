import type { NextConfig } from "next";

const repoName = "Shivanshu-portfolio"; 
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  output: "export", 
};

export default nextConfig;
