import type { CodeableConcept } from './CodeableConcept';
import type { Contract } from './Contract';
import type { Identifier } from './Identifier';
import type { Money } from './Money';
import type { Organization } from './Organization';
import type { Patient } from './Patient';
import type { Period } from './Period';
import type { Quantity } from './Quantity';
import type { Reference } from './Reference';
import type { RelatedPerson } from './RelatedPerson';
import type { DomainResource } from './Resource';

/**
 * Financial instrument which may be used to reimburse or pay for health
 * care products and services. Includes both insurance and self-payment.
 */
export declare class Coverage extends DomainResource {
  resourceType: 'Coverage';
  /**
   * A unique identifier assigned to this coverage.
   */
  identifier?: Identifier[];

  /**
   * The status of the resource instance.
   */
  status: 'active' | 'cancelled' | 'draft' | 'entered-in-error';

  /**
   * The type of coverage: social program, medical plan, accident coverage
   * (workers compensation, auto), group health or payment by an individual
   * or organization.
   */
  type?: CodeableConcept;

  /**
   * The party who 'owns' the insurance policy.
   */
  policyHolder?: Reference<Patient | RelatedPerson | Organization>;

  /**
   * The party who has signed-up for or 'owns' the contractual relationship
   * to the policy or to whom the benefit of the policy for services
   * rendered to them or their family is due.
   */
  subscriber?: Reference<Patient | RelatedPerson>;

  /**
   * The insurer assigned ID for the Subscriber.
   */
  subscriberId?: string;

  /**
   * The party who benefits from the insurance coverage; the patient when
   * products and/or services are provided.
   */
  beneficiary: Reference<Patient>;

  /**
   * A unique identifier for a dependent under the coverage.
   */
  dependent?: string;

  /**
   * The relationship of beneficiary (patient) to the subscriber.
   */
  relationship?: CodeableConcept;

  /**
   * Time period during which the coverage is in force. A missing start
   * date indicates the start date isn't known, a missing end date means
   * the coverage is continuing to be in force.
   */
  period?: Period;

  /**
   * The program or plan underwriter or payor including both insurance and
   * non-insurance agreements, such as patient-pay agreements.
   */
  payor: Reference<Organization | Patient | RelatedPerson>[];

  /**
   * A suite of underwriter specific classifiers.
   */
  class?: CoverageClass[];

  /**
   * The order of applicability of this coverage relative to other
   * coverages which are currently in force. Note, there may be gaps in the
   * numbering and this does not imply primary, secondary etc. as the
   * specific positioning of coverages depends upon the episode of care.
   */
  order?: number;

  /**
   * The insurer-specific identifier for the insurer-defined network of
   * providers to which the beneficiary may seek treatment which will be
   * covered at the 'in-network' rate, otherwise 'out of network' terms and
   * conditions apply.
   */
  network?: string;

  /**
   * A suite of codes indicating the cost category and associated amount
   * which have been detailed in the policy and may have been  included on
   * the health card.
   */
  costToBeneficiary?: CoverageCostToBeneficiary[];

  /**
   * When 'subrogation=true' this insurance instance has been included not
   * for adjudication but to provide insurers with the details to recover
   * costs.
   */
  subrogation?: boolean;

  /**
   * The policy(s) which constitute this insurance coverage.
   */
  contract?: Reference<Contract>[];
}

/**
 * A suite of underwriter specific classifiers.
 */
export interface CoverageClass {
  /**
   * The type of classification for which an insurer-specific class label
   * or number and optional name is provided, for example may be used to
   * identify a class of coverage or employer group, Policy, Plan.
   */
  type: CodeableConcept;

  /**
   * The alphanumeric string value associated with the insurer issued
   * label.
   */
  value: string;

  /**
   * A short description for the class.
   */
  name?: string;
}

/**
 * A suite of codes indicating the cost category and associated amount
 * which have been detailed in the policy and may have been  included on
 * the health card.
 */
export interface CoverageCostToBeneficiary {
  /**
   * The category of patient centric costs associated with treatment.
   */
  type?: CodeableConcept;

  /**
   * The amount due from the patient for the cost category.
   */
  valueQuantity?: Quantity;

  /**
   * The amount due from the patient for the cost category.
   */
  valueMoney?: Money;

  /**
   * A suite of codes indicating exceptions or reductions to patient costs
   * and their effective periods.
   */
  exception?: CoverageCostToBeneficiaryException[];
}

/**
 * A suite of codes indicating exceptions or reductions to patient costs
 * and their effective periods.
 */
export interface CoverageCostToBeneficiaryException {
  /**
   * The code for the specific exception.
   */
  type: CodeableConcept;

  /**
   * The timeframe during when the exception is in force.
   */
  period?: Period;
}