import type { CodeableConcept } from './CodeableConcept';
import type { Device } from './Device';
import type { Identifier } from './Identifier';
import type { Patient } from './Patient';
import type { Period } from './Period';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { Reference } from './Reference';
import type { DomainResource, Resource } from './Resource';

export type DetectedIssueStatus =
  | 'preliminary'
  | 'final'
  | 'entered-in-error'
  | 'mitigated';

export type DetectedIssueSeverity = 'high' | 'moderate' | 'low';

/**
 * Indicates an actual or potential clinical issue with or between one or
 * more active or proposed clinical actions for a patient; e.g. Drug-drug
 * interaction, Ineffective treatment frequency, Procedure-condition
 * conflict, etc.
 */
export declare class DetectedIssue extends DomainResource {
  resourceType: 'DetectedIssue';
  /**
   * Business identifier associated with the detected issue record.
   */
  identifier?: Identifier[];

  /**
   * Indicates the status of the detected issue.
   */
  status: 'preliminary' | 'final' | 'entered-in-error' | 'mitigated';

  /**
   * Identifies the general type of issue identified.
   */
  code?: CodeableConcept;

  /**
   * Indicates the degree of importance associated with the identified
   * issue based on the potential impact on the patient.
   */
  severity?: 'high' | 'moderate' | 'low';

  /**
   * Indicates the patient whose record the detected issue is associated
   * with.
   */
  patient?: Reference<Patient>;

  /**
   * The date or period when the detected issue was initially identified.
   */
  identifiedDateTime?: string;

  /**
   * The date or period when the detected issue was initially identified.
   */
  identifiedPeriod?: Period;

  /**
   * Individual or device responsible for the issue being raised.  For
   * example, a decision support application or a pharmacist conducting a
   * medication review.
   */
  author?: Reference<Practitioner | PractitionerRole | Device>;

  /**
   * Indicates the resource representing the current activity or proposed
   * activity that is potentially problematic.
   */
  implicated?: Reference<Resource>[];

  /**
   * Supporting evidence or manifestations that provide the basis for
   * identifying the detected issue such as a GuidanceResponse or
   * MeasureReport.
   */
  evidence?: DetectedIssueEvidence[];

  /**
   * A textual explanation of the detected issue.
   */
  detail?: string;

  /**
   * The literature, knowledge-base or similar reference that describes the
   * propensity for the detected issue identified.
   */
  reference?: string;

  /**
   * Indicates an action that has been taken or is committed to reduce or
   * eliminate the likelihood of the risk identified by the detected issue
   * from manifesting.  Can also reflect an observation of known mitigating
   * factors that may reduce/eliminate the need for any action.
   */
  mitigation?: DetectedIssueMitigation[];
}

/**
 * Supporting evidence or manifestations that provide the basis for
 * identifying the detected issue such as a GuidanceResponse or
 * MeasureReport.
 */
export interface DetectedIssueEvidence {
  /**
   * A manifestation that led to the recording of this detected issue.
   */
  code?: CodeableConcept[];

  /**
   * Links to resources that constitute evidence for the detected issue
   * such as a GuidanceResponse or MeasureReport.
   */
  detail?: Reference<Resource>[];
}

/**
 * Indicates an action that has been taken or is committed to reduce or
 * eliminate the likelihood of the risk identified by the detected issue
 * from manifesting.  Can also reflect an observation of known mitigating
 * factors that may reduce/eliminate the need for any action.
 */
export interface DetectedIssueMitigation {
  /**
   * Describes the action that was taken or the observation that was made
   * that reduces/eliminates the risk associated with the identified issue.
   */
  action: CodeableConcept;

  /**
   * Indicates when the mitigating action was documented.
   */
  date?: string;

  /**
   * Identifies the practitioner who determined the mitigation and takes
   * responsibility for the mitigation step occurring.
   */
  author?: Reference<Practitioner | PractitionerRole>;
}
