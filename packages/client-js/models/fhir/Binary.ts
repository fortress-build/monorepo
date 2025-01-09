import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Patient } from "./Patient";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class Binary extends DomainResource {
  resourceType: "Binary";
  identifier?: Identifier[];
  active?: boolean;
  morphology?: CodeableConcept;
  location?: CodeableConcept;
  locationQualifier?: CodeableConcept[];
  description?: string;
  image?: Attachment[];
  patient: Reference<Patient>;
}
