import { env } from "@/env";
import { config, withAnalyzer } from "@nerve-js/next-config";
import { withLogtail, withSentry } from "@nerve-js/observability/next-config";
import type { NextConfig } from "next";

let nextConfig: NextConfig = withLogtail({ ...config });

nextConfig = withSentry(nextConfig);

if (env.ANALYZE === "true") {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
