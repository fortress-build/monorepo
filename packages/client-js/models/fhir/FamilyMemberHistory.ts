import type { Age } from "./Age";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Range } from "./Range";
import type { Reference } from "./Reference";
import type { Annotation } from "./Annotation";
import { DomainResource } from "./Resource";
import type { Patient } from "./Patient";
import type { Condition } from "./Condition";
import type { Observation } from "./Observation";
import type { AllergyIntolerance } from "./AllergyIntolerance";
import type { QuestionnaireResponse } from "./QuestionnaireResponse";
import type { DiagnosticReport } from "./DiagnosticReport";

export declare class FamilyMemberHistoryCondition {
  code: CodeableConcept;
  outcome?: CodeableConcept;
  contributedToDeath?: boolean;
  onsetAge?: Age;
  onsetRange?: Range;
  onsetPeriod?: Period;
  onsetString?: string;
  note?: Annotation[];
}

export declare class FamilyMemberHistory extends DomainResource {
  resourceType: 'FamilyMemberHistory';
  identifier?: Identifier[];
  instantiatesCanonical?: string[];
  instantiatesUri?: string[];
  status: 'partial' | 'completed' | 'entered-in-error' | 'health-unknown';
  dataAbsentReason?: CodeableConcept;
  patient: Reference<Patient>;
  date?: string;
  name?: string;
  relationship: CodeableConcept;
  sex?: CodeableConcept;
  bornPeriod?: Period;
  bornDate?: string;
  bornString?: string;
  ageAge?: Age;
  ageRange?: Range;
  ageString?: string;
  estimatedAge?: boolean;
  deceasedBoolean?: boolean;
  deceasedAge?: Age;
  deceasedRange?: Range;
  deceasedDate?: string;
  deceasedString?: string;
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<Condition|Observation|AllergyIntolerance|QuestionnaireResponse| DiagnosticReport | Annotation>[];
  note?: Annotation[];
  condition?: FamilyMemberHistoryCondition[];
}