import { env } from "@/env";
import type { MetadataRoute } from "next";

const protocol = env.DEPLOYMENT_URL?.startsWith("https") ? "https" : "http";
const url = new URL(`${protocol}://${env.DEPLOYMENT_URL}`);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", url.href).href,
  };
}
