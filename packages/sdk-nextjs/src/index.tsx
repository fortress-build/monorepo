"use client";
import { KEYS } from "@nerve-js/client";

export {
  NerveProvider,
  type NerveNextConfig,
  useNerveConfig,
  useNerveClient,
} from "@/client.tsx";
export { NerveCallback } from "@/components/callback.tsx";
export { NerveSignIn } from "@/components/sign-in/index.tsx";
export { Nerve } from "@nerve-js/client";
export { Authenticated } from "@/components/authenticated.tsx";

import "../dist/next.css";

export function signOut() {
  if (typeof window === "undefined") {
    throw new Error(
      "signOut must be called in the browser when using the client-side API",
    );
  }

  window.localStorage.removeItem(KEYS.PROVIDER);
  window.localStorage.removeItem(KEYS.TOKEN);

  window.location.reload();
}
