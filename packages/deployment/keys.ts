import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
  createEnv({
    server: {
      DEPLOYMENT_URL: z.string().url().optional(),
    },
    client: {},
    runtimeEnv: {
      DEPLOYMENT_URL: process.env.DEPLOYMENT_URL,
    },
  });
