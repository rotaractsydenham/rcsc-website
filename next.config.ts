import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  // These are only used when building for GitHub Pages.
  basePath: isGithubActions ? "/rcsc-website" : "",
  assetPrefix: isGithubActions ? "/rcsc-website/" : "",
};

export default nextConfig;