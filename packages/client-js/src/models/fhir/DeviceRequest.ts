import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Quantity } from "./Quantity";
import type { Range } from "./Range";
import type { Reference } from "./Reference";
import type { Timing } from "./Timing";
import type { DomainResource, Resource } from "./Resource";
import type { Device } from "./Device";
import type { Location } from "./Location";
import type { Group } from "./Group";
import type { Patient } from "./Patient";
import type { Encounter } from "./Encounter";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Organization } from "./Organization";
import type { CareTeam } from "./CareTeam";
import type { HealthcareService } from "./HealthcareService";
import type { RelatedPerson } from "./RelatedPerson";
import type { ClaimResponse } from "./ClaimResponse";
import type { Provenance } from "./Provenance";
import type { Coverage } from "./Coverage";
import type { Condition } from "./Condition";
import type { Observation } from "./Observation";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";

export type DeviceRequestStatus =
  | "draft"
  | "active"
  | "on-hold"
  | "revoked"
  | "completed"
  | "entered-in-error"
  | "unknown";

export type DeviceRequestIntent =
  | "proposal"
  | "plan"
  | "directive"
  | "order"
  | "original-order"
  | "reflex-order"
  | "filler-order"
  | "instance-order"
  | "option";

export type DeviceRequestPriority = "routine" | "urgent" | "asap" | "stat";

export declare class DeviceRequest extends DomainResource {
  resourceType: "DeviceRequest";
  identifier?: Identifier[];
  instantiatesCanonical?: string[];
  instantiatesUri?: string[];
  basedOn?: Reference<Resource>[];
  priorRequest?: Reference<Resource>[];
  groupIdentifier?: Identifier;
  status?: DeviceRequestStatus;
  intent: DeviceRequestIntent;
  priority?: DeviceRequestPriority;
  codeReference?: Reference<Device>;
  codeCodeableConcept?: CodeableConcept;
  parameter?: {
    code?: CodeableConcept;
    valueCodeableConcept?: CodeableConcept;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueBoolean?: boolean;
  }[];
  subject: Reference<Patient | Group | Location | Device>;
  encounter?: Reference<Encounter>;
  occurrenceDateTime?: string;
  occurrencePeriod?: Period;
  occurrenceTiming?: Timing;
  authoredOn?: string;
  requester?: Reference<
    Device | Practitioner | PractitionerRole | Organization
  >;
  performerType?: CodeableConcept;
  performer?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | CareTeam
    | HealthcareService
    | Patient
    | Device
    | RelatedPerson
  >;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<
    Condition | Observation | DiagnosticReport | DocumentReference
  >[];
  insurance?: Reference<Coverage | ClaimResponse>[];
  supportingInfo?: Reference<Resource>[];
  note?: Annotation[];
  relevantHistory?: Reference<Provenance>[];
}
