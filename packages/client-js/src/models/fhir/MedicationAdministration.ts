import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { Encounter } from "./Encounter";
import type { EpisodeOfCare } from "./EpisodeOfCare";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Medication } from "./Medication";
import type { MedicationRequest } from "./MedicationRequest";
import type { Observation } from "./Observation";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { Provenance } from "./Provenance";
import type { Ratio } from "./Ratio";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { SimpleQuantity } from "./SimpleQuantity";

// export type MedicationAdministration = v.InferOutput<typeof MedicationAdministration>;
export declare class MedicationAdministration extends DomainResource {
  resourceType: "MedicationAdministration";
  identifier?: Identifier[];
  instantiates?: string[];
  partOf?: Reference<MedicationAdministration | Procedure>[];
  status:
    | "in-progress"
    | "not-done"
    | "on-hold"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "unknown";
  statusReason?: CodeableConcept[];
  category?: CodeableConcept;

  medicationCodeableConcept?: CodeableConcept;
  medicationReference?: Reference<Medication>;

  subject: Reference<Patient | Group>;
  context: Reference<Encounter | EpisodeOfCare>;
  supportingInformation?: Reference<Resource>[];

  effectiveDateTime?: string;
  effectivePeriod?: Period;

  performer?: {
    function?: CodeableConcept;
    actor: Reference<
      Practitioner | PractitionerRole | Patient | RelatedPerson | Device
    >;
  }[];

  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<Condition | Observation | DiagnosticReport>[];

  request?: Reference<MedicationRequest>;
  note?: Annotation[];

  dosage?: {
    text?: string;
    site?: CodeableConcept;
    route?: CodeableConcept;
    method?: CodeableConcept;
    dose?: SimpleQuantity;

    rateRatio?: Ratio;
    rateQuantity?: SimpleQuantity;
  };

  eventHistory?: Reference<Provenance>[];
}
