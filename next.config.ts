import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  output: "export",
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
