import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { Identifier } from "./Identifier";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";

export type DetectedIssueStatus =
  | "preliminary"
  | "final"
  | "entered-in-error"
  | "mitigated";

export type DetectedIssueSeverity = "high" | "moderate" | "low";

export declare class DetectedIssue extends DomainResource {
  resourceType: "DetectedIssue";
  identifier?: Identifier[];
  status: DetectedIssueStatus;
  code?: CodeableConcept;
  severity?: DetectedIssueSeverity;
  patient?: Reference<Patient>;
  identifiedDateTime?: string;
  identifiedPeriod?: Period;
  author?: Reference<Practitioner | PractitionerRole | Device>;
  implicated?: Reference<Resource>[];
  evidence?: {
    code?: CodeableConcept[];
    detail?: Reference<Resource>[];
  }[];
  detail?: string;
  reference?: string;
  mitigation?: {
    action: CodeableConcept;
    date?: string;
    author?: Reference<Practitioner | PractitionerRole>;
  }[];
}
