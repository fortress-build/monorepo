import type { Annotation } from './Annotation';
import type { CodeableConcept } from './CodeableConcept';
import type { Identifier } from './Identifier';
import type { Period } from './Period';
import type { Quantity } from './Quantity';
import type { Range } from './Range';
import type { Reference } from './Reference';
import type { Timing } from './Timing';
import type { DomainResource, Resource } from './Resource';
import type { Device } from './Device';
import type { Location } from './Location';
import type { Group } from './Group';
import type { Patient } from './Patient';
import type { Encounter } from './Encounter';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { Organization } from './Organization';
import type { CareTeam } from './CareTeam';
import type { HealthcareService } from './HealthcareService';
import type { RelatedPerson } from './RelatedPerson';
import type { ClaimResponse } from './ClaimResponse';
import type { Provenance } from './Provenance';
import type { Coverage } from './Coverage';
import type { Condition } from './Condition';
import type { Observation } from './Observation';
import type { DiagnosticReport } from './DiagnosticReport';
import type { DocumentReference } from './DocumentReference';

/**
 * Represents a request for a patient to employ a medical device. The
 * device may be an implantable device, or an external assistive device,
 * such as a walker.
 */
export declare class DeviceRequest extends DomainResource {
  resourceType: 'DeviceRequest';

  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or
   * other definition that is adhered to in whole or in part by this
   * DeviceRequest.
   */
  instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline,
   * orderset or other definition that is adhered to in whole or in part by
   * this DeviceRequest.
   */
  instantiatesUri?: string[];

  /**
   * Plan/proposal/order fulfilled by this request.
   */
  basedOn?: Reference<Resource>[];

  /**
   * The request takes the place of the referenced completed or terminated
   * request(s).
   */
  priorRequest?: Reference<Resource>[];

  /**
   * Composite request this is part of.
   */
  groupIdentifier?: Identifier;

  /**
   * The status of the request.
   */
  status?:
    | 'draft'
    | 'active'
    | 'on-hold'
    | 'revoked'
    | 'completed'
    | 'entered-in-error'
    | 'unknown';

  /**
   * Whether the request is a proposal, plan, an original order or a reflex
   * order.
   */
  intent:
    | 'proposal'
    | 'plan'
    | 'directive'
    | 'order'
    | 'original-order'
    | 'reflex-order'
    | 'filler-order'
    | 'instance-order'
    | 'option';

  /**
   * Indicates how quickly the {{title}} should be addressed with respect
   * to other requests.
   */
  priority?: 'routine' | 'urgent' | 'asap' | 'stat';

  /**
   * The details of the device to be used.
   */
  codeReference?: Reference<Device>;

  /**
   * The details of the device to be used.
   */
  codeCodeableConcept?: CodeableConcept;

  /**
   * Specific parameters for the ordered item.  For example, the prism
   * value for lenses.
   */
  parameter?: DeviceRequestParameter[];

  /**
   * The patient who will use the device.
   */
  subject: Reference<Patient | Group | Location | Device>;

  /**
   * An encounter that provides additional context in which this request is
   * made.
   */
  encounter?: Reference<Encounter>;

  /**
   * The timing schedule for the use of the device. The Schedule data type
   * allows many different expressions, for example. &quot;Every 8 hours&quot;;
   * &quot;Three times a day&quot;; &quot;1/2 an hour before breakfast for 10 days from
   * 23-Dec 2011:&quot;; &quot;15 Oct 2013, 17 Oct 2013 and 1 Nov 2013&quot;.
   */
  occurrenceDateTime?: string;

  /**
   * The timing schedule for the use of the device. The Schedule data type
   * allows many different expressions, for example. &quot;Every 8 hours&quot;;
   * &quot;Three times a day&quot;; &quot;1/2 an hour before breakfast for 10 days from
   * 23-Dec 2011:&quot;; &quot;15 Oct 2013, 17 Oct 2013 and 1 Nov 2013&quot;.
   */
  occurrencePeriod?: Period;

  /**
   * The timing schedule for the use of the device. The Schedule data type
   * allows many different expressions, for example. &quot;Every 8 hours&quot;;
   * &quot;Three times a day&quot;; &quot;1/2 an hour before breakfast for 10 days from
   * 23-Dec 2011:&quot;; &quot;15 Oct 2013, 17 Oct 2013 and 1 Nov 2013&quot;.
   */
  occurrenceTiming?: Timing;

  /**
   * When the request transitioned to being actionable.
   */
  authoredOn?: string;

  /**
   * The individual who initiated the request and has responsibility for
   * its activation.
   */
  requester?: Reference<
    Device | Practitioner | PractitionerRole | Organization
  >;

  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  performerType?: CodeableConcept;

  /**
   * The desired performer for doing the diagnostic testing.
   */
  performer?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | CareTeam
    | HealthcareService
    | Patient
    | Device
    | RelatedPerson
  >;

  /**
   * Reason or justification for the use of this device.
   */
  reasonCode?: CodeableConcept[];

  /**
   * Reason or justification for the use of this device.
   */
  reasonReference?: Reference<
    Condition | Observation | DiagnosticReport | DocumentReference
  >[];

  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or
   * pre-determinations that may be required for delivering the requested
   * service.
   */
  insurance?: Reference<Coverage | ClaimResponse>[];

  /**
   * Additional clinical information about the patient that may influence
   * the request fulfilment.  For example, this may include where on the
   * subject's body the device will be used (i.e. the target site).
   */
  supportingInfo?: Reference<Resource>[];

  /**
   * Details about this request that were not represented at all or
   * sufficiently in one of the attributes provided in a class. These may
   * include for example a comment, an instruction, or a note associated
   * with the statement.
   */
  note?: Annotation[];

  /**
   * Key events in the history of the request.
   */
  relevantHistory?: Reference<Provenance>[];
}

/**
 * The details of the device to be used.
 */
export type DeviceRequestCode = CodeableConcept | Reference<Device>;

/**
 * The timing schedule for the use of the device. The Schedule data type
 * allows many different expressions, for example. &quot;Every 8 hours&quot;;
 * &quot;Three times a day&quot;; &quot;1/2 an hour before breakfast for 10 days from
 * 23-Dec 2011:&quot;; &quot;15 Oct 2013, 17 Oct 2013 and 1 Nov 2013&quot;.
 */
export type DeviceRequestOccurrence = Period | string | Timing;

/**
 * Specific parameters for the ordered item.  For example, the prism
 * value for lenses.
 */
export interface DeviceRequestParameter {
  /**
   * A code or string that identifies the device detail being asserted.
   */
  code?: CodeableConcept;

  /**
   * The value of the device detail.
   */
  valueCodeableConcept?: CodeableConcept;

  /**
   * The value of the device detail.
   */
  valueQuantity?: Quantity;

  /**
   * The value of the device detail.
   */
  valueRange?: Range;

  /**
   * The value of the device detail.
   */
  valueBoolean?: boolean;
}

/**
 * The value of the device detail.
 */
export type DeviceRequestParameterValue =
  | boolean
  | CodeableConcept
  | Quantity
  | Range;