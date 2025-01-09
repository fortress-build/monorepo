import type { Address } from "./Address";
import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { HumanName } from "./HumanName";
import type { Identifier } from "./Identifier";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class RelatedPerson extends DomainResource {
  resourceType: "RelatedPerson";

  identifier?: Identifier[];
  active?: boolean;
  patient: Reference<Patient>;
  relationship?: CodeableConcept[];
  name?: HumanName[];
  telecom?: ContactPoint[];
  gender?: "male" | "female" | "other" | "unknown";
  birthDate?: string;
  address?: Address;
  photo?: Attachment[];
  period?: Period;
  communication?: {
    language: CodeableConcept;
    preferred?: boolean;
  }[];
}
