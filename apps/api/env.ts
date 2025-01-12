import { keys as analytics } from "@nerve-js/analytics/keys";
import { keys as auth } from "@nerve-js/auth/keys";
import { keys as database } from "@nerve-js/database/keys";
import { keys as email } from "@nerve-js/email/keys";
import { keys as core } from "@nerve-js/next-config/keys";
import { keys as observability } from "@nerve-js/observability/keys";
import { keys as payments } from "@nerve-js/payments/keys";
import { keys as tokens } from "@nerve-js/tokens/keys";
import { keys as healthlake } from "@nerve-js/healthlake/keys";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [
    auth(),
    analytics(),
    core(),
    database(),
    email(),
    observability(),
    payments(),
    tokens(),
    healthlake(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
