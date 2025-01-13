"use server";

import type { JSX } from "react";
import { SignInInner } from "./inner";
import { mockEHRProviders, mockPermissionList } from "./mocks";

import "../../output.css";

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

export async function NerveSignIn() {
  const providers = await getEHRProviders();
  const permissions = await getPermissionList();

  return (
    <div className="min-h-svh flex flex-row justify-center items-center">
      <SignInInner
        initialProviders={providers}
        initialPermissions={permissions}
      />
    </div>
  );
}
