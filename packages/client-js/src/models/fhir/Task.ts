import type { DomainResource, Resource } from "./Resource";
import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import type { Annotation } from "./Annotation";
import type { CarePlan } from "./CarePlan";
import type { CareTeam } from "./CareTeam";
import type { ClaimResponse } from "./ClaimResponse";
import type { Condition } from "./Condition";
import type { Coverage } from "./Coverage";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { HealthcareService } from "./HealthcareService";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Provenance } from "./Provenance";
import type { RelatedPerson } from "./RelatedPerson";
import type { ServiceRequest } from "./ServiceRequest";

export type TaskStatus =
  | "draft"
  | "requested"
  | "received"
  | "accepted"
  | "rejected"
  | "ready"
  | "cancelled"
  | "in-progress"
  | "on-hold"
  | "failed"
  | "completed"
  | "entered-in-error";

export type TaskIntent =
  | "unknown"
  | "proposal"
  | "plan"
  | "order"
  | "original-order"
  | "reflex-order"
  | "filler-order"
  | "instance-order"
  | "option";

export type TaskPriority = "routine" | "urgent" | "asap" | "stat";

export declare class Task extends DomainResource {
  resourceType: "Task";

  identifier?: Identifier[];
  instantiatesCanonical?: string;
  instantiatesUri?: string;
  basedOn?: Reference<CarePlan | ServiceRequest>[];
  groupIdentifier?: Identifier;
  partOf?: Reference<Task>[];
  status: TaskStatus;
  statusReason?: CodeableConcept;
  businessStatus?: CodeableConcept;
  intent: TaskIntent;
  priority?: TaskPriority;
  code?: CodeableConcept;
  description?: string;
  focus?: Reference<Resource>;
  for?: Reference<Patient | Organization | Group | Practitioner>;
  encounter?: Reference<Encounter>;
  executionPeriod?: Period;
  authoredOn?: string;
  lastModified?: string;
  requester?: Reference<
    Device |
    Organization |
    Patient |
    Practitioner |
    PractitionerRole |
    RelatedPerson
  >;
  performerType?: CodeableConcept[];
  owner?: Reference<
    Practitioner |
    PractitionerRole |
    Organization |
    CareTeam |
    HealthcareService |
    Patient |
    Device |
    RelatedPerson
  >;
  location?: Reference<Location>;
  reasonCode?: CodeableConcept;
  reasonReference?: Reference<
    Condition | Observation | DiagnosticReport | DocumentReference
  >;
  insurance?: Reference<Coverage | ClaimResponse>[];
  note?: Annotation[];
  relevantHistory?: Reference<Provenance>[];
  restriction?: {
    repetitions?: number;
    period?: Period;
    recipient?: Reference<
      Patient |
      Practitioner |
      PractitionerRole |
      RelatedPerson |
      Group |
      Organization
    >[];
  };
  input?: {
    type: CodeableConcept;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
  }[];
  output?: {
    type: CodeableConcept;
    valueString?: string;
    valueBoolean?: boolean;
    valueInteger?: number;
  }[];
}
