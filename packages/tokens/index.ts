import "server-only";

import { Unkey } from "@unkey/api";
import { keys } from "./keys";

export * from "@unkey/api";

export const unkey = new Unkey({
  rootKey: keys().UNKEY_ROOT_KEY,
});
