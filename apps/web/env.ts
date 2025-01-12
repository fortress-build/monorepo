import { keys as cms } from "@nerve-js/cms/keys";
import { keys as email } from "@nerve-js/email/keys";
import { keys as core } from "@nerve-js/next-config/keys";
import { keys as observability } from "@nerve-js/observability/keys";
import { keys as rateLimit } from "@nerve-js/rate-limit/keys";
import { keys as security } from "@nerve-js/security/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [cms(), core(), email(), observability(), security(), rateLimit()],
  server: {},
  client: {},
  runtimeEnv: {},
});
