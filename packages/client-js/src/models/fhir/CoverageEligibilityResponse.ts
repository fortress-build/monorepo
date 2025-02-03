import type { CodeableConcept } from './CodeableConcept';
import type { Identifier } from './Identifier';
import type { Money } from './Money';
import type { Period } from './Period';
import type { Reference } from './Reference';
import type { DomainResource } from './Resource';
import type { Patient } from './Patient';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { Organization } from './Organization';
import type { Coverage } from './Coverage';
import type { CoverageEligibilityRequest } from './CoverageEligibilityRequest';

/**
 * This resource provides eligibility and plan details from the
 * processing of an CoverageEligibilityRequest resource.
 */
export declare class CoverageEligibilityResponse {
   resourceType: 'CoverageEligibilityResponse';

  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: Identifier[];

  /**
   * The status of the resource instance.
   */
  status: 'active' | 'cancelled' | 'draft' | 'entered-in-error';

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
   * The date this resource was created.
   */
  created: string;

  /**
   * The provider which is responsible for the request.
   */
  requestor?: Reference<Practitioner | PractitionerRole | Organization>;

  /**
   * Reference to the original request resource.
   */
  request: Reference<CoverageEligibilityRequest>;

  /**
   * The outcome of the request processing.
   */
  outcome: 'queued' | 'complete' | 'error' | 'partial';

  /**
   * A human readable description of the status of the adjudication.
   */
  disposition?: string;

  /**
   * The Insurer who issued the coverage in question and is the author of
   * the response.
   */
  insurer: Reference<Organization>;

  /**
   * Financial instruments for reimbursement for the health care products
   * and services.
   */
  insurance?: CoverageEligibilityResponseInsurance[];

  /**
   * A reference from the Insurer to which these services pertain to be
   * used on further communication and as proof that the request occurred.
   */
  preAuthRef?: string;

  /**
   * A code for the form to be used for printing the content.
   */
  form?: CodeableConcept;

  /**
   * Errors encountered during the processing of the request.
   */
  error?: CoverageEligibilityResponseError[];
}

/**
 * Errors encountered during the processing of the request.
 */
export interface CoverageEligibilityResponseError {
  /**
   * An error code,from a specified code system, which details why the
   * eligibility check could not be performed.
   */
  code: CodeableConcept;
}

/**
 * Financial instruments for reimbursement for the health care products
 * and services.
 */
export interface CoverageEligibilityResponseInsurance {
  /**
   * Reference to the insurance card level information contained in the
   * Coverage resource. The coverage issuing insurer will use these details
   * to locate the patient's actual coverage within the insurer's
   * information system.
   */
  coverage: Reference<Coverage>;

  /**
   * Flag indicating if the coverage provided is inforce currently if no
   * service date(s) specified or for the whole duration of the service
   * dates.
   */
  inforce?: boolean;

  /**
   * The term of the benefits documented in this response.
   */
  benefitPeriod?: Period;

  /**
   * Benefits and optionally current balances, and authorization details by
   * category or service.
   */
  item?: CoverageEligibilityResponseInsuranceItem[];
}

/**
 * Benefits and optionally current balances, and authorization details by
 * category or service.
 */
export interface CoverageEligibilityResponseInsuranceItem {
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
   * The practitioner who is eligible for the provision of the product or
   * service.
   */
  provider?: Reference<Practitioner | PractitionerRole>;

  /**
   * True if the indicated class of service is excluded from the plan,
   * missing or False indicates the product or service is included in the
   * coverage.
   */
  excluded?: boolean;

  /**
   * A short name or tag for the benefit.
   */
  name?: string;

  /**
   * A richer description of the benefit or services covered.
   */
  description?: string;

  /**
   * Is a flag to indicate whether the benefits refer to in-network
   * providers or out-of-network providers.
   */
  network?: CodeableConcept;

  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  unit?: CodeableConcept;

  /**
   * The term or period of the values such as 'maximum lifetime benefit' or
   * 'maximum annual visits'.
   */
  term?: CodeableConcept;

  /**
   * Benefits used to date.
   */
  benefit?: CoverageEligibilityResponseInsuranceItemBenefit[];

  /**
   * A boolean flag indicating whether a preauthorization is required prior
   * to actual service delivery.
   */
  authorizationRequired?: boolean;

  /**
   * Codes or comments regarding information or actions associated with the
   * preauthorization.
   */
  authorizationSupporting?: CodeableConcept[];

  /**
   * A web location for obtaining requirements or descriptive information
   * regarding the preauthorization.
   */
  authorizationUrl?: string;
}

/**
 * Benefits used to date.
 */
export interface CoverageEligibilityResponseInsuranceItemBenefit {
  /**
   * Classification of benefit being provided.
   */
  type: CodeableConcept;

  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedUnsignedInt?: number;

  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedString?: string;

  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedMoney?: Money;

  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedUnsignedInt?: number;

  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedString?: string;

  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedMoney?: Money;
}

