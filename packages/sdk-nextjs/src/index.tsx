// "use client";
// import { KEYS } from "@nerve-js/client";

// export {
//   NerveProvider,
//   type NerveNextConfig,
//   useNerveConfig,
//   useNerveClient,
// } from "./client";
// export { NerveCallback } from "./components/callback";
// export { NerveSignIn } from "./components/sign-in";
// export { Nerve } from "@nerve-js/client";
// export { Authenticated } from "./components/authenticated";

// import "./output.css";

// export function signOut() {
//   if (typeof window === "undefined") {
//     throw new Error(
//       "signOut must be called in the browser when using the client-side API",
//     );
//   }

//   window.localStorage.removeItem(KEYS.PROVIDER);
//   window.localStorage.removeItem(KEYS.TOKEN);

//   window.location.reload();
// }

'use client';
import { KEYS, Nerve} from '@nerve-js/client';
export { NerveCallback } from './components/callback';
export { NerveSignIn } from './components/sign-in';
export { Authenticated } from './components/authenticated';
import { createContext, useContext } from 'react';
import type React from 'react';

import './output.css';

export function signOut() {
  if (typeof window === 'undefined') {
    throw new Error(
      'signOut must be called in the browser when using the client-side API'
    );
  }

  window.localStorage.removeItem(KEYS.PROVIDER);
  window.localStorage.removeItem(KEYS.TOKEN);

  window.location.reload();
}


export interface NerveNextConfig {
  afterRedirectUrl: string;
  signInUrl: string;
}

export interface NerveNextContext {
  client: Nerve;
  config: NerveNextConfig;
}

const NerveGlobalContext = createContext<NerveNextContext | undefined>(
  undefined
);

export function NerveProvider({
  children,
  redirectUrl,
  afterRedirectUrl,
  signInUrl,
  scopes = ['openid', 'fhirUser', 'user/*.*'],
}: {
  children: React.ReactNode;
  redirectUrl: string;
  afterRedirectUrl: string;
  signInUrl: string;
  scopes?: string[];
}) {
  return (
    <NerveGlobalContext.Provider
      value={{
        client: new Nerve({
          redirectUrl,
          scopes,
        }),
        config: {
          afterRedirectUrl,
          signInUrl,
        },
      }}
    >
      {children}
    </NerveGlobalContext.Provider>
  );
}

export function useNerveClient(): Nerve {
  const context = useContext<NerveNextContext | undefined>(NerveGlobalContext);

  if (context === undefined) {
    throw new Error('useNerveClient must be used within a NerveProvider');
  }

  return context.client;
}

export function useNerveConfig(): NerveNextConfig {
  const context = useContext<NerveNextContext | undefined>(NerveGlobalContext);

  if (context === undefined) {
    throw new Error('useNerveConfig must be used within a NerveProvider');
  }

  return context.config;
}