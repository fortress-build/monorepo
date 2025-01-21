import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import { DomainResource, type Resource } from "./Resource";

export declare class Basic extends DomainResource {
  resourceType: "Basic";
  identifier?: Identifier[];
  code: CodeableConcept;
  subject?: Reference<Resource>;
  created?: string;
  author?: Reference<Practitioner| PractitionerRole|Patient|RelatedPerson|Organization>;
}
