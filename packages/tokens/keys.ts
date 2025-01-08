import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
  createEnv({
    server: {
      UNKEY_ROOT_KEY: z.string().min(1),
      UNKEY_SANDBOX_API: z.string().min(1),
    },
    client: {},
    runtimeEnv: {
      UNKEY_ROOT_KEY: process.env.UNKEY_ROOT_KEY,
      UNKEY_SANDBOX_API: process.env.UNKEY_SANDBOX_API,
    },
  });
