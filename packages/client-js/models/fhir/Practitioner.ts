import type { Address } from "./Address";
import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { HumanName } from "./HumanName";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class Practitioner extends DomainResource {
  resourceType: "Practitioner";

  identifier?: Identifier[];
  active?: boolean;
  name?: HumanName[];
  telecom?: ContactPoint[];
  address?: Address[];
  gender?: "male" | "female" | "other" | "unknown";
  birthDate?: string;
  photo?: Attachment[];
  qualification?: {
    identifier?: Identifier[];
    code: CodeableConcept;
    period?: Period;
    issuer?: Reference<Organization>;
  }[];
  communication?: CodeableConcept[];
}
