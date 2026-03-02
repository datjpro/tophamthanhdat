import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repository.toLowerCase().endsWith(".github.io");
const basePath = isGithubActions && repository && !isUserOrOrgSite ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
