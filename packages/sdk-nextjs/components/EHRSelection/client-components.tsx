<<<<<<< HEAD
"use client";

import type { Patient } from "@nerve-js/client/models/fhir/Patient";
import { useEffect, useState } from "react";
import { useNerveClient } from "../../client";
import type { EHRProvider, PermissionList } from "../nerve-sign-in";
import ConsentScreen from "./ConsentScreen";
import EHRScreen from "./EHRScreen";
=======
'use client';

import type { Patient } from '@repo/client-js/models/fhir/Patient';
import { useEffect, useState } from 'react';
import { useNerveClient } from '../../client';
import type { EHRProvider, PermissionList } from '../nerve-integration';
import ConsentScreen from './ConsentScreen';
import EHRScreen from './EHRScreen';
>>>>>>> 7e306a5 (abstracted nerve component)

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
<<<<<<< HEAD
          client.patient.read("erXuFYUfucBZaryVksYEcMg3").then((res) => {
=======
          client.patient.read('erXuFYUfucBZaryVksYEcMg3').then((res) => {
>>>>>>> 7e306a5 (abstracted nerve component)
            setPatient(res);
          });
        }}
      >
        On Click
      </button>
      <button
        type="button"
        onClick={() => {
<<<<<<< HEAD
          globalThis.localStorage.removeItem("__fhir_oauth_provider");
          globalThis.localStorage.removeItem("__fhir_access_token");
=======
          globalThis.localStorage.removeItem('__fhir_oauth_provider');
          globalThis.localStorage.removeItem('__fhir_access_token');
>>>>>>> 7e306a5 (abstracted nerve component)
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
<<<<<<< HEAD
    null,
=======
    null
>>>>>>> 7e306a5 (abstracted nerve component)
  );
  const client = useNerveClient();

  if (selectedProvider && permissions) {
    return (
      <ConsentScreen
        provider={selectedProvider}
        onAccept={() => {
          globalThis.localStorage.setItem(
<<<<<<< HEAD
            "__fhir_oauth_provider",
            JSON.stringify(selectedProvider),
          );

          client.authenticate().then((res) => {
            if (res.state === "unauthenticated") {
=======
            '__fhir_oauth_provider',
            JSON.stringify(selectedProvider)
          );

          client.authenticate().then((res) => {
            if (res.state === 'unauthenticated') {
>>>>>>> 7e306a5 (abstracted nerve component)
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

<<<<<<< HEAD
  return (
    <EHRScreen
      providers={providers}
      onProviderSelect={(provider) => setSelectedProvider(provider)}
    />
  );
=======
  return <EHRScreen providers={providers} />;
>>>>>>> 7e306a5 (abstracted nerve component)
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
<<<<<<< HEAD
    if (!localStorage.getItem("__fhir_oauth_provider")) {
=======
    if (!localStorage.getItem('__fhir_oauth_provider')) {
>>>>>>> 7e306a5 (abstracted nerve component)
      setAuthenticatedState(false);
      return;
    }

<<<<<<< HEAD
    const selectedProviderJson = localStorage.getItem("__fhir_oauth_provider");
=======
    const selectedProviderJson = localStorage.getItem('__fhir_oauth_provider');
>>>>>>> 7e306a5 (abstracted nerve component)
    const selectedProvider = JSON.parse(selectedProviderJson!);
    if (!selectedProvider) {
      setAuthenticatedState(false);
      return;
    }

    const params = new URLSearchParams(window.location.search);
<<<<<<< HEAD
    if (params.has("code")) {
      client
        .authCallback(params.get("code")!)
=======
    if (params.has('code')) {
      client
        .authCallback(params.get('code')!)
>>>>>>> 7e306a5 (abstracted nerve component)
        .then(() => client.getToken())
        .then((token) => {
          setAuthenticatedState(true);
        });
<<<<<<< HEAD
    } else if (localStorage.getItem("__fhir_access_token")) {
=======
    } else if (localStorage.getItem('__fhir_access_token')) {
>>>>>>> 7e306a5 (abstracted nerve component)
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
