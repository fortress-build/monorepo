import type { Address } from "./Address";
import type { Attachment } from "./Attachment";
import type { Claim } from "./Claim";
import type { CodeableConcept } from "./CodeableConcept";
import type { CommunicationRequest } from "./CommunicationRequest";
import type { Coverage } from "./Coverage";
import type { Identifier } from "./Identifier";
import type { Money } from "./Money";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource } from "./Resource";
import type { SimpleQuantity } from "./SimpleQuantity";

export type Adjudication = {
  category: CodeableConcept;
  reason?: CodeableConcept;
  amount?: Money;
  value?: number;
};

export declare class ClaimResponse extends DomainResource {
  resourceType: "ClaimResponse";

  identifier?: Identifier[];
  status: "active" | "cancelled" | "draft" | "entered-in-error";
  type: CodeableConcept;
  subType?: CodeableConcept;
  use: "claim" | "preauthorization" | "predetermination";
  patient: Reference<Patient>;
  created: string;
  insurer: Reference<Organization>;
  requestor?: Reference<Practitioner | PractitionerRole | Organization>;
  request?: Reference<Claim>;
  outcome: "queued" | "complete" | "error" | "partial";
  disposition?: string;
  preAuthRef?: string;
  preAuthPeriod?: Period;
  payeeType?: CodeableConcept;

  item?: {
    itemSequence: number;
    noteNumber?: number[];
    adjudication: Adjudication[];
    detail?: {
      detailSequence: number;
      noteNumber?: number[];
      adjudication: Adjudication[];
      subDetail?: {
        subDetailSequence: number;
        noteNumber?: number[];
        adjudication: Adjudication[];
      }[];
    }[];
  }[];
  addItem?: {
    itemSequence?: number[];
    detailSequence?: number[];
    subdetailSequence?: number[];
    provider?: Reference<Practitioner | PractitionerRole | Organization>;
    productOrService: CodeableConcept;
    modifier?: CodeableConcept[];
    programCode?: CodeableConcept[];

    servicedDate?: string;
    servicedPeriod?: Period;

    locationCodeableConcept?: CodeableConcept;
    locationAddress?: Address;
    locationReference?: Reference<Location>;

    quantity?: SimpleQuantity;
    unitPrice?: Money;
    factor?: number;
    net?: Money;
    bodySite?: CodeableConcept;
    subSite?: CodeableConcept;
    noteNumber?: number[];
    adjudication?: Adjudication[];
    detail?: {
      productOrService: CodeableConcept;
      modifier?: CodeableConcept[];
      quantity?: SimpleQuantity;
      unitPrice?: Money;
      factor?: number;
      net?: Money;
      noteNumber?: number[];
      adjudication?: Adjudication[];
      subDetail?: {
        productOrService: CodeableConcept;
        modifier?: CodeableConcept[];
        quantity?: SimpleQuantity;
        unitPrice?: Money;
        factor?: number;
        net?: Money;
        noteNumber?: number[];
        adjudication?: Adjudication[];
      }[];
    }[];
  }[];
  adjudication: Adjudication[];
  total?: {
    attribute: CodeableConcept;
    amount: Money;
  }[];
  payment?: {
    type: CodeableConcept;
    date?: string;
    amount: Money;
    identifier?: Identifier;
  };
  fundsReserve?: CodeableConcept;
  formCode?: CodeableConcept;
  form?: Attachment;
  processNote?: {
    number?: number;
    type?: "display" | "print" | "printoper";
    text: string;
    language?: CodeableConcept;
  };
  communicationRequest?: Reference<CommunicationRequest>[];
  insurance?: {
    sequence: number;
    focal: boolean;
    coverage: Reference<Coverage>;
    businessArrangement?: string;
    claimResponse?: Reference<ClaimResponse>;
  }[];
  error?: {
    itemSequence?: number;
    detailSequence?: number;
    subDetailSequence?: number;
    code: CodeableConcept;
  }[];
}
