import { keys as analytics } from "@nerve-js/analytics/keys";
import { keys as auth } from "@nerve-js/auth/keys";
import { keys as database } from "@nerve-js/database/keys";
import { keys as email } from "@nerve-js/email/keys";
import { keys as core } from "@nerve-js/next-config/keys";
import { keys as observability } from "@nerve-js/observability/keys";
import { keys as security } from "@nerve-js/security/keys";
import { keys as webhooks } from "@nerve-js/webhooks/keys";
import { keys as deployment } from "@nerve-js/deployment/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [
    auth(),
    analytics(),
    core(),
    database(),
    email(),
    observability(),
    security(),
    webhooks(),
    deployment(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
