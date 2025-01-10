'use server';

import {} from '@repo/design-system/components/ui/card';
import {} from 'lucide-react';
import type { JSX } from 'react';
import { AuthStateWrapper } from './EHRSelection/client-components';
import { mockEHRProviders } from './EHRSelection/mock-ehr-list';
import { mockPermissionList } from './EHRSelection/mock-permission-list';

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
  // try {
  //   const response = await fetch('/api/ehr-providers', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   // Simulate real API response
  //   await new Promise((resolve) => setTimeout(resolve, 300));
  //   return mockEHRProviders; // For now, still return mock data
  // } catch (error) {
  //   console.error('Failed to fetch EHR providers:', error);
    return mockEHRProviders; // Fallback to mock data
  
}

async function getPermissionList(): Promise<PermissionList> {
  // try {
  //   const response = await fetch('/api/permissions', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   // Simulate real API response
  //   await new Promise((resolve) => setTimeout(resolve, 300));
  //   return mockPermissionList; // For now, still return mock data
  // } catch (error) {
  //   console.error('Failed to fetch permissions:', error);
    return mockPermissionList; // Fallback to mock data
  
}

export default async function NerveSignIn() {
  const providers = await getEHRProviders();
  const permissions = await getPermissionList();
  const initialAuthState = false; // You might want to determine this server-side

  return (
    <div className="min-h-svh flex flex-row justify-center items-center">
      <AuthStateWrapper
        initialAuthState={initialAuthState}
        initialProviders={providers}
        initialPermissions={permissions}
      />
    </div>
  );
}
