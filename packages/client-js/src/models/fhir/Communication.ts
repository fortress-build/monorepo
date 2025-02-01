import type { Annotation } from './Annotation';
import type { Attachment } from './Attachment';
import type { CareTeam } from './CareTeam';
import type { CodeableConcept } from './CodeableConcept';
import type { Condition } from './Condition';
import type { Device } from './Device';
import type { DiagnosticReport } from './DiagnosticReport';
import type { DocumentReference } from './DocumentReference';
import type { Encounter } from './Encounter';
import type { Group } from './Group';
import type { HealthcareService } from './HealthcareService';
import type { Identifier } from './Identifier';
import type { Observation } from './Observation';
import type { Organization } from './Organization';
import type { Patient } from './Patient';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { Reference } from './Reference';
import type { RelatedPerson } from './RelatedPerson';
import type { DomainResource, Resource } from './Resource';

/**
 * An occurrence of information being transmitted; e.g. an alert that was
 * sent to a responsible provider, a public health agency that was
 * notified about a reportable condition.
 */
export declare class Communication extends DomainResource {
  resourceType: 'Communication';
  /**
   * Business identifiers assigned to this communication by the performer
   * or other systems which remain constant as the resource is updated and
   * propagates from server to server.
   */
  identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or
   * other definition that is adhered to in whole or in part by this
   * Communication.
   */
  instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline,
   * orderset or other definition that is adhered to in whole or in part by
   * this Communication.
   */
  instantiatesUri?: string[];

  /**
   * An order, proposal or plan fulfilled in whole or in part by this
   * Communication.
   */
  basedOn?: Reference<Resource>[];

  /**
   * Part of this action.
   */
  partOf?: Reference<Resource>[];

  /**
   * Prior communication that this communication is in response to.
   */
  inResponseTo?: Reference<Communication>[];

  /**
   * The status of the transmission.
   */
  status:
    | 'preparation'
    | 'in-progress'
    | 'not-done'
    | 'on-hold'
    | 'stopped'
    | 'completed'
    | 'entered-in-error'
    | 'unknown';

  /**
   * Captures the reason for the current state of the Communication.
   */
  statusReason?: CodeableConcept;

  /**
   * The type of message conveyed such as alert, notification, reminder,
   * instruction, etc.
   */
  category?: CodeableConcept[];

  /**
   * Characterizes how quickly the planned or in progress communication
   * must be addressed. Includes concepts such as stat, urgent, routine.
   */
  priority?: 'routine' | 'urgent' | 'asap' | 'stat';

  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: CodeableConcept[];

  /**
   * The patient or group that was the focus of this communication.
   */
  subject?: Reference<Patient | Group>;

  /**
   * Description of the purpose/content, similar to a subject line in an
   * email.
   */
  topic?: CodeableConcept;

  /**
   * Other resources that pertain to this communication and to which this
   * communication should be associated.
   */
  about?: Reference<Resource>[];

  /**
   * The Encounter during which this Communication was created or to which
   * the creation of this record is tightly associated.
   */
  encounter?: Reference<Encounter>;

  /**
   * The time when this communication was sent.
   */
  sent?: string;

  /**
   * The time when this communication arrived at the destination.
   */
  received?: string;

  /**
   * The entity (e.g. person, organization, clinical information system,
   * care team or device) which was the target of the communication. If
   * receipts need to be tracked by an individual, a separate resource
   * instance will need to be created for each recipient.  Multiple
   * recipient communications are intended where either receipts are not
   * tracked (e.g. a mass mail-out) or a receipt is captured in aggregate
   * (all emails confirmed received by a particular time).
   */
  recipient?: Reference<
    | Device
    | Organization
    | Patient
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | Group
    | CareTeam
    | HealthcareService
  >[];

  /**
   * The entity (e.g. person, organization, clinical information system, or
   * device) which was the source of the communication.
   */
  sender?: Reference<
    | Device
    | Organization
    | Patient
    | Practitioner
    | PractitionerRole
    | RelatedPerson
    | HealthcareService
  >;

  /**
   * The reason or justification for the communication.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this
   * communication.
   */
  reasonReference?: Reference<
    Condition | Observation | DiagnosticReport | DocumentReference
  >[];

  /**
   * Text, attachment(s), or resource(s) that was communicated to the
   * recipient.
   */
  payload?: CommunicationPayload[];

  /**
   * Additional notes or commentary about the communication by the sender,
   * receiver or other interested parties.
   */
  note?: Annotation[];
}

/**
 * Text, attachment(s), or resource(s) that was communicated to the
 * recipient.
 */
export interface CommunicationPayload {
  /**
   * A communicated content (or for multi-part communications, one portion
   * of the communication).
   */
  contentString?: string;

  /**
   * A communicated content (or for multi-part communications, one portion
   * of the communication).
   */
  contentAttachment?: Attachment;

  /**
   * A communicated content (or for multi-part communications, one portion
   * of the communication).
   */
  contentReference?: Reference<Resource>;
}