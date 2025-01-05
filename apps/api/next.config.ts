import { env } from "@/env";
import { config, withAnalyzer } from "@repo/next-config";
import { withLogtail, withSentry } from "@repo/observability/next-config";
import type { NextConfig } from "next";

let nextConfig: NextConfig = withSentry(withLogtail({ ...config }));

if (env.ANALYZE === "true") {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
