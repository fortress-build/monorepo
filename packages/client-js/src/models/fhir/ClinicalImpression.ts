import type { Identifier } from './Identifier';
import type { Reference } from './Reference';
import type { CodeableConcept } from './CodeableConcept';
import type { Period } from './Period';
import type { Annotation } from './Annotation';
import type { DomainResource, Resource } from './Resource';
import type { Patient } from './Patient';
import type { Group } from './Group';
import type { Encounter } from './Encounter';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { AllergyIntolerance } from './AllergyIntolerance';
import type { Condition } from './Condition';
import type { Observation } from './Observation';
import type { QuestionnaireResponse } from './QuestionnaireResponse';
import type { FamilyMemberHistory } from './FamilyMemberHistory';
import type { DiagnosticReport } from './DiagnosticReport';
import type { RiskAssessment } from './RiskAssessment';
import type { ImagingStudy } from './ImagingStudy';
import type { Media } from './Media';

export type ClinicalImpressionStatus =
  | 'in-progress'
  | 'completed'
  | 'entered-in-error';

/**
 * A record of a clinical assessment performed to determine what
 * problem(s) may affect the patient and before planning the treatments
 * or management strategies that are best to manage a patient's
 * condition. Assessments are often 1:1 with a clinical consultation /
 * encounter,  but this varies greatly depending on the clinical
 * workflow. This resource is called &quot;ClinicalImpression&quot; rather than
 * &quot;ClinicalAssessment&quot; to avoid confusion with the recording of
 * assessment tools such as Apgar score.
 */
export interface ClinicalImpression extends DomainResource {
  resourceType: 'ClinicalImpression';
  /**
   * Business identifiers assigned to this clinical impression by the
   * performer or other systems which remain constant as the resource is
   * updated and propagates from server to server.
   */
  identifier?: Identifier[];

  /**
   * Identifies the workflow status of the assessment.
   */
  status: 'in-progress' | 'completed' | 'entered-in-error';

  /**
   * Captures the reason for the current state of the ClinicalImpression.
   */
  statusReason?: CodeableConcept;

  /**
   * Categorizes the type of clinical assessment performed.
   */
  code?: CodeableConcept;

  /**
   * A summary of the context and/or cause of the assessment - why / where
   * it was performed, and what patient events/status prompted it.
   */
  description?: string;

  /**
   * The patient or group of individuals assessed as part of this record.
   */
  subject: Reference<Patient | Group>;

  /**
   * The Encounter during which this ClinicalImpression was created or to
   * which the creation of this record is tightly associated.
   */
  encounter?: Reference<Encounter>;

  /**
   * The point in time or period over which the subject was assessed.
   */
  effectiveDateTime?: string;

  /**
   * The point in time or period over which the subject was assessed.
   */
  effectivePeriod?: Period;

  /**
   * Indicates when the documentation of the assessment was complete.
   */
  date?: string;

  /**
   * The clinician performing the assessment.
   */
  assessor?: Reference<Practitioner | PractitionerRole>;

  /**
   * A reference to the last assessment that was conducted on this patient.
   * Assessments are often/usually ongoing in nature; a care provider
   * (practitioner or team) will make new assessments on an ongoing basis
   * as new data arises or the patient's conditions changes.
   */
  previous?: Reference<ClinicalImpression>;

  /**
   * A list of the relevant problems/conditions for a patient.
   */
  problem?: Reference<Condition | AllergyIntolerance>[];

  /**
   * One or more sets of investigations (signs, symptoms, etc.). The actual
   * grouping of investigations varies greatly depending on the type and
   * context of the assessment. These investigations may include data
   * generated during the assessment process, or data previously generated
   * and recorded that is pertinent to the outcomes.
   */
  investigation?: ClinicalImpressionInvestigation[];

  /**
   * Reference to a specific published clinical protocol that was followed
   * during this assessment, and/or that provides evidence in support of
   * the diagnosis.
   */
  protocol?: string[];

  /**
   * A text summary of the investigations and the diagnosis.
   */
  summary?: string;

  /**
   * Specific findings or diagnoses that were considered likely or relevant
   * to ongoing treatment.
   */
  finding?: ClinicalImpressionFinding[];

  /**
   * Estimate of likely outcome.
   */
  prognosisCodeableConcept?: CodeableConcept[];

  /**
   * RiskAssessment expressing likely outcome.
   */
  prognosisReference?: Reference<RiskAssessment>[];

  /**
   * Information supporting the clinical impression.
   */
  supportingInfo?: Reference<Resource>[];

  /**
   * Commentary about the impression, typically recorded after the
   * impression itself was made, though supplemental notes by the original
   * author could also appear.
   */
  note?: Annotation[];
}

/**
 * Specific findings or diagnoses that were considered likely or relevant
 * to ongoing treatment.
 */
export interface ClinicalImpressionFinding {
  /**
   * Specific text or code for finding or diagnosis, which may include
   * ruled-out or resolved conditions.
   */
  itemCodeableConcept?: CodeableConcept;

  /**
   * Specific reference for finding or diagnosis, which may include
   * ruled-out or resolved conditions.
   */
  itemReference?: Reference<Condition | Observation | Media>;

  /**
   * Which investigations support finding or diagnosis.
   */
  basis?: string;
}

/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual
 * grouping of investigations varies greatly depending on the type and
 * context of the assessment. These investigations may include data
 * generated during the assessment process, or data previously generated
 * and recorded that is pertinent to the outcomes.
 */
export interface ClinicalImpressionInvestigation {
  code: CodeableConcept;

  /**
   * A record of a specific investigation that was undertaken.
   */
  item?: Reference<
    | Observation
    | QuestionnaireResponse
    | FamilyMemberHistory
    | DiagnosticReport
    | RiskAssessment
    | ImagingStudy
    | Media
  >[];
}