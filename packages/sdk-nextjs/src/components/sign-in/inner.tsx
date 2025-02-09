'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/compat/router';
import { useNerveClient, useNerveConfig } from '../../client';
import type { EHRProvider, PermissionList } from '../../components/sign-in';
import ConsentScreen from '../../components/sign-in/consent';
import EHRScreen from '../../components/sign-in/provider-selection';

export function SignInInner({
  initialProviders,
  initialPermissions,
}: {
  initialProviders: EHRProvider[];
  initialPermissions: PermissionList;
}) {
  const [providers] = useState<EHRProvider[]>(initialProviders);
  const [permissions] = useState<PermissionList>(initialPermissions);
  const [selectedProvider, setSelectedProvider] = useState<EHRProvider | null>(
    null
  );
  const client = useNerveClient();
  const config = useNerveConfig();
  const router = useRouter();


  useEffect(() => {
    if (router && !router.isReady) {
      return;
    }
    if (client.isAuthenticated()) {
      if (!router) {
        console.log(router);
        return;
      }
      router.replace(config.afterRedirectUrl);
    }
  }, [router, client, config]);

  if (selectedProvider && permissions) {
    return (
      <ConsentScreen
        provider={selectedProvider}
        onAccept={() => {
          client.setProvider({
            fhirUrl: selectedProvider.fhirUrl,
            authUrl: selectedProvider.authUrl,
            clientId: selectedProvider.clientId,
          });

          client.authenticate().then((res) => {
            if (res.state === 'unauthenticated') {
              globalThis.window.location.assign(res.authUrl);
              return;
            }
          });
        }}
        onBack={() => setSelectedProvider(null)}
        healthInfo={permissions}
      />
    );
  }

  return (
    <EHRScreen
      providers={providers}
      onProviderSelect={(provider) => setSelectedProvider(provider)}
    />
  );
}
