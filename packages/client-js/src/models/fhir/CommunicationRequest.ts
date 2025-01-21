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
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";

export type CommunicationRequestStatus =
  | "draft"
  | "active"
  | "on-hold"
  | "revoked"
  | "completed"
  | "entered-in-error"
  | "unknown";

export type CommunicationRequestPriority =
  | "routine"
  | "urgent"
  | "asap"
  | "stat";

export declare class CommunicationRequest extends DomainResource {
  resourceType: "CommunicationRequest";
  identifier?: Identifier[];
  basedOn?: Reference<Resource>[];
  replaces?: Reference<CommunicationRequest>[];
  groupIdentifier?: Identifier;
  status: CommunicationRequestStatus;
  statusReason?: CodeableConcept;
  category?: CodeableConcept[];
  priority?: CommunicationRequestPriority;
  doNotPerform?: boolean;
  medium?: CodeableConcept[];
  subject?: Reference<Patient | Group>;
  about?: Reference<Resource>[];
  encounter?: Reference<Encounter>;
  payload?: {
    contentString?: string;
    contentAttachment?: Attachment;
    contentReference?: Reference<Resource>;
  }[];
  occurrenceDateTime?: string;
  occurrencePeriod?: Period;
  authoredOn?: string;
  requester?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | Patient
    | RelatedPerson
    | Device
  >;
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
  note?: Annotation[];
}
