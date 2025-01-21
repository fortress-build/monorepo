import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Medication } from "./Medication";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { PlanDefinition } from "./PlanDefinition";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class Flag extends DomainResource {
  resourceType: "Flag";

  identifier?: Identifier[];
  status: "active" | "inactive" | "entered-in-error";
  category?: CodeableConcept[];
  code: CodeableConcept;
  subject: Reference<
    | Patient
    | Location
    | Group
    | Organization
    | Practitioner
    | PlanDefinition
    | Medication
    | Procedure
  >;
  period?: Period;
  encounter?: Reference<Encounter>;
  author?: Reference<
    Device | Organization | Patient | Practitioner | PractitionerRole
  >;
}
