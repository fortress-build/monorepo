import type { Address } from './Address';
import type { Attachment } from './Attachment';
import type { Claim } from './Claim';
import type { CodeableConcept } from './CodeableConcept';
import type { CommunicationRequest } from './CommunicationRequest';
import type { Coverage } from './Coverage';
import type { Identifier } from './Identifier';
import type { Money } from './Money';
import type { Organization } from './Organization';
import type { Patient } from './Patient';
import type { Period } from './Period';
import type { Practitioner } from './Practitioner';
import type { PractitionerRole } from './PractitionerRole';
import type { Reference } from './Reference';
import type { DomainResource } from './Resource';
import type { SimpleQuantity } from './SimpleQuantity';

/**
 * This resource provides the adjudication details from the processing of
 * a Claim resource.
 */
export declare class ClaimResponse extends DomainResource {
  resourceType: 'ClaimResponse';
  /**
   * A unique identifier assigned to this claim response.
   */
  identifier?: Identifier[];

  /**
   * The status of the resource instance.
   */
  status: 'active' | 'cancelled' | 'draft' | 'entered-in-error';

  /**
   * A finer grained suite of claim type codes which may convey additional
   * information such as Inpatient vs Outpatient and/or a specialty
   * service.
   */
  type: CodeableConcept;

  /**
   * A finer grained suite of claim type codes which may convey additional
   * information such as Inpatient vs Outpatient and/or a specialty
   * service.
   */
  subType?: CodeableConcept;

  /**
   * A code to indicate whether the nature of the request is: to request
   * adjudication of products and services previously rendered; or
   * requesting authorization and adjudication for provision in the future;
   * or requesting the non-binding adjudication of the listed products and
   * services which could be provided in the future.
   */
  use: 'claim' | 'preauthorization' | 'predetermination';

  /**
   * The party to whom the professional services and/or products have been
   * supplied or are being considered and for whom actual for facast
   * reimbursement is sought.
   */
  patient: Reference<Patient>;

  /**
   * The date this resource was created.
   */
  created: string;

  /**
   * The party responsible for authorization, adjudication and
   * reimbursement.
   */
  insurer: Reference<Organization>;

  /**
   * The provider which is responsible for the claim, predetermination or
   * preauthorization.
   */
  requestor?: Reference<Practitioner | PractitionerRole | Organization>;

  /**
   * Original request resource reference.
   */
  request?: Reference<Claim>;

  /**
   * The outcome of the claim, predetermination, or preauthorization
   * processing.
   */
  outcome: 'queued' | 'complete' | 'error' | 'partial';

  /**
   * A human readable description of the status of the adjudication.
   */
  disposition?: string;

  /**
   * Reference from the Insurer which is used in later communications which
   * refers to this adjudication.
   */
  preAuthRef?: string;

  /**
   * The time frame during which this authorization is effective.
   */
  preAuthPeriod?: Period;

  /**
   * Type of Party to be reimbursed: subscriber, provider, other.
   */
  payeeType?: CodeableConcept;

  /**
   * A claim line. Either a simple (a product or service) or a 'group' of
   * details which can also be a simple items or groups of sub-details.
   */
  item?: ClaimResponseItem[];

  /**
   * The first-tier service adjudications for payor added product or
   * service lines.
   */
  addItem?: ClaimResponseAddItem[];

  /**
   * The adjudication results which are presented at the header level
   * rather than at the line-item or add-item levels.
   */
  adjudication?: ClaimResponseItemAdjudication[];

  /**
   * Categorized monetary totals for the adjudication.
   */
  total?: ClaimResponseTotal[];

  /**
   * Payment details for the adjudication of the claim.
   */
  payment?: ClaimResponsePayment;

  /**
   * A code, used only on a response to a preauthorization, to indicate
   * whether the benefits payable have been reserved and for whom.
   */
  fundsReserve?: CodeableConcept;

  /**
   * A code for the form to be used for printing the content.
   */
  formCode?: CodeableConcept;

  /**
   * The actual form, by reference or inclusion, for printing the content
   * or an EOB.
   */
  form?: Attachment;

  /**
   * A note that describes or explains adjudication results in a human
   * readable form.
   */
  processNote?: ClaimResponseProcessNote[];

  /**
   * Request for additional supporting or authorizing information.
   */
  communicationRequest?: Reference<CommunicationRequest>[];

  /**
   * Financial instruments for reimbursement for the health care products
   * and services specified on the claim.
   */
  insurance?: ClaimResponseInsurance[];

  /**
   * Errors encountered during the processing of the adjudication.
   */
  error?: ClaimResponseError[];
}

/**
 * The first-tier service adjudications for payor added product or
 * service lines.
 */
export interface ClaimResponseAddItem {
  /**
   * Claim items which this service line is intended to replace.
   */
  itemSequence?: number[];

  /**
   * The sequence number of the details within the claim item which this
   * line is intended to replace.
   */
  detailSequence?: number[];

  /**
   * The sequence number of the sub-details within the details within the
   * claim item which this line is intended to replace.
   */
  subdetailSequence?: number[];

  /**
   * The providers who are authorized for the services rendered to the
   * patient.
   */
  provider?: Reference<Practitioner | PractitionerRole | Organization>[];

  /**
   * When the value is a group code then this item collects a set of
   * related claim details, otherwise this contains the product, service,
   * drug or other billing code for the item.
   */
  productOrService: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  modifier?: CodeableConcept[];

  /**
   * Identifies the program under which this may be recovered.
   */
  programCode?: CodeableConcept[];

  /**
   * The date or dates when the service or product was supplied, performed
   * or completed.
   */
  servicedDate?: string;

  /**
   * The date or dates when the service or product was supplied, performed
   * or completed.
   */
  servicedPeriod?: Period;

  /**
   * Where the product or service was provided.
   */
  locationCodeableConcept?: CodeableConcept;

  /**
   * Where the product or service was provided.
   */
  locationAddress?: Address;

  /**
   * Where the product or service was provided.
   */
  locationReference?: Reference<Location>;

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: SimpleQuantity;

  /**
   * If the item is not a group then this is the fee for the product or
   * service, otherwise this is the total of the fees for the details of
   * the group.
   */
  unitPrice?: Money;

  /**
   * A real number that represents a multiplier used in determining the
   * overall value of services delivered and/or goods received. The concept
   * of a Factor allows for a discount or surcharge multiplier to be
   * applied to a monetary amount.
   */
  factor?: number;

  /**
   * The quantity times the unit price for an additional service or product
   * or charge.
   */
  net?: Money;

  /**
   * Physical service site on the patient (limb, tooth, etc.).
   */
  bodySite?: CodeableConcept;

  /**
   * A region or surface of the bodySite, e.g. limb region or tooth
   * surface(s).
   */
  subSite?: CodeableConcept[];

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * The adjudication results.
   */
  adjudication: ClaimResponseItemAdjudication[];

  /**
   * The second-tier service adjudications for payor added services.
   */
  detail?: ClaimResponseAddItemDetail[];
}

/**
 * The date or dates when the service or product was supplied, performed
 * or completed.
 */
export type ClaimResponseAddItemServiced = Period | string;

/**
 * Where the product or service was provided.
 */
export type ClaimResponseAddItemLocation =
  | Address
  | CodeableConcept
  | Reference<Location>;

/**
 * The second-tier service adjudications for payor added services.
 */
export interface ClaimResponseAddItemDetail {
  /**
   * When the value is a group code then this item collects a set of
   * related claim details, otherwise this contains the product, service,
   * drug or other billing code for the item.
   */
  productOrService: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  modifier?: CodeableConcept[];

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: SimpleQuantity;

  /**
   * If the item is not a group then this is the fee for the product or
   * service, otherwise this is the total of the fees for the details of
   * the group.
   */
  unitPrice?: Money;

  /**
   * A real number that represents a multiplier used in determining the
   * overall value of services delivered and/or goods received. The concept
   * of a Factor allows for a discount or surcharge multiplier to be
   * applied to a monetary amount.
   */
  factor?: number;

  /**
   * The quantity times the unit price for an additional service or product
   * or charge.
   */
  net?: Money;

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * The adjudication results.
   */
  adjudication: ClaimResponseItemAdjudication[];

  /**
   * The third-tier service adjudications for payor added services.
   */
  subDetail?: ClaimResponseAddItemDetailSubDetail[];
}

/**
 * The third-tier service adjudications for payor added services.
 */
export interface ClaimResponseAddItemDetailSubDetail {
  /**
   * When the value is a group code then this item collects a set of
   * related claim details, otherwise this contains the product, service,
   * drug or other billing code for the item.
   */
  productOrService: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  modifier?: CodeableConcept[];

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: SimpleQuantity;

  /**
   * If the item is not a group then this is the fee for the product or
   * service, otherwise this is the total of the fees for the details of
   * the group.
   */
  unitPrice?: Money;

  /**
   * A real number that represents a multiplier used in determining the
   * overall value of services delivered and/or goods received. The concept
   * of a Factor allows for a discount or surcharge multiplier to be
   * applied to a monetary amount.
   */
  factor?: number;

  /**
   * The quantity times the unit price for an additional service or product
   * or charge.
   */
  net?: Money;

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * The adjudication results.
   */
  adjudication: ClaimResponseItemAdjudication[];
}

/**
 * Errors encountered during the processing of the adjudication.
 */
export interface ClaimResponseError {
  /**
   * The sequence number of the line item submitted which contains the
   * error. This value is omitted when the error occurs outside of the item
   * structure.
   */
  itemSequence?: number;

  /**
   * The sequence number of the detail within the line item submitted which
   * contains the error. This value is omitted when the error occurs
   * outside of the item structure.
   */
  detailSequence?: number;

  /**
   * The sequence number of the sub-detail within the detail within the
   * line item submitted which contains the error. This value is omitted
   * when the error occurs outside of the item structure.
   */
  subDetailSequence?: number;

  /**
   * An error code, from a specified code system, which details why the
   * claim could not be adjudicated.
   */
  code: CodeableConcept;
}

/**
 * Financial instruments for reimbursement for the health care products
 * and services specified on the claim.
 */
export interface ClaimResponseInsurance {
  /**
   * A number to uniquely identify insurance entries and provide a sequence
   * of coverages to convey coordination of benefit order.
   */
  sequence: number;

  /**
   * A flag to indicate that this Coverage is to be used for adjudication
   * of this claim when set to true.
   */
  focal: boolean;

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

  /**
   * The result of the adjudication of the line items for the Coverage
   * specified in this insurance.
   */
  claimResponse?: Reference<ClaimResponse>;
}

/**
 * A claim line. Either a simple (a product or service) or a 'group' of
 * details which can also be a simple items or groups of sub-details.
 */
export interface ClaimResponseItem {
  /**
   * A number to uniquely reference the claim item entries.
   */
  itemSequence: number;

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * If this item is a group then the values here are a summary of the
   * adjudication of the detail items. If this item is a simple product or
   * service then this is the result of the adjudication of this item.
   */
  adjudication: ClaimResponseItemAdjudication[];

  /**
   * A claim detail. Either a simple (a product or service) or a 'group' of
   * sub-details which are simple items.
   */
  detail?: ClaimResponseItemDetail[];
}

/**
 * If this item is a group then the values here are a summary of the
 * adjudication of the detail items. If this item is a simple product or
 * service then this is the result of the adjudication of this item.
 */
export interface ClaimResponseItemAdjudication {
  /**
   * A code to indicate the information type of this adjudication record.
   * Information types may include the value submitted, maximum values or
   * percentages allowed or payable under the plan, amounts that: the
   * patient is responsible for in aggregate or pertaining to this item;
   * amounts paid by other coverages; and, the benefit payable for this
   * item.
   */
  category: CodeableConcept;

  /**
   * A code supporting the understanding of the adjudication result and
   * explaining variance from expected amount.
   */
  reason?: CodeableConcept;

  /**
   * Monetary amount associated with the category.
   */
  amount?: Money;

  /**
   * A non-monetary value associated with the category. Mutually exclusive
   * to the amount element above.
   */
  value?: number;
}

/**
 * A claim detail. Either a simple (a product or service) or a 'group' of
 * sub-details which are simple items.
 */
export interface ClaimResponseItemDetail {
  /**
   * A number to uniquely reference the claim detail entry.
   */
  detailSequence: number;

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * The adjudication results.
   */
  adjudication: ClaimResponseItemAdjudication[];

  /**
   * A sub-detail adjudication of a simple product or service.
   */
  subDetail?: ClaimResponseItemDetailSubDetail[];
}

/**
 * A sub-detail adjudication of a simple product or service.
 */
export interface ClaimResponseItemDetailSubDetail {
  /**
   * A number to uniquely reference the claim sub-detail entry.
   */
  subDetailSequence: number;

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * The adjudication results.
   */
  adjudication?: ClaimResponseItemAdjudication[];
}

/**
 * Payment details for the adjudication of the claim.
 */
export interface ClaimResponsePayment {
  /**
   * Whether this represents partial or complete payment of the benefits
   * payable.
   */
  type: CodeableConcept;

  /**
   * Total amount of all adjustments to this payment included in this
   * transaction which are not related to this claim's adjudication.
   */
  adjustment?: Money;

  /**
   * Reason for the payment adjustment.
   */
  adjustmentReason?: CodeableConcept;

  /**
   * Estimated date the payment will be issued or the actual issue date of
   * payment.
   */
  date?: string;

  /**
   * Benefits payable less any payment adjustment.
   */
  amount: Money;

  /**
   * Issuer's unique identifier for the payment instrument.
   */
  identifier?: Identifier;
}

/**
 * A note that describes or explains adjudication results in a human
 * readable form.
 */
export interface ClaimResponseProcessNote {
  /**
   * A number to uniquely identify a note entry.
   */
  number?: number;

  /**
   * The business purpose of the note text.
   */
  type?: 'display' | 'print' | 'printoper';

  /**
   * The explanation or description associated with the processing.
   */
  text: string;

  /**
   * A code to define the language used in the text of the note.
   */
  language?: CodeableConcept;
}

/**
 * Categorized monetary totals for the adjudication.
 */
export interface ClaimResponseTotal {
  /**
   * A code to indicate the information type of this adjudication record.
   * Information types may include: the value submitted, maximum values or
   * percentages allowed or payable under the plan, amounts that the
   * patient is responsible for in aggregate or pertaining to this item,
   * amounts paid by other coverages, and the benefit payable for this
   * item.
   */
  category: CodeableConcept;

  /**
   * Monetary total amount associated with the category.
   */
  amount: Money;
}