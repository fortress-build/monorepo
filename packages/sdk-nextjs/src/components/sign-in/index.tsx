"use client";
import { useState, type JSX } from "react";
import { SignInInner } from "../../components/sign-in/inner";
import {
  mockEHRProviders,
  mockPermissionList,
} from "../../components/sign-in/mocks";

import { Loader } from "lucide-react";

export interface EHRProvider {
  name: string;
  authUrl: string;
  fhirUrl: string;
  clientId: string;
  icon: JSX.Element;
}

export interface Permission {
  title: string;
  details: string;
  fhirResources: {
    name: string;
    description: string;
  }[];
}

export interface PermissionList {
  read: Permission[];
  write: Permission[];
}

async function getEHRProviders(): Promise<EHRProvider[]> {
  return mockEHRProviders;
}

async function getPermissionList(): Promise<PermissionList> {
  return mockPermissionList;
}

export function NerveSignIn() {
  const [loading, setLoading] = useState(true);
  const [providers, setProviders] = useState<EHRProvider[] | null>(null);
  const [permissions, setPermissions] = useState<PermissionList | null>(null);

  Promise.all([getEHRProviders(), getPermissionList()]).then(
    ([providers, permissions]) => {
      setProviders(providers);
      setPermissions(permissions);
      setLoading(false);
    },
  );

  return (
    <div className="flex flex-row justify-center items-center">
      {loading ? (
        <div className="w-full h-full">
          <Loader className="animate-spin w-5" />
        </div>
      ) : (
        <SignInInner
          initialProviders={providers ?? []}
          initialPermissions={{
            read: permissions?.read ?? [],
            write: permissions?.write ?? [],
          }}
        />
      )}
    </div>
  );
}
