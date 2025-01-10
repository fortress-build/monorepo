import Image from 'next/image';
import type { EHRProvider } from '../nerve-integration';

export const mockEHRProviders: EHRProvider[] = [
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
