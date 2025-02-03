import type { Identifier } from './Identifier';
import type { CodeableConcept } from './CodeableConcept';
import type { Reference } from './Reference';
import type { Period } from './Period';
import type { Money } from './Money';
import type { Quantity } from './Quantity';
import type { DomainResource, Resource } from './Resource';
import type { Condition } from './Condition';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { Patient } from './Patient';
import type { Location } from './Location';
import type { Organization } from './Organization';
import type { Coverage } from './Coverage';

/**
 * The CoverageEligibilityRequest provides patient and insurance coverage
 * information to an insurer for them to respond, in the form of an
 * CoverageEligibilityResponse, with information regarding whether the
 * stated coverage is valid and in-force and optionally to provide the
 * insurance details of the policy.
 */
export declare class CoverageEligibilityRequest {
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: Identifier[];

  /**
   * The status of the resource instance.
   */
  status: 'active' | 'cancelled' | 'draft' | 'entered-in-error';

  /**
   * When the requestor expects the processor to complete processing.
   */
  priority?: CodeableConcept;

  /**
   * Code to specify whether requesting: prior authorization requirements
   * for some service categories or billing codes; benefits for coverages
   * specified or discovered; discovery and return of coverages for the
   * patient; and/or validation that the specified coverage is in-force at
   * the date/period specified or 'now' if not specified.
   */
  purpose: ('auth-requirements' | 'benefits' | 'discovery' | 'validation')[];

  /**
   * The party who is the beneficiary of the supplied coverage and for whom
   * eligibility is sought.
   */
  patient: Reference<Patient>;

  /**
   * The date or dates when the enclosed suite of services were performed
   * or completed.
   */
  servicedDate?: string;

  /**
   * The date or dates when the enclosed suite of services were performed
   * or completed.
   */
  servicedPeriod?: Period;

  /**
   * The date when this resource was created.
   */
  created: string;

  /**
   * Person who created the request.
   */
  enterer?: Reference<Practitioner | PractitionerRole>;

  /**
   * The provider which is responsible for the request.
   */
  provider?: Reference<Practitioner | PractitionerRole | Organization>;

  /**
   * The Insurer who issued the coverage in question and is the recipient
   * of the request.
   */
  insurer: Reference<Organization>;

  /**
   * Facility where the services are intended to be provided.
   */
  facility?: Reference<Location>;

  /**
   * Additional information codes regarding exceptions, special
   * considerations, the condition, situation, prior or concurrent issues.
   */
  supportingInfo?: CoverageEligibilityRequestSupportingInfo[];

  /**
   * Financial instruments for reimbursement for the health care products
   * and services.
   */
  insurance?: CoverageEligibilityRequestInsurance[];

  /**
   * Service categories or billable services for which benefit details
   * and/or an authorization prior to service delivery may be required by
   * the payor.
   */
  item?: CoverageEligibilityRequestItem[];
}

/**
 * The date or dates when the enclosed suite of services were performed
 * or completed.
 */
export type CoverageEligibilityRequestServiced = Period | string;

/**
 * Financial instruments for reimbursement for the health care products
 * and services.
 */
export interface CoverageEligibilityRequestInsurance {
  /**
   * A flag to indicate that this Coverage is to be used for evaluation of
   * this request when set to true.
   */
  focal?: boolean;

  /**
   * Reference to the insurance card level information contained in the
   * Coverage resource. The coverage issuing insurer will use these details
   * to locate the patient's actual coverage within the insurer's
   * information system.
   */
  coverage: Reference<Coverage>;

  /**
   * A business agreement number established between the provider and the
   * insurer for special business processing purposes.
   */
  businessArrangement?: string;
}

/**
 * Service categories or billable services for which benefit details
 * and/or an authorization prior to service delivery may be required by
 * the payor.
 */
export interface CoverageEligibilityRequestItem {
  /**
   * Exceptions, special conditions and supporting information applicable
   * for this service or product line.
   */
  supportingInfoSequence?: number[];

  /**
   * Code to identify the general type of benefits under which products and
   * services are provided.
   */
  category?: CodeableConcept;

  /**
   * This contains the product, service, drug or other billing code for the
   * item.
   */
  productOrService?: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  modifier?: CodeableConcept[];

  /**
   * The practitioner who is responsible for the product or service to be
   * rendered to the patient.
   */
  provider?: Reference<Practitioner | PractitionerRole>;

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity;

  /**
   * The amount charged to the patient by the provider for a single unit.
   */
  unitPrice?: Money;

  /**
   * Facility where the services will be provided.
   */
  facility?: Reference<Location | Organization>;

  /**
   * Patient diagnosis for which care is sought.
   */
  diagnosis?: CoverageEligibilityRequestItemDiagnosis[];

  /**
   * The plan/proposal/order describing the proposed service in detail.
   */
  detail?: Reference<Resource>[];
}

/**
 * Patient diagnosis for which care is sought.
 */
export interface CoverageEligibilityRequestItemDiagnosis {
  /**
   * The nature of illness or problem in a coded form or as a reference to
   * an external defined Condition.
   */
  diagnosisCodeableConcept?: CodeableConcept;

  /**
   * The nature of illness or problem in a coded form or as a reference to
   * an external defined Condition.
   */
  diagnosisReference?: Reference<Condition>;
}

/**
 * The nature of illness or problem in a coded form or as a reference to
 * an external defined Condition.
 */
export type CoverageEligibilityRequestItemDiagnosisDiagnosis =
  | CodeableConcept
  | Reference<Condition>;

/**
 * Additional information codes regarding exceptions, special
 * considerations, the condition, situation, prior or concurrent issues.
 */
export interface CoverageEligibilityRequestSupportingInfo {
  /**
   * A number to uniquely identify supporting information entries.
   */
  sequence: number;

  /**
   * Additional data or information such as resources, documents, images
   * etc. including references to the data or the actual inclusion of the
   * data.
   */
  information: Reference<Resource>;

  /**
   * The supporting materials are applicable for all detail items,
   * product/servce categories and specific billing codes.
   */
  appliesToAll?: boolean;
}