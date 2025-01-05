import { env } from "@/env";
import { config, withAnalyzer } from "@repo/next-config";
import { withLogtail, withSentry } from "@repo/observability/next-config";
import type { NextConfig } from "next";

let nextConfig: NextConfig = withLogtail({ ...config });

nextConfig = withSentry(nextConfig);

if (env.ANALYZE === "true") {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
