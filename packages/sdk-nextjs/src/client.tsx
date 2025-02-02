'use client';
import { Nerve, type Nerve as NerveType } from '@nerve-js/client';
import { createContext, useContext } from 'react';
import type React from 'react';

export interface NerveNextConfig {
  afterRedirectUrl: string;
  signInUrl: string;
}

interface NerveNextContext {
  client: NerveType;
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

export function useNerveClient(): NerveType {
  const context = useContext(NerveGlobalContext);

  if (context === undefined) {
    throw new Error('useNerveClient must be used within a NerveProvider');
  }

  return context.client;
}

export function useNerveConfig(): NerveNextConfig {
  const context = useContext(NerveGlobalContext);

  if (context === undefined) {
    throw new Error('useNerveConfig must be used within a NerveProvider');
  }

  return context.config;
}
