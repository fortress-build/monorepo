import type { DomainResource, Resource } from './Resource';
import type { Group } from './Group';
import type { Patient } from './Patient';
import type { Reference } from './Reference';
import type { Encounter } from './Encounter';
import type { CodeableConcept } from './CodeableConcept';
import type { Identifier } from './Identifier';
import type { Period } from './Period';
import type { Age } from './Age';
import type { PractitionerRole } from './PractitionerRole';
import type { RelatedPerson } from './RelatedPerson';
import type { Practitioner } from './Practitioner';
import type { DiagnosticReport } from './DiagnosticReport';
import type { Observation } from './Observation';
import type { Annotation } from './Annotation';

/**
 * A clinical condition, problem, diagnosis, or other event, situation,
 * issue, or clinical concept that has risen to a level of concern.
 */
export declare class Condition extends DomainResource {
  resourceType: 'Condition';

  /**
   * Business identifiers assigned to this condition by the performer or
   * other systems which remain constant as the resource is updated and
   * propagates from server to server.
   */
  identifier?: Identifier[];

  /**
   * The clinical status of the condition.
   */
  clinicalStatus?: CodeableConcept;

  /**
   * The verification status to support the clinical status of the
   * condition.
   */
  verificationStatus?: CodeableConcept;

  /**
   * A category assigned to the condition.
   */
  category?: CodeableConcept[];

  /**
   * A subjective assessment of the severity of the condition as evaluated
   * by the clinician.
   */
  severity?: CodeableConcept;

  /**
   * Identification of the condition, problem or diagnosis.
   */
  code?: CodeableConcept;

  /**
   * The anatomical location where this condition manifests itself.
   */
  bodySite?: CodeableConcept[];

  /**
   * Indicates the patient or group who the condition record is associated
   * with.
   */
  subject: Reference<Patient | Group>;

  /**
   * The Encounter during which this Condition was created or to which the
   * creation of this record is tightly associated.
   */
  encounter?: Reference<Encounter>;

  /**
   * Estimated or actual date or date-time  the condition began, in the
   * opinion of the clinician.
   */
  onsetDateTime?: string;

  /**
   * Estimated or actual date or date-time  the condition began, in the
   * opinion of the clinician.
   */
  onsetAge?: Age;

  /**
   * Estimated or actual date or date-time  the condition began, in the
   * opinion of the clinician.
   */
  onsetPeriod?: Period;

  /**
   * Estimated or actual date or date-time  the condition began, in the
   * opinion of the clinician.
   */
  onsetRange?: Range;

  /**
   * Estimated or actual date or date-time  the condition began, in the
   * opinion of the clinician.
   */
  onsetString?: string;

  /**
   * The date or estimated date that the condition resolved or went into
   * remission. This is called &quot;abatement&quot; because of the many overloaded
   * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
   * are never really resolved, but they can abate.
   */
  abatementDateTime?: string;

  /**
   * The date or estimated date that the condition resolved or went into
   * remission. This is called &quot;abatement&quot; because of the many overloaded
   * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
   * are never really resolved, but they can abate.
   */
  abatementAge?: Age;

  /**
   * The date or estimated date that the condition resolved or went into
   * remission. This is called &quot;abatement&quot; because of the many overloaded
   * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
   * are never really resolved, but they can abate.
   */
  abatementPeriod?: Period;

  /**
   * The date or estimated date that the condition resolved or went into
   * remission. This is called &quot;abatement&quot; because of the many overloaded
   * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
   * are never really resolved, but they can abate.
   */
  abatementRange?: Range;

  /**
   * The date or estimated date that the condition resolved or went into
   * remission. This is called &quot;abatement&quot; because of the many overloaded
   * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
   * are never really resolved, but they can abate.
   */
  abatementString?: string;

  /**
   * The recordedDate represents when this particular Condition record was
   * created in the system, which is often a system-generated date.
   */
  recordedDate?: string;

  /**
   * Individual who recorded the record and takes responsibility for its
   * content.
   */
  recorder?: Reference<
    Practitioner | PractitionerRole | Patient | RelatedPerson
  >;

  /**
   * Individual who is making the condition statement.
   */
  asserter?: Reference<
    Practitioner | PractitionerRole | Patient | RelatedPerson
  >;

  /**
   * Clinical stage or grade of a condition. May include formal severity
   * assessments.
   */
  stage?: ConditionStage[];

  /**
   * Supporting evidence / manifestations that are the basis of the
   * Condition's verification status, such as evidence that confirmed or
   * refuted the condition.
   */
  evidence?: ConditionEvidence[];

  /**
   * Additional information about the Condition. This is a general
   * notes/comments entry  for description of the Condition, its diagnosis
   * and prognosis.
   */
  note?: Annotation[];
}

/**
 * Supporting evidence / manifestations that are the basis of the
 * Condition's verification status, such as evidence that confirmed or
 * refuted the condition.
 */
export interface ConditionEvidence {
  /**
   * A manifestation or symptom that led to the recording of this
   * condition.
   */
  code?: CodeableConcept[];

  /**
   * Links to other relevant information, including pathology reports.
   */
  detail?: Reference<Resource>[];
}

/**
 * Clinical stage or grade of a condition. May include formal severity
 * assessments.
 */
export interface ConditionStage {
  /**
   * A simple summary of the stage such as &quot;Stage 3&quot;. The determination of
   * the stage is disease-specific.
   */
  summary?: CodeableConcept;

  /**
   * Reference to a formal record of the evidence on which the staging
   * assessment is based.
   */
  assessment?: Reference<DiagnosticReport | Observation>[];

  /**
   * The kind of staging, such as pathological or clinical staging.
   */
  type?: CodeableConcept;
}