import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { DataRequirement } from "./DataRequirement";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Observation } from "./Observation";
import type { OperationOutcome } from "./OperationOutcome";
import type { Patient } from "./Patient";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { Parameters } from "./Parameters";
import type { CarePlan } from "./CarePlan";
import type { RequestGroup } from "./RequestGroup";

type GuidanceResponseStatus =
  | "success"
  | "data-requested"
  | "data-required"
  | "in-progress"
  | "failure"
  | "entered-in-error";

export declare class GuidanceResponse extends DomainResource {
  resourceType: "GuidanceResponse";
  requestIdentifier?: Identifier;
  identifier?: Identifier[];
  moduleUri?: string;
  moduleCanonical?: string;
  moduleCodeableConcept?: CodeableConcept;
  status: GuidanceResponseStatus;
  subject?: Reference<Patient|Group>;
  encounter?: Reference<Encounter>;
  occurrenceDateTime?: string;
  performer?: Reference<Device>;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<Condition|Observation|DiagnosticReport|Annotation>[];
  note?: Annotation[];
  evaluationMessage?: Reference<OperationOutcome>[];
  outputParameters?: Reference<Parameters>;
  result?: Reference<CarePlan|RequestGroup>;
  dataRequirement?: DataRequirement[];
}
