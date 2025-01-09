import type { Annotation } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { Encounter } from "./Encounter";
import type { Identifier } from "./Identifier";
import type { Location } from "./Location";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { SimpleQuantity } from "./SimpleQuantity";

export declare class Immunization extends DomainResource {
  resourceType: "Immunization";

  identifier?: Identifier[];
  status: "completed" | "entered-in-error" | "not-done";
  statusReason?: CodeableConcept;
  vaccineCode: CodeableConcept;

  patient: Reference<Patient>;
  encounter?: Reference<Encounter>;

  occurrenceDateTime?: string;
  occurrenceString?: string;

  recorded?: string;
  primarySource?: boolean;
  reportOrigin?: CodeableConcept;

  location?: Reference<Location>;
  manufacturer?: Reference<Organization>;
  lotNumber?: string;
  expirationDate?: string;
  site?: CodeableConcept;
  route?: CodeableConcept;
  doseQuantity?: SimpleQuantity;
  performer?: {
    function?: CodeableConcept;
    actor: Reference<Practitioner | PractitionerRole | Organization>;
  }[];
  note?: Annotation[];
  reasonCode?: CodeableConcept[];
  reasonReference?: Reference<Condition | Observation | DiagnosticReport>[];
  isSubpotent?: boolean;
  subpotentReason?: CodeableConcept[];
  education?: {
    documentType?: string;
    reference?: string;
    publicationDate?: string;
    presentationDate?: string;
  }[];
  programEligibility?: CodeableConcept[];
  fundingSource?: CodeableConcept;
  reaction?: {
    date?: string;
    detail: Reference<Observation>;
    reported?: boolean;
  }[];
  protocolApplied?: {
    series?: string;
    authority?: Reference<Organization>;
    targetDisease?: CodeableConcept[];

    doseNumberPositiveInt?: number;
    doseNumberString?: string;

    seriesDosesPositiveInt?: number;
    seriesDosesString?: string;
  }[];
}
