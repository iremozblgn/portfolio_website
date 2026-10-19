import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Vercel's output tracing scoped to this project when parent lockfiles exist.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
