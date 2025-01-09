import type { Annotation } from "./Annotation";
import type { CarePlan } from "./CarePlan";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { Dosage } from "./Dosage";
import type { Encounter } from "./Encounter";
import type { EpisodeOfCare } from "./EpisodeOfCare";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Medication } from "./Medication";
import type { MedicationAdministration } from "./MedicationAdministration";
import type { MedicationDispense } from "./MedicationDispense";
import type { MedicationRequest } from "./MedicationRequest";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";

export declare class MedicationStatement extends DomainResource {
  resourceType: "MedicationStatement";

  identifier?: Identifier[];
  basedOn?: Reference<MedicationRequest | CarePlan | ServiceRequest>[];

  partOf?: Reference<
    | MedicationAdministration
    | MedicationDispense
    | MedicationStatement
    | Procedure
    | Observation
  >[];

  status:
    | "active"
    | "completed"
    | "entered-in-error"
    | "intended"
    | "stopped"
    | "on-hold"
    | "unknown"
    | "not-taken";

  statusReason?: CodeableConcept[];
  category?: CodeableConcept;

  medicationCodeableConcept?: CodeableConcept;
  medicationReference?: Reference<Medication>;

  subject: Reference<Patient | Group>;
  context?: Reference<Encounter | EpisodeOfCare>;

  effectiveDateTime?: string;
  effectivePeriod?: Period;

  dateAsserted?: string;

  informationSource?: Reference<
    Patient | Practitioner | PractitionerRole | RelatedPerson | Organization
  >;
  derivedFrom?: Reference<Resource>[];

  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<Condition | Observation | DiagnosticReport>[];
  note?: Annotation[];
  dosage?: Dosage[];
}
