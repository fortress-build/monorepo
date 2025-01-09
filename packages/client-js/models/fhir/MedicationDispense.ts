import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { DetectedIssue } from "./DetectedIssue";
import type { Device } from "./Device";
import type { Dosage } from "./Dosage";
import type { Encounter } from "./Encounter";
import type { EpisodeOfCare } from "./EpisodeOfCare";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { MedicationRequest } from "./MedicationRequest";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { Provenance } from "./Provenance";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";
import type { SimpleQuantity } from "./SimpleQuantity";

export declare class MedicationDispense extends DomainResource {
  resourceType: "DomainResource";

  identifier?: Identifier[];
  partOf?: Reference<Procedure>[];
  status:
    | "preparation"
    | "in-progress"
    | "cancelled"
    | "on-hold"
    | "completed"
    | "entered-in-error"
    | "stopped"
    | "declined"
    | "unknown";

  statusReasonCodeableConcept?: CodeableConcept[];
  statusReasonReference?: Reference<DetectedIssue>[];

  category?: CodeableConcept;

  medicationCodeableConcept?: CodeableConcept;
  medicationReference?: Reference<DetectedIssue>;

  subject: Reference<Patient | Group>;
  context: Reference<Encounter | EpisodeOfCare>;
  supportingInformation?: Reference<Resource>[];
  performer?: {
    function?: CodeableConcept;
    actor: Reference<
      | Practitioner
      | PractitionerRole
      | Organization
      | Patient
      | Device
      | RelatedPerson
    >;
  };
  location?: Reference<Location>;
  authorizingPrescription?: Reference<MedicationRequest>[];
  type?: CodeableConcept;
  quantity?: SimpleQuantity;
  daysSupply?: SimpleQuantity;
  whenPrepared?: string;
  whenHandedOver?: string;
  destination?: Reference<Location>;
  receiver?: Reference<Patient | Practitioner>[];
  note?: Annotation[];
  dosageInstruction?: Dosage[];
  substitution?: {
    wasSubstituted: boolean;
    type?: CodeableConcept;
    reason?: CodeableConcept[];
    responsibleParty?: Reference<Practitioner | PractitionerRole>[];
  };
  detectedIssue?: Reference<DetectedIssue>[];
  eventHistory?: Reference<Provenance>[];
}
