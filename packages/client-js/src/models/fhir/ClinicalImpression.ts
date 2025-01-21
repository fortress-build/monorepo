import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { CodeableConcept } from "./CodeableConcept";
import type { Period } from "./Period";
import type { Annotation } from "./Annotation";
import type { DomainResource, Resource } from "./Resource";
import type { Patient } from "./Patient";
import type { Group } from "./Group";
import type { Encounter } from "./Encounter";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { AllergyIntolerance } from "./AllergyIntolerance";
import type { Condition } from "./Condition";
import type { Observation } from "./Observation";
import type { QuestionnaireResponse } from "./QuestionnaireResponse";
import type { FamilyMemberHistory } from "./FamilyMemberHistory";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { RiskAssessment } from "./RiskAssessment";
import type { ImagingStudy } from "./ImagingStudy";
import type { Media } from "./Media";

export type ClinicalImpressionStatus =
  | "in-progress"
  | "completed"
  | "entered-in-error";

export interface ClinicalImpression extends DomainResource{
  resourceType: "ClinicalImpression";
  identifier?: Identifier[];
  status: ClinicalImpressionStatus;
  statusReason?: CodeableConcept;
  code?: CodeableConcept;
  description?: string;
  subject: Reference<Patient | Group>;
  encounter?: Reference<Encounter>;
  effectiveDateTime?: string;
  effectivePeriod?: Period;
  date?: string;
  assessor?: Reference<Practitioner | PractitionerRole>;
  previous?: Reference<ClinicalImpression>;
  problem?: Reference<Condition | AllergyIntolerance>[];
  investigation?: {
    code: CodeableConcept;
    item?: Reference<
      | Observation
      | QuestionnaireResponse
      | FamilyMemberHistory
      | DiagnosticReport
      | RiskAssessment
      | ImagingStudy
      | Media
    >[];
  }[];
  protocol?: string[];
  summary?: string;
  finding?: {
    itemCodeableConcept?: CodeableConcept;
    itemReference?: Reference<Condition | Observation | Media>;
    basis?: string;
  }[];
  prognosisCodeableConcept?: CodeableConcept[];
  prognosisReference?: Reference<RiskAssessment>[];
  supportingInfo?: Reference<Resource>[];
  note?: Annotation[];
}
