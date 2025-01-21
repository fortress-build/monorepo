import type { Annotation } from "./Annotation";
import type { Claim } from "./Claim";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Media } from "./Media";
import type { Observation } from "./Observation";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { QuestionnaireResponse } from "./QuestionnaireResponse";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { Timing } from "./Timing";

export declare class DeviceUseStatement extends DomainResource {
  resourceType: "DeviceUseStatement";

  identifier?: Identifier[];
  basedOn?: Reference<ServiceRequest>[];
  status:
    | "active"
    | "completed"
    | "entered-in-error"
    | "intended"
    | "stopped"
    | "on-hold";
  subject: Reference<Patient | Group>;
  derivedFrom?: Reference<
    | ServiceRequest
    | Procedure
    | Claim
    | Observation
    | QuestionnaireResponse
    | DocumentReference
  >[];

  timingTiming?: Timing;
  timingPeriod?: Period;
  timingDateTime?: string;

  recordedOn?: string;
  source?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson>;
  device: Reference<Device>;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<
    Condition | Observation | DiagnosticReport | DocumentReference | Media
  >[];
  bodySite?: CodeableConcept;
  note?: Annotation[];
}
