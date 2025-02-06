import type { Nerve } from '@/index';
import type { Address } from './Address';
import type { Attachment } from './Attachment';
import type { CodeableConcept } from './CodeableConcept';
import type { ContactPoint } from './ContactPoint';
import type { HumanName } from './HumanName';
import type { Identifier } from './Identifier';
import type { Organization } from './Organization';
import type { Period } from './Period';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { Reference } from './Reference';
import type { RelatedPerson } from './RelatedPerson';
import type { DomainResource } from './Resource';

// Base Patient resource type
export declare class Patient extends DomainResource {
  resourceType: 'Patient';
  identifier?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: string;
  birthDate?: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  address?: Address[];
  maritalStatus?: CodeableConcept;
  multipleBirthBoolean?: boolean;
  multipleBirthInteger?: number;
  photo?: Attachment[];
  contact?: {
    relationship?: CodeableConcept[];
    name?: HumanName;
    telecom?: ContactPoint[];
    address?: Address;
    gender?: string;
    organization?: Reference<Organization>;
    period?: Period;
  };
  communication?: {
    language: CodeableConcept;
    preferred?: boolean;
  };
  generalPractitioner?: Reference<
    Organization | Practitioner | PractitionerRole
  >[];
  managingOrganization?: Reference<Organization>;
  link?: {
    other: Reference<Patient | RelatedPerson>;
    type: string;
  };
}

// // Extended Patient class with additional functionality
// export class Patient extends PatientResource {
//   private client!: Nerve;

//   constructor(client: Nerve) {
//     super();
//     this.client = client;
//   }
//   get carePlan(): Promise<CarePlan> {
//     if (!this.id) {
//       throw new Error('Patient ID is required to fetch care plan');
//     }
//     return this.client.carePlan
//       .read(this.id)
//       .then((response) => response.resource);
//   }
// }
