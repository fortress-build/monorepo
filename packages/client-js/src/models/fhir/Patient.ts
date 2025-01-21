import type { ContactPoint } from "./ContactPoint";
import type { Address } from "./Address";
import type { Identifier } from "./Identifier";
import type { HumanName } from "./HumanName";
import type { Reference } from "./Reference";
import type { Practitioner } from "./Practitioner";
import type { DomainResource } from "./Resource";
import type { CodeableConcept } from "./CodeableConcept";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { Attachment } from "./Attachment";
import type { PractitionerRole } from "./PractitionerRole";
import type { RelatedPerson } from "./RelatedPerson";

// export const Patient = v.object({
//   active: v.optional(v.boolean()),
//   address: v.optional(v.array(Address)),
//   birthDate: v.string(),
//   gender: v.string(),
//   generalPractitioner: v.array(Reference<Practitioner>()),
//   identifier: v.array(Identifier),
//   maritalStatus: v.object({
//     text: v.string(),
//   }),
//   name: v.array(HumanName),
//   telecom: v.optional(v.array(ContactPoint)),
//   extension: v.array(Extension),
// });
//
// export type Patient = v.InferOutput<typeof Patient>;

export declare class Patient extends DomainResource {
  resourceType: "Patient";

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
