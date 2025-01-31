import type { DomainResource, Resource } from './Resource';
import type { Identifier } from './Identifier';
import type { CodeableConcept } from './CodeableConcept';
import type { Reference } from './Reference';
import type { Period } from './Period';
import type { EpisodeOfCare } from './EpisodeOfCare';
import type { Encounter } from './Encounter';
import type { Patient } from './Patient';
import type { Group } from './Group';
import type { Timing } from './Timing';
import type { Annotation } from './Annotation';
import type { Quantity } from './Quantity';
import type { Account } from './Account';
import type { Medication } from './Medication';
import type { Immunization } from './Immunization';
import type { MedicationAdministration } from './MedicationAdministration';
import type { MedicationDispense } from './MedicationDispense';
import type { Observation } from './Observation';
import type { Procedure } from './Procedure';
import type { SupplyDelivery } from './SupplyDelivery';
import type { DiagnosticReport } from './DiagnosticReport';
import type { ImagingStudy } from './ImagingStudy';
import type { Substance } from './Substance';
import type { Device } from './Device';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { Organization } from './Organization';
import type { RelatedPerson } from './RelatedPerson';
import type { CareTeam } from './CareTeam';

/**
 * Indicates who or what performed or participated in the charged
 * service.
 */
export declare class ChargeItemPerformer {
  /**
   * Describes the type of performance or participation(e.g. primary
   * surgeon, anesthesiologiest, etc.).
   */
  function?: CodeableConcept;

  /**
   * The device, practitioner, etc. who performed or participated in the
   * service.
   */
  actor: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | CareTeam
    | Patient
    | Device
    | RelatedPerson
  >;
}

/**
 * The resource ChargeItem describes the provision of healthcare provider
 * products for a certain patient, therefore referring not only to the
 * product, but containing in addition details of the provision, like
 * date, time, amounts and participating organizations and persons. Main
 * Usage of the ChargeItem is to enable the billing process and internal
 * cost allocation.
 */
export declare class ChargeItem extends DomainResource {
  resourceType: 'ChargeItem';

  /**
   * Identifiers assigned to this event performer or other systems.
   */
  identifier?: Identifier[];

  /**
   * References the (external) source of pricing information, rules of
   * application for the code this ChargeItem uses.
   */
  definitionUri?: string[];

  /**
   * References the source of pricing information, rules of application for
   * the code this ChargeItem uses.
   */
  definitionCanonical?: string[];

  /**
   * The current state of the ChargeItem.
   */
  status:
    | 'planned'
    | 'billable'
    | 'not-billable'
    | 'aborted'
    | 'billed'
    | 'entered-in-error'
    | 'unknown';

  /**
   * ChargeItems can be grouped to larger ChargeItems covering the whole
   * set.
   */
  partOf?: Reference<ChargeItem>[];

  /**
   * A code that identifies the charge, like a billing code.
   */
  code: CodeableConcept;

  /**
   * The individual or set of individuals the action is being or was
   * performed on.
   */
  subject: Reference<Patient | Group>;

  /**
   * The encounter or episode of care that establishes the context for this
   * event.
   */
  context?: Reference<Encounter | EpisodeOfCare>;

  /**
   * Date/time(s) or duration when the charged service was applied.
   */
  occurrenceDateTime?: string;

  /**
   * Date/time(s) or duration when the charged service was applied.
   */
  occurrencePeriod?: Period;

  /**
   * Date/time(s) or duration when the charged service was applied.
   */
  occurrenceTiming?: Timing;

  /**
   * Indicates who or what performed or participated in the charged
   * service.
   */
  performer?: ChargeItemPerformer[];

  /**
   * The organization requesting the service.
   */
  performingOrganization?: Reference<Organization>;

  /**
   * The organization performing the service.
   */
  requestingOrganization?: Reference<Organization>;

  /**
   * The financial cost center permits the tracking of charge attribution.
   */
  costCenter?: Reference<Organization>;

  /**
   * Quantity of which the charge item has been serviced.
   */
  quantity?: Quantity;

  /**
   * The anatomical location where the related service has been applied.
   */
  bodysite?: CodeableConcept[];

  /**
   * Factor overriding the factor determined by the rules associated with
   * the code.
   */
  factorOverride?: number;

  /**
   * Total price of the charge overriding the list price associated with
   * the code.
   */
  priceOverride?: {
    value: number;
    currency: string;
  };
  
  /**
   * If the list price or the rule-based factor associated with the code is
   * overridden, this attribute can capture a text to indicate the  reason
   * for this action.
   */
  overrideReason?: string;

  /**
   * The device, practitioner, etc. who entered the charge item.
   */
  enterer?: Reference<
    | Practitioner
    | PractitionerRole
    | Organization
    | Patient
    | Device
    | RelatedPerson
  >;

  /**
   * Date the charge item was entered.
   */
  enteredDate?: string;

  /**
   * Describes why the event occurred in coded or textual form.
   */
  reason?: CodeableConcept[];

  /**
   * Indicated the rendered service that caused this charge.
   */
  service?: Reference<
    | DiagnosticReport
    | ImagingStudy
    | Immunization
    | MedicationAdministration
    | MedicationDispense
    | Observation
    | Procedure
    | SupplyDelivery
  >[];

  /**
   * Identifies the device, food, drug or other product being charged
   * either by type code or reference to an instance.
   */
  productReference?: Reference<Device | Medication | Substance>;

  /**
   * Identifies the device, food, drug or other product being charged
   * either by type code or reference to an instance.
   */
  productCodeableConcept?: CodeableConcept;

  /**
   * Account into which this ChargeItems belongs.
   */
  account?: Reference<Account>[];

  /**
   * Comments made about the event by the performer, subject or other
   * participants.
   */
  note?: Annotation[];

  /**
   * Further information supporting this charge.
   */
  supportingInformation?: Reference<Resource>[];
}
