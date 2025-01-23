"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { type JSX, useEffect, useState } from "react";

interface EHRProvider {
  name: string;
  authUrl: string;
  fhirUrl: string;
  clientId: string;
  icon: JSX.Element;
  docsUrl: string;
}

//This is a static list
const ehrProviders: EHRProvider[] = [
  {
    name: "Epic",
    authUrl: "https://fhir.epic.com/interconnect-fhir-oauth/oauth2",
    fhirUrl: "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
    clientId: "de0e1685-2b74-403f-b9b3-bda29bfc3e8a",
    icon: <Image src="/ehrs/Epic.svg" alt="Epic" width={24} height={24} />,
    docsUrl: "https://docs.nerve.run/ehr/epic",
  },
  {
    name: "Cerner",
    authUrl: "https://fhir.cerner.com/auth",
    fhirUrl: "https://fhir.cerner.com/r4",
    clientId: "",
    icon: <Image src="/ehrs/Cerner.svg" alt="Cerner" width={24} height={24} />,
    docsUrl: "https://docs.nerve.run/ehr/cerner",
  },
  {
    name: "Athena Health",
    authUrl: "https://api.athenahealth.com/oauth",
    fhirUrl: "https://api.athenahealth.com/fhir/r4",
    clientId: "",
    icon: (
      <Image src="/ehrs/AthenaHealth.svg" alt="Cerner" width={24} height={24} />
    ),
    docsUrl: "https://docs.nerve.run/ehr/athena-health",
  },
  {
    name: "AllScripts",
    authUrl: "https://allscripts.com/auth",
    fhirUrl: "https://allscripts.com/fhir/r4",
    clientId: "",
    icon: (
      <Image src="/ehrs/Allscripts.svg" alt="Cerner" width={24} height={24} />
    ),
    docsUrl: "https://docs.nerve.run/ehr/allscripts",
  },
  {
    name: "NextGen Healthcare",
    authUrl: "https://nextgen.com/auth",
    fhirUrl: "https://nextgen.com/fhir/r4",
    clientId: "",
    icon: <Image src="/ehrs/NextGen.svg" alt="Cerner" width={24} height={24} />,
    docsUrl: "https://docs.nerve.run/ehr/nextgen-healthcare",
  },
  {
    name: "eClinicalWorks",
    authUrl: "https://eclinicalworks.com/auth",
    fhirUrl: "https://eclinicalworks.com/fhir/r4",
    clientId: "",
    icon: (
      <Image
        src="/ehrs/eClinicalWorks.svg"
        alt="Cerner"
        width={24}
        height={24}
      />
    ),
    docsUrl: "https://docs.nerve.run/ehr/eclinicalworks",
  },
  // Add more providers as needed
];

function ProviderButton({
  provider,
  isLast,
  select,
}: {
  provider: EHRProvider;
  isLast?: boolean;
  select: (provider: EHRProvider) => void;
}) {
  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-between rounded-lg border px-4 py-4 hover:bg-gray-50"
        onClick={() => {
          const serializableProvider = {
            name: provider.name,
            authUrl: provider.authUrl,
            fhirUrl: provider.fhirUrl,
            clientId: provider.clientId,
            docsUrl: provider.docsUrl,
          };
          globalThis.localStorage.setItem(
            "__fhir_oauth_provider",
            JSON.stringify(serializableProvider),
          );
          window.location.href = provider.docsUrl;
        }}
      >
        <div className="flex items-center gap-4">
          {provider.icon}
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {provider.name}
          </span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-gray-500" />
      </div>
      {/*isLast ? null : <div className="border-b border-gray-200 my-0" />*/}
    </div>
  );
}

function Unauthenticated() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProviders = ehrProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex h-[600px] items-center">
      <Card className="w-[500px] border shadow-[0_2px_30px_-2px_rgba(20,46,78,0.15)]">
        <CardHeader className="flex flex-col gap-2">
          <CardTitle>Select Your EHR Provider</CardTitle>
          <Input
            type="search"
            className="h-8 text-sm"
            placeholder="Search EHRs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </CardHeader>
        <CardContent>
          <div
            className={`grid max-h-[180px] grid-cols-2 gap-1 ${
              filteredProviders.length > 6 ? "overflow-y-scroll" : "grid-rows-3"
            }`}
          >
            {filteredProviders.map((provider, index) => (
              <ProviderButton
                key={`${provider.name}-${index}`}
                provider={provider}
                isLast={index === filteredProviders.length - 1}
                select={(provider) => {
                  globalThis.localStorage.setItem(
                    "__fhir_oauth_provider",
                    JSON.stringify(provider),
                  );
                }}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <span className="flex items-center gap-2 text-gray-500 text-xs">
            Powered by Nerve
            <Image src="/logo.svg" alt="Nerve Logo" width={16} height={16} />
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Home() {
  // Always set authenticatedState to false
  const [authenticatedState, setAuthenticatedState] = useState<
    boolean | undefined
  >(false);

  useEffect(() => {
    setAuthenticatedState(false);
  }, []);

  // fhir.authenticate().then((res) => {
  //   if (res.state !== "authenticated") {
  //     window.location.assign(res.authUrl);
  //   }
  // });

  if (authenticatedState === undefined) {
    return <div className="flex items-center justify-center">Loading</div>;
  }

  return (
    <div className="flex items-center justify-center">
      {authenticatedState ? <Unauthenticated /> : <Unauthenticated />}
    </div>
  );
}

