'use client';

import { FHIRClient } from 'fhirball';
import { createContext } from 'react';

export const ClientContext = createContext<FHIRClient>(
  undefined as unknown as FHIRClient
);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientContext.Provider
        value={
          new FHIRClient({
            redirectUrl: 'http://localhost:3000/',
            scope: 'openid fhirUser user/*.*',
          })
        }
      >
        {children}
      </ClientContext.Provider>
    </>
  );
}
