import type { Annotation } from "./Annotation";
import type { Attachment } from "./Attachment";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { HealthcareService } from "./HealthcareService";
import type { Identifier } from "./Identifier";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";

export type CommunicationStatus =
  | "preparation"
  | "in-progress"
  | "not-done"
  | "on-hold"
  | "stopped"
  | "completed"
  | "entered-in-error"
  | "unknown";

export type CommunicationPriority = "routine" | "urgent" | "asap" | "stat";

export declare class Communication extends DomainResource {
  resourceType: "Communication";
  identifier?: Identifier[];
  instantiatesCanonical?: string[];
  instantiatesUri?: string[];
  basedOn?: Reference<Resource>[];
  partOf?: Reference<Resource>[];
  inResponseTo?: Reference<Communication>[];
  status: CommunicationStatus;
  statusReason?: CodeableConcept;
  category?: CodeableConcept[];
  priority?: CommunicationPriority;
  medium?: CodeableConcept[];
  subject?: Reference<Patient | Group>;
  topic?: CodeableConcept;
  about?: Reference<Resource>[];
  encounter?: Reference<Encounter>;
  sent?: string;
  received?: string;
  recipient?: Reference<
    | Device
    | Organization
    | Patient
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | Group
    | CareTeam
    | HealthcareService
  >[];
  sender?: Reference<
    | Device
    | Organization
    | Patient
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | HealthcareService
  >;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<
    Condition | Observation | DiagnosticReport | DocumentReference
  >[];
  payload?: {
    contentString?: string;
    contentAttachment?: Attachment;
    contentReference?: Reference<Resource>;
  }[];
  note?: Annotation[];
}
