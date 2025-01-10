'use client';

import type { Patient } from '@repo/client-js/models/fhir/Patient';
import { useEffect, useState } from 'react';
import { useNerveClient } from '../../client';
import type { EHRProvider, PermissionList } from '../nerve-integration';
import ConsentScreen from './ConsentScreen';
import EHRScreen from './EHRScreen';

export function AuthenticatedView() {
  const client = useNerveClient();
  const [patient, setPatient] = useState<Patient | null>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1>Authenticated</h1>
      <p>{JSON.stringify(patient, undefined, 2)}</p>
      <button
        type="button"
        onClick={() => {
          client.patient.read('erXuFYUfucBZaryVksYEcMg3').then((res) => {
            setPatient(res);
          });
        }}
      >
        On Click
      </button>
      <button
        type="button"
        onClick={() => {
          globalThis.localStorage.removeItem('__fhir_oauth_provider');
          globalThis.localStorage.removeItem('__fhir_access_token');
          globalThis.window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export function UnauthenticatedView({
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

  if (selectedProvider && permissions) {
    return (
      <ConsentScreen
        provider={selectedProvider}
        onAccept={() => {
          globalThis.localStorage.setItem(
            '__fhir_oauth_provider',
            JSON.stringify(selectedProvider)
          );

          client.authenticate().then((res) => {
            if (res.state === 'unauthenticated') {
              console.log(`${res.authUrl}`);
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

  return <EHRScreen providers={providers} />;
}

export function AuthStateWrapper({
  initialAuthState,
  initialProviders,
  initialPermissions,
}: {
  initialAuthState: boolean;
  initialProviders: EHRProvider[];
  initialPermissions: PermissionList;
}) {
  const [authenticatedState, setAuthenticatedState] =
    useState<boolean>(initialAuthState);
  const client = useNerveClient();

  useEffect(() => {
    if (!localStorage.getItem('__fhir_oauth_provider')) {
      setAuthenticatedState(false);
      return;
    }

    const selectedProviderJson = localStorage.getItem('__fhir_oauth_provider');
    const selectedProvider = JSON.parse(selectedProviderJson!);
    if (!selectedProvider) {
      setAuthenticatedState(false);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    if (params.has('code')) {
      client
        .authCallback(params.get('code')!)
        .then(() => client.getToken())
        .then((token) => {
          setAuthenticatedState(true);
        });
    } else if (localStorage.getItem('__fhir_access_token')) {
      setAuthenticatedState(true);
    } else {
      setAuthenticatedState(false);
    }
  }, [client]);

  return authenticatedState ? (
    <AuthenticatedView />
  ) : (
    <UnauthenticatedView
      initialProviders={initialProviders}
      initialPermissions={initialPermissions}
    />
  );
}
