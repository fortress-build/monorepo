import type { Age } from "./Age";
import type { Annotation } from "./Annotation";
import type { CarePlan } from "./CarePlan";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Medication } from "./Medication";
import type { MedicationAdministration } from "./MedicationAdministration";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { Substance } from "./Substance";

export declare class Procedure extends DomainResource {
  resourceType: "Procedure";

  identifier?: Identifier[];
  instantiatesCanonical?: string[]; // TODO: Fix
  instantiatesUri?: string[];

  basedOn?: Reference<CarePlan | ServiceRequest>[];
  partOf?: Reference<Procedure | Observation | MedicationAdministration>;
  status:
    | "preparation"
    | "in-progress"
    | "not-done"
    | "on-hold"
    | "stopped"
    | "completed"
    | "entered-in-error"
    | "unknown";
  statusReason?: CodeableConcept;
  category?: CodeableConcept[];
  code?: CodeableConcept;
  subject: Reference<Patient | Group>;
  encounter?: Reference<Encounter>;

  performedDateTime?: string;
  performedPeriod?: Period;
  performedString?: string;
  performedAge?: Age;
  performedRange?: Range;

  recorder?: Reference<
    Patient | RelatedPerson | Practitioner | PractitionerRole
  >;
  asserter?: Reference<
    Patient | RelatedPerson | Practitioner | PractitionerRole
  >;

  performer?: {
    function?: CodeableConcept;
    actor: Reference<
      | Practitioner
      | PractitionerRole
      | Organization
      | Patient
      | RelatedPerson
      | Device
    >;
    onBehalfOf?: Reference<Organization>;
  }[];

  location?: Reference<Location>;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<
    Condition | Observation | Procedure | DiagnosticReport | DocumentReference
  >[];
  bodySite?: CodeableConcept[];
  outcome?: CodeableConcept;
  report?: Reference<
    DiagnosticReport | DocumentReference
    // | Composition
  >[];
  complication?: CodeableConcept[];
  complicationDetail?: Reference<Condition>[];
  followUp?: CodeableConcept[];
  note?: Annotation[];
  focalDevice?: {
    action?: CodeableConcept;
    manupulated: Reference<Device>;
  };
  usedReference?: Reference<Device | Medication | Substance>[];
  usedCode?: CodeableConcept[];
}
