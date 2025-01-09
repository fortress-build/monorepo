import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Immunization } from "./Immunization";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";

export declare class ImmunizationEvaluation extends DomainResource {
  resourceType: "ImmunizationEvaluation";
  identifier?: Identifier[];

  status: "completed" | "entered-in-error";

  patient: Reference<Patient>;
  date?: string;
  authority?: Reference<Organization>;
  targetDisease: CodeableConcept;
  immunizationEvent: Reference<Immunization>;

  doseStatus: CodeableConcept;
  doseStatusReason?: CodeableConcept[];

  description?: string;
  series?: string;

  doseNumberPositiveInt?: number;
  doseNumberString?: string;

  seriesDosesPositiveInt?: number;
  seriesDosesString?: string;
}
