import type { Annotation } from "./Annotation";
import type { Claim } from "./Claim";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { Group } from "./Group";
import type { Identifier } from "./Identifier";
import type { Media } from "./Media";
import type { Observation } from "./Observation";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { QuestionnaireResponse } from "./QuestionnaireResponse";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource } from "./Resource";
import type { ServiceRequest } from "./ServiceRequest";
import type { Timing } from "./Timing";


/**
 * A record of a device being used by a patient where the record is the
 * result of a report from the patient or another clinician.
 */
export declare class DeviceUseStatement extends DomainResource {
  resourceType: 'DeviceUseStatement';
  /**
   * An external identifier for this statement such as an IRI.
   */
  identifier?: Identifier[];

  /**
   * A plan, proposal or order that is fulfilled in whole or in part by
   * this DeviceUseStatement.
   */
  basedOn?: Reference<ServiceRequest>[];

  /**
   * A code representing the patient or other source's judgment about the
   * state of the device used that this statement is about.  Generally this
   * will be active or completed.
   */
  status:
    | 'active'
    | 'completed'
    | 'entered-in-error'
    | 'intended'
    | 'stopped'
    | 'on-hold';

  /**
   * The patient who used the device.
   */
  subject: Reference<Patient | Group>;

  /**
   * Allows linking the DeviceUseStatement to the underlying Request, or to
   * other information that supports or is used to derive the
   * DeviceUseStatement.
   */
  derivedFrom?: Reference<
    | ServiceRequest
    | Procedure
    | Claim
    | Observation
    | QuestionnaireResponse
    | DocumentReference
  >[];

  /**
   * How often the device was used.
   */
  timingTiming?: Timing;

  /**
   * How often the device was used.
   */
  timingPeriod?: Period;

  /**
   * How often the device was used.
   */
  timingDateTime?: string;

  /**
   * The time at which the statement was made/recorded.
   */
  recordedOn?: string;

  /**
   * Who reported the device was being used by the patient.
   */
  source?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson>;

  /**
   * The details of the device used.
   */
  device: Reference<Device>;

  /**
   * Reason or justification for the use of the device.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this
   * DeviceUseStatement.
   */
  reasonReference?: Reference<
    Condition | Observation | DiagnosticReport | DocumentReference | Media
  >[];

  /**
   * Indicates the anotomic location on the subject's body where the device
   * was used ( i.e. the target).
   */
  bodySite?: CodeableConcept;

  /**
   * Details about the device statement that were not represented at all or
   * sufficiently in one of the attributes provided in a class. These may
   * include for example a comment, an instruction, or a note associated
   * with the statement.
   */
  note?: Annotation[];
}
