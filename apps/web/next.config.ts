import { env } from "@/env";
import { withCMS } from "@repo/cms/next-config";
import { config, withAnalyzer } from "@nerve-js/next-config";
import { withLogtail, withSentry } from "@nerve-js/observability/next-config";
import type { NextConfig } from "next";

let nextConfig: NextConfig = withLogtail({ ...config });

nextConfig.images?.remotePatterns?.push({
  protocol: "https",
  hostname: "assets.basehub.com",
});

if (process.env.NODE_ENV === "production") {
  const redirects: NextConfig["redirects"] = async () => [
    {
      source: "/legal",
      destination: "/legal/privacy",
      statusCode: 301,
    },
  ];

  nextConfig.redirects = redirects;
}

nextConfig = withSentry(nextConfig);

if (env.ANALYZE === "true") {
  nextConfig = withAnalyzer(nextConfig);
}

export default withCMS(nextConfig);
