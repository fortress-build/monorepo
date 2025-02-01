import type { Annotation } from "./Annotation";
import type { Attachment } from "./Attachment";
import type { CareTeam } from "./CareTeam";
import type { CodeableConcept } from "./CodeableConcept";
import type { Condition } from "./Condition";
import type { Device } from "./Device";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { Encounter } from "./Encounter";
import type { Group } from "./Group";
import type { HealthcareService } from "./HealthcareService";
import type { Identifier } from "./Identifier";
import type { Observation } from "./Observation";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource, Resource } from "./Resource";



/**
 * Text, attachment(s), or resource(s) to be communicated to the
 * recipient.
 */
export interface CommunicationRequestPayload {
  /**
   * The communicated content (or for multi-part communications, one
   * portion of the communication).
   */
  contentString?: string;

  /**
   * The communicated content (or for multi-part communications, one
   * portion of the communication).
   */
  contentAttachment?: Attachment;

  /**
   * The communicated content (or for multi-part communications, one
   * portion of the communication).
   */
  contentReference?: Reference<Resource>;
}

/**
 * A request to convey information; e.g. the CDS system proposes that an
 * alert be sent to a responsible provider, the CDS system proposes that
 * the public health agency be notified about a reportable condition.
 */
export declare class CommunicationRequest extends DomainResource {
  resourceType: 'CommunicationRequest';
  /**
   * Business identifiers assigned to this communication request by the
   * performer or other systems which remain constant as the resource is
   * updated and propagates from server to server.
   */
  identifier?: Identifier[];

  /**
   * A plan or proposal that is fulfilled in whole or in part by this
   * request.
   */
  basedOn?: Reference<Resource>[];

  /**
   * Completed or terminated request(s) whose function is taken by this new
   * request.
   */
  replaces?: Reference<CommunicationRequest>[];

  /**
   * A shared identifier common to all requests that were authorized more
   * or less simultaneously by a single author, representing the identifier
   * of the requisition, prescription or similar form.
   */
  groupIdentifier?: Identifier;

  /**
   * The status of the proposal or order.
   */
  status:
    | 'draft'
    | 'active'
    | 'on-hold'
    | 'revoked'
    | 'completed'
    | 'entered-in-error'
    | 'unknown';

  /**
   * Captures the reason for the current state of the CommunicationRequest.
   */
  statusReason?: CodeableConcept;

  /**
   * The type of message to be sent such as alert, notification, reminder,
   * instruction, etc.
   */
  category?: CodeableConcept[];

  /**
   * Characterizes how quickly the proposed act must be initiated. Includes
   * concepts such as stat, urgent, routine.
   */
  priority?: 'routine' | 'urgent' | 'asap' | 'stat';

  /**
   * If true indicates that the CommunicationRequest is asking for the
   * specified action to *not* occur.
   */
  doNotPerform?: boolean;

  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: CodeableConcept[];

  /**
   * The patient or group that is the focus of this communication request.
   */
  subject?: Reference<Patient | Group>;

  /**
   * Other resources that pertain to this communication request and to
   * which this communication request should be associated.
   */
  about?: Reference<Resource>[];

  /**
   * The Encounter during which this CommunicationRequest was created or to
   * which the creation of this record is tightly associated.
   */
  encounter?: Reference<Encounter>;

  /**
   * Text, attachment(s), or resource(s) to be communicated to the
   * recipient.
   */
  payload?: CommunicationRequestPayload[];

  /**
   * The time when this communication is to occur.
   */
  occurrenceDateTime?: string;

  /**
   * The time when this communication is to occur.
   */
  occurrencePeriod?: Period;

  /**
   * For draft requests, indicates the date of initial creation.  For
   * requests with other statuses, indicates the date of activation.
   */
  authoredOn?: string;

  /**
   * The device, individual, or organization who initiated the request and
   * has responsibility for its activation.
   */
  requester?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | Patient
    | RelatedPerson
    | Device
  >;

  /**
   * The entity (e.g. person, organization, clinical information system,
   * device, group, or care team) which is the intended target of the
   * communication.
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
   * device) which is to be the source of the communication.
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
   * Describes why the request is being made in coded or textual form.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this request.
   */
  reasonReference?: Reference<
    Condition | Observation | DiagnosticReport | DocumentReference
  >[];

  /**
   * Comments made about the request by the requester, sender, recipient,
   * subject or other participants.
   */
  note?: Annotation[];
}
