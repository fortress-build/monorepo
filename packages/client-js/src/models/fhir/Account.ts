import type { Identifier } from "./Identifier";
import type { CodeableConcept } from "./CodeableConcept";
import type { Reference } from "./Reference";
import type { Period } from "./Period";
import type { DomainResource } from "./Resource";
import type { Patient } from "./Patient";
import type { PractitionerRole } from "./PractitionerRole";
import type { HealthcareService } from "./HealthcareService";
import type { Organization } from "./Organization";
import type { Device } from "./Device";
import type { Practitioner } from "./Practitioner";
import type { Coverage } from "./Coverage";
import type { RelatedPerson } from "./RelatedPerson";

/**
 * A financial tool for tracking value accrued for a particular purpose.
 * In the healthcare field, used to track charges for a patient, cost
 * centers, etc.
 */
export declare class Account extends DomainResource {
  /**
   * This is a Account resource
   */
  resourceType: 'Account';
  /**
   * Unique identifier used to reference the account.  Might or might not
   * be intended for human use (e.g. credit card number).
   */
  identifier?: Identifier[];
  /**
   * Indicates whether the account is presently used/usable or not.
   */
  status: 'active' | 'inactive' | 'entered-in-error' | 'on-hold' | 'unknown';
  /**
   * Categorizes the account for reporting and searching purposes.
   */
  type?: CodeableConcept;
  /**
   * Name used for the account when displaying it to humans in reports,
   * etc.
   */
  name?: string;
  /**
   * Identifies the entity which incurs the expenses. While the immediate
   * recipients of services or goods might be entities related to the
   * subject, the expenses were ultimately incurred by the subject of the
   * Account.
   */
  subject?: Reference<
    | Patient
    | Device
    | Practitioner
    | PractitionerRole
    | Location
    | HealthcareService
    | Organization
  >[];
  /**
   * The date range of services associated with this account.
   */
  servicePeriod?: Period;
  /**
   * The party(s) that are responsible for covering the payment of this
   * account, and what order should they be applied to the account.
   */
  coverage?: {
    /**
     * The party(s) that contribute to payment (or part of) of the charges
     * applied to this account (including self-pay).
     *
     * A coverage may only be responsible for specific types of charges, and
     * the sequence of the coverages in the account could be important when
     * processing billing.
     */
    coverage: Reference<Coverage>;
    /**
     * The priority of the coverage in the context of this account.
     */
    priority?: number;
  }[];
  /**
   * Indicates the service area, hospital, department, etc. with
   * responsibility for managing the Account.
   */
  owner?: Reference<Organization>;
  /**
   * Provides additional information about what the account tracks and how
   * it is used.
   */
  description?: string;
  /**
   * The parties responsible for balancing the account if other payment
   * options fall short.
   */
  guarantor?: {
    /**
     * The entity who is responsible.
     */
    party: Reference<Patient | RelatedPerson | Organization>;
    /**
     * A guarantor may be placed on credit hold or otherwise have their role
     * temporarily suspended.
     */
    onHold?: boolean;
    /**
     * The timeframe during which the guarantor accepts responsibility for
     * the account.
     */
    period?: Period;
  }[];
  /**
   * Reference to a parent Account.
   */
  partOf?: Reference<Account>;
}
