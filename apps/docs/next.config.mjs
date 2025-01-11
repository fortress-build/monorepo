import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "standalone",
  reactStrictMode: true,
  serverExternalPackages: [
    // "twoslash",
    "typescript",
    // "@repo/sdk-nextjs",
    // "lucide-react",
  ],
};

export default withMDX(config);
