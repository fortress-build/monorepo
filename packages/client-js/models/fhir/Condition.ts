import type { DomainResource, Resource } from "./Resource";
import type { Group } from "./Group";
import type { Patient } from "./Patient";
import type { Reference } from "./Reference";
import type { Encounter } from "./Encounter";
import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Period } from "./Period";
import type { Age } from "./Age";
import type { PractitionerRole } from "./PractitionerRole";
import type { RelatedPerson } from "./RelatedPerson";
import type { Practitioner } from "./Practitioner";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { Observation } from "./Observation";
import type { Annotation } from "./Annotation";

export declare class Condition extends DomainResource {
  resourceType: "Condition";

  identifier?: Identifier[];
  clinicalStatus?: CodeableConcept;
  verificationStatus?: CodeableConcept;
  category?: CodeableConcept[];
  severity?: CodeableConcept;
  code?: CodeableConcept;
  bodySite?: CodeableConcept[];

  subject: Reference<Patient | Group>;
  encounter?: Reference<Encounter>;

  onsetDateTime?: string;
  onsetAge?: Age;
  onsetPeriod?: Period;
  onsetRange?: Range;
  onsetString?: string;
  abatementDateTime?: string;
  abatementAge?: Age;
  abatementPeriod?: Period;
  abatementRange?: Range;
  abatementString?: string;
  recordedDate?: string;
  recorder?: Reference<
    Practitioner | PractitionerRole | Patient | RelatedPerson
  >;
  asserter?: Reference<
    Practitioner | PractitionerRole | Patient | RelatedPerson
  >;
  stage?: {
    summary?: CodeableConcept;
    assessment?: Reference<
      // ClinicalImpression |
      DiagnosticReport | Observation
    >[];
    type?: CodeableConcept;
  };
  evidence?: {
    code?: CodeableConcept[];
    detail?: Reference<Resource>[];
  };
  note?: Annotation[];
}
