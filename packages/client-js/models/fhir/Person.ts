import type { Address } from "./Address";
import type { Attachment } from "./Attachment";
import type { ContactPoint } from "./ContactPoint";
import type { HumanName } from "./HumanName";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource } from "./Resource";

export declare class PersonLink {
  target: Reference<Patient|Practitioner|RelatedPerson|Person>;
  assurance?: 'level1' | 'level2' | 'level3' | 'level4';
}

export declare class Person extends DomainResource{
  resourceType: 'Person';
  identifier?: Identifier[];
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: 'male' | 'female' | 'other' | 'unknown';
  birthDate?: string;
  address?: Address[];
  photo?: Attachment;
  managingOrganization?: Reference<Organization>;
  active?: boolean;
  link?: PersonLink[];
}
