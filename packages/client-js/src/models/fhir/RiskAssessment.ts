import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Observation } from "./Observation";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";

export interface RiskAssessment extends DomainResource {
  resourceType: "RiskAssessment";

  identifier?: Identifier[];
  basedOn?: Reference<Resource>[];
  parent?: Reference<Resource>;
  status?:
    | "registered"
    | "preliminary"
    | "final"
    | "amended"
    | "corrected"
    | "cancelled"
    | "entered-in-error"
    | "unknown";
  method?: CodeableConcept;
  code?: CodeableConcept;
  subject: Reference<Patient | Group>;
  encounter?: Reference<Encounter>;

  occurrenceDateTime?: string;
  occurrencePeriod?: Period;

  condition?: Reference<Condition>;
  performer?: Reference<Practitioner | PractitionerRole | Device>;

  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<
    Condition | Observation | DiagnosticReport | DocumentReference
  >[];

  basis?: Reference[];

  prediction?: {
    outcome?: CodeableConcept;

    probabilityDecimal?: number;
    probabilityRange?: Range;

    qualitativeRisk?: CodeableConcept;
    relativeRisk?: number;

    whenPeriod?: Period;
    whenRange?: Range;

    rationale?: string;
  }[];

  mitigation?: string;
  note?: Annotation[];
}
