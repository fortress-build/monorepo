import { keys as cms } from "@repo/cms/keys";
import { keys as email } from "@repo/email/keys";
import { keys as core } from "@nerve-js/next-config/keys";
import { keys as observability } from "@nerve-js/observability/keys";
import { keys as rateLimit } from "@repo/rate-limit/keys";
import { keys as security } from "@repo/security/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [cms(), core(), email(), observability(), security(), rateLimit()],
  server: {},
  client: {},
  runtimeEnv: {},
});
