'use client';

import type { Patient } from 'fhirball';
import { JSX, useEffect, useState } from 'react';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/design-system/components/ui/card';
import { ArrowLeft, ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@repo/design-system/components/ui/input';

//Get rid of it and useContext if needed
import { useNerveClient } from '../client';

interface EHRProvider {
  name: string;
  authUrl: string;
  fhirUrl: string;
  clientId: string;
  icon: JSX.Element;
}

//TODO: Convert this to ReactQuery
const ehrProviders: EHRProvider[] = [
  {
    name: 'Epic',
    authUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/oauth2',
    fhirUrl: 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4',
    clientId: 'de0e1685-2b74-403f-b9b3-bda29bfc3e8a',
    icon: <Image src="/ehrs/Epic.svg" alt="Epic" width={24} height={24} />,
  },
  {
    name: 'Cerner',
    authUrl: 'https://fhir.cerner.com/auth',
    fhirUrl: 'https://fhir.cerner.com/r4',
    clientId: '',
    icon: <Image src="/ehrs/Cerner.svg" alt="Cerner" width={24} height={24} />,
  },
  {
    name: 'Athena Health',
    authUrl: 'https://api.athenahealth.com/oauth',
    fhirUrl: 'https://api.athenahealth.com/fhir/r4',
    clientId: '',
    icon: (
      <Image src="/ehrs/AthenaHealth.svg" alt="Cerner" width={24} height={24} />
    ),
  },
  {
    name: 'AllScripts',
    authUrl: 'https://allscripts.com/auth',
    fhirUrl: 'https://allscripts.com/fhir/r4',
    clientId: '',
    icon: (
      <Image src="/ehrs/Allscripts.svg" alt="Cerner" width={24} height={24} />
    ),
  },
  {
    name: 'NextGen Healthcare',
    authUrl: 'https://nextgen.com/auth',
    fhirUrl: 'https://nextgen.com/fhir/r4',
    clientId: '',
    icon: <Image src="/ehrs/NextGen.svg" alt="Cerner" width={24} height={24} />,
  },
  {
    name: 'eClinicalWorks',
    authUrl: 'https://eclinicalworks.com/auth',
    fhirUrl: 'https://eclinicalworks.com/fhir/r4',
    clientId: '',
    icon: (
      <Image
        src="/ehrs/eClinicalWorks.svg"
        alt="Cerner"
        width={24}
        height={24}
      />
    ),
  },
  // Add more providers as needed
];

interface Permission {
  title: string;
  details: string;
  fhirResources: {
    name: string;
    description: string;
  }[];
}

interface PermissionList {
  read: Permission[];
  write: Permission[];
}

//TODO: Convert this to ReactQuery
const getHealthInformationList: () => PermissionList = () => ({
  read: [
    {
      title: 'Demographics and personal information',
      details:
        'Access to basic information including name, date of birth, contact details, and insurance information',
      fhirResources: [
        {
          name: 'Patient',
          description:
            'Contains demographic information about the patient including name, birth date, contact information, and other administrative data',
        },
        {
          name: 'Coverage',
          description:
            "Details about the patient's insurance coverage, including payer information, policy details, and coverage periods",
        },
        {
          name: 'RelatedPerson',
          description:
            "Information about people who are involved in the patient's care, such as family members, guardians, or caregivers",
        },
      ],
    },
    {
      title: 'Medical conditions and diagnoses',
      details:
        'Current and historical medical conditions, diagnoses, and related health issues',
      fhirResources: [
        {
          name: 'Condition',
          description:
            'Clinical conditions, problems, diagnoses, and circumstances that require clinical care or management',
        },
        {
          name: 'DiagnosticReport',
          description:
            'Findings and interpretation of diagnostic tests or assessments',
        },
        {
          name: 'ClinicalImpression',
          description:
            "Healthcare provider's assessment and clinical reasoning about a patient's health condition",
        },
      ],
    },
    {
      title: 'Medications and prescriptions',
      details:
        'Current medications, prescription history, dosage information, and medication allergies',
      fhirResources: [
        {
          name: 'MedicationRequest',
          description:
            'Orders and prescriptions for medications, including dosage instructions and timing',
        },
        {
          name: 'MedicationStatement',
          description:
            'Record of medication usage, including both prescribed and self-reported medications',
        },
        {
          name: 'AllergyIntolerance',
          description:
            'Records of allergies, intolerances, and adverse reactions to medications',
        },
      ],
    },
    {
      title: 'Lab results and vital signs',
      details:
        'Laboratory test results, blood work, vital sign measurements, and other diagnostic findings',
      fhirResources: [
        {
          name: 'Observation',
          description:
            'Measurements, vital signs, and findings from tests and examinations',
        },
        {
          name: 'DiagnosticReport',
          description:
            'Detailed reports of diagnostic tests, including laboratory results and imaging studies',
        },
        {
          name: 'Specimen',
          description:
            'Information about biological samples collected for laboratory testing',
        },
      ],
    },
  ],
  write: [
    {
      title: 'Clinical notes',
      details: 'Ability to create and update clinical documentation',
      fhirResources: [
        {
          name: 'DocumentReference',
          description: 'Create and manage clinical notes and documentation',
        },
        {
          name: 'ClinicalNote',
          description: 'Add and update clinical notes and observations',
        },
      ],
    },
  ],
});

function Authenticated() {
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

function ConsentScreen({
  onAccept,
  provider,
  onBack,
}: {
  onAccept: () => void;
  provider: (typeof ehrProviders)[0];
  onBack: () => void;
}) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const healthInfo = getHealthInformationList();

  return (
    <Card className="w-[500px] mx-auto mt-16 shadow-none border border-gray-200">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-gray-500"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {provider.icon}
              <CardTitle>Connect to {provider.name}</CardTitle>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-gray-600">
            We are requesting the following permissions from {provider.name}:
          </p>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Read Access</h3>
            <ul className="space-y-2 text-gray-600">
              {healthInfo.read.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 p-3 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() =>
                    setSelectedItem(
                      selectedItem === item.title ? null : item.title
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform ${
                        selectedItem === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {selectedItem === item.title && (
                    <div className="text-sm text-gray-600 mt-2">
                      <p className="text-xs text-gray-500 mb-2">
                        <span className="font-medium">FHIR Resources:</span>
                      </p>
                      <div className="space-y-2">
                        {item.fhirResources.map((resource) => (
                          <div
                            key={resource.name}
                            className="p-2 bg-white border rounded-md shadow-sm"
                          >
                            <div className="text-sm font-medium text-gray-700">
                              {resource.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {resource.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <h3 className="font-medium text-gray-900 pt-4">Write Access</h3>
            <ul className="space-y-2 text-gray-600">
              {healthInfo.write.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-2 p-3 border rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() =>
                    setSelectedItem(
                      selectedItem === item.title ? null : item.title
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform ${
                        selectedItem === item.title ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {selectedItem === item.title && (
                    <div className="text-sm text-gray-600 mt-2">
                      <p className="text-xs text-gray-500 mb-2">
                        <span className="font-medium">FHIR Resources:</span>
                      </p>
                      <div className="space-y-2">
                        {item.fhirResources.map((resource) => (
                          <div
                            key={resource.name}
                            className="p-2 bg-white border rounded-md shadow-sm"
                          >
                            <div className="text-sm font-medium text-gray-700">
                              {resource.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {resource.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2 text-sm text-gray-500 mt-4">
            <p>
              Your data will be handled securely and in accordance with HIPAA
              guidelines.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://docs.example.com/data-handling"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
              >
                Learn how we handle your data
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href="https://github.com/fortress-build/fhirball"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
              >
                View our open source code
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
          <Button className="w-full mt-4" onClick={onAccept}>
            I Understand and Accept
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <span className="flex items-center text-xs text-gray-500 gap-2">
          Powered by Nerve
          <Image src="/logo.svg" alt="Nerve Logo" width={16} height={16} />
        </span>
      </CardFooter>
    </Card>
  );
}

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
        className="py-4 px-4 hover:bg-gray-50 cursor-pointer flex items-center justify-between border rounded-lg"
        onClick={() => select(provider)}
      >
        <div className="flex items-center gap-4">
          {provider.icon}
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            {provider.name}
          </span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-gray-500" />
      </div>
      {/*isLast ? null : <div className="border-b border-gray-200 my-0" />*/}
    </div>
  );
}

function Unauthenticated() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<
    (typeof ehrProviders)[0] | null
  >(null);
  const client = useNerveClient();

  const filteredProviders = ehrProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show consent screen if provider is selected
  if (selectedProvider) {
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
      />
    );
  }

  // Show EHR selection screen
  return (
    <Card className="w-[500px] shadow-none border">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle>Select Your EHR Provider</CardTitle>
        <Input
          type="search"
          className="h-8 text-sm"
          placeholder="Search providers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </CardHeader>
      <CardContent>
        <div
          className={`max-h-[180px] grid grid-cols-2 gap-1 ${
            filteredProviders.length > 6 ? 'overflow-y-scroll' : 'grid-rows-3'
          }`}
        >
          {filteredProviders.map((provider, index) => (
            <ProviderButton
              key={`${provider.name}-${index}`}
              provider={provider}
              isLast={index == filteredProviders.length - 1}
              select={(provider) => {
                setSelectedProvider(provider);
                client.setProvider(provider);
              }}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <span className="flex items-center text-xs text-gray-500 gap-2">
          Powered by Nerve
          <Image src="/logo.svg" alt="Nerve Logo" width={16} height={16} />
        </span>
      </CardFooter>
    </Card>
  );
}

export default function Home() {
  const [authenticatedState, setAuthenticatedState] = useState<
    boolean | undefined
  >(undefined);

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
      fhir
        .authCallback(params.get('code')!)
        .then(() => fhir.getToken())
        .then((token) => {
          // params.delete("code");
          // window.location.search = params.toString();
          setAuthenticatedState(true);
        });
    } else if (localStorage.getItem('__fhir_access_token')) {
      setAuthenticatedState(true);
    } else {
      setAuthenticatedState(false);
    }
  }, []);

  // fhir.authenticate().then((res) => {
  //   if (res.state !== "authenticated") {
  //     window.location.assign(res.authUrl);
  //   }
  // });

  if (authenticatedState === undefined) {
    return (
      <div className="min-h-svh flex flex-row justify-center items-center">
        Loading
      </div>
    );
  }

  return (
    <div className="min-h-svh flex flex-row justify-center items-center">
      {authenticatedState ? <Authenticated /> : <Unauthenticated />}
    </div>
  );
}
