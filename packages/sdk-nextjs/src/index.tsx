"use client";
import { KEYS } from "@nerve-js/client";

export {
  NerveProvider,
  type NerveNextConfig,
  useNerveConfig,
  useNerveClient,
} from "./client";
export { NerveCallback } from "./components/callback";
export { NerveSignIn } from "./components/sign-in";
export { Nerve } from "@nerve-js/client";
export { Authenticated } from "./components/authenticated";

import "./output.css";

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
