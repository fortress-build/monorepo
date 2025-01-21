import type { Annotation } from "./Annotation";
import type { Attachment } from "./Attachment";
import type { CarePlan } from "./CarePlan";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { DeviceMetric } from "./DeviceMetric";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import { DomainResource, type Resource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { Specimen } from "./Specimen";

// Define the status type
type MediaStatus =
  | "preparation"
  | "in-progress"
  | "not-done"
  | "on-hold"
  | "stopped"
  | "completed"
  | "entered-in-error"
  | "unknown";
export declare class MediaCreated {
  createdDateTime?: string;
  createdPeriod?: Period;
}

export declare class Media extends DomainResource {
  resourceType: "Media";
  identifier?: Identifier[];
  basedOn?: Reference<ServiceRequest | CarePlan>[];
  partOf?: Reference<Resource>[];
  status: MediaStatus;
  type?: CodeableConcept;
  modality?: CodeableConcept;
  view?: CodeableConcept;
  subject?: Reference<
    | Patient
    | Practitioner
    | PractitionerRole
    | Group
    | Device
    | Specimen
    | Location
  >;
  encounter?: Reference<Encounter>;
  created?: MediaCreated;
  issued?: string;
  operator?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | CareTeam
    | Patient
    | Device
    | RelatedPerson
  >;
  reasonCode?: CodeableConcept[];
  bodySite?: CodeableConcept;
  deviceName?: string;
  device?: Reference<Device | DeviceMetric | Device>;
  height?: number;
  width?: number;
  frames?: number;
  duration?: number;
  content: Attachment;
  note?: Annotation[];
}
