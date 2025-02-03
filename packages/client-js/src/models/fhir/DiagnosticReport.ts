import type { Attachment } from "./Attachment";
import type { CarePlan } from "./CarePlan";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Device } from "./Device";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { ImagingStudy } from "./ImagingStudy";
import type { ImmunizationRecommendation } from "./ImmunizationRecommendation";
import type { Media } from "./Media";
import type { MedicationRequest } from "./MedicationRequest";
import type { NutritionOrder } from "./NutritionOrder";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { Specimen } from "./Specimen";


/**
 * The findings and interpretation of diagnostic  tests performed on
 * patients, groups of patients, devices, and locations, and/or specimens
 * derived from these. The report includes clinical context such as
 * requesting and provider information, and some mix of atomic results,
 * images, textual and coded interpretations, and formatted
 * representation of diagnostic reports.
 */
export declare class DiagnosticReport extends DomainResource {
  resourceType: 'DiagnosticReport';

  identifier?: Identifier[];
  basedOn?: Reference<
    | CarePlan
    | ImmunizationRecommendation
    | MedicationRequest
    | NutritionOrder
    | ServiceRequest
  >[];
  status:
    | 'registered'
    | 'partial'
    | 'preliminary'
    | 'final'
    | 'amended'
    | 'corrected'
    | 'appended'
    | 'cancelled'
    | 'entered-in-error'
    | 'unknown';
  category?: CodeableConcept[];
  code: CodeableConcept;
  subject?: Reference<Patient | Group | Device | Location>;
  encounter?: Reference<Encounter>;

  effectiveDateTime?: string;
  effectivePeriod?: Period;

  issued?: string;

  performer?: Reference<
    Organization | Practitioner | PractitionerRole | CareTeam
  >[];

  resultsInterpreter?: Reference<
    PractitionerRole | Practitioner | Organization | CareTeam
  >[];
  specimen?: Reference<Specimen>[];
  result?: Reference<Observation>[];
  imagingStudy?: Reference<ImagingStudy>[];
  media?: {
    comment?: string;
    link: Reference<Media>;
  };
  conclusion?: string;
  conclusionCode?: CodeableConcept[];
  presentedForm?: Attachment[];
}
