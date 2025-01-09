"use client";

import { Button } from "@repo/design-system/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/design-system/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/design-system/components/ui/tabs";
import { Copy } from "lucide-react";
import type React from "react";
import { useQuery } from "@tanstack/react-query";

const mockCredentials = {
  clientId: "sandbox-client-123",
  clientSecret: "sandbox-secret-456",
  apiKey: "sk_sandbox_abcdef123456",
};

function Tab({
  title,
  value,
  children,
}: {
  title: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <TabsContent value={value}>
      <div className="border-0 shadow-none flex flex-col gap-6">
        <div className={"flex flex-col space-y-1.5"}>
          <div className={"font-semibold leading-none tracking-tight"}>
            {title}
          </div>
        </div>
        <div className="space-y-6">{children}</div>
      </div>
    </TabsContent>
  );
}

function SandboxCredentials() {
  const { data: credentials, isLoading } = useQuery({
    queryKey: ["sandbox-credentials"],
    queryFn: () => mockCredentials,
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Tab value="credentials" title="Sandbox EHR Credentials">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="space-y-4">
            {Object.entries(credentials ?? []).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <span className="font-medium text-gray-500 text-sm capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <div className="flex items-center space-x-2">
                  <code className="flex-1 rounded-md bg-gray-100 p-2 font-mono text-sm">
                    {value}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(value)}
                    className="focus:ring-0 focus-visible:ring-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-gray-500 text-sm">
            These credentials are for testing purposes only and provide access
            to mock data.
          </div>
        </>
      )}
    </Tab>
  );
}

function FHIRResources() {
  return (
    <Tab value="resources" title="Available FHIR Resources">
      <ul className="space-y-2">
        <li>Patient</li>
        <li>Observation</li>
        <li>Condition</li>
        <li>Encounter</li>
        {/* Add more resources as needed */}
      </ul>
    </Tab>
  );
}

function MockUsers() {
  return (
    <Tab value="users" title="Create Mock Users">
      <p className="mb-4 text-muted-foreground">
        Create test users for your sandbox environment.
      </p>
      <Button>Generate Mock User</Button>
    </Tab>
  );
}

export default function SandboxPage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="font-bold text-2xl tracking-tight">API Sandbox</h1>
        <p className="text-muted-foreground">
          Test your integration with our API using these sandbox credentials.
        </p>
      </div>

      <Tabs defaultValue="credentials" className="space-y-4">
        <TabsList>
          <TabsTrigger value="credentials">Credentials</TabsTrigger>
          <TabsTrigger value="resources">FHIR Resources</TabsTrigger>
          <TabsTrigger value="users">Mock Users</TabsTrigger>
        </TabsList>

        <SandboxCredentials />

        <FHIRResources />

        <MockUsers />
      </Tabs>
    </div>
  );
}
