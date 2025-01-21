import type { CodeableConcept } from "./CodeableConcept";
import type { Contract } from "./Contract";
import type { Identifier } from "./Identifier";
import type { Money } from "./Money";
import type { Organization } from "./Organization";
import type { Patient } from "./Patient";
import type { Period } from "./Period";
import type { Quantity } from "./Quantity";
import type { Reference } from "./Reference";
import type { RelatedPerson } from "./RelatedPerson";
import type { DomainResource } from "./Resource";

export declare class Coverage extends DomainResource {
  resourceType: "Coverage";

  identifier?: Identifier[];
  status: "active" | "cancelled" | "draft" | "entered-in-error";
  type?: CodeableConcept;
  policyHolder?: Reference<Patient | RelatedPerson | Organization>;
  subscriber?: Reference<Patient | RelatedPerson>;
  subscriberId?: string;
  beneficiary: Reference<Patient>;
  dependent?: string;
  relationship?: CodeableConcept;
  period?: Period;
  payor: Reference<Organization | Patient | RelatedPerson>[];
  class?: {
    type: CodeableConcept;
    value: string;
    name?: string;
  }[];
  order?: number;
  network?: string;

  costToBeneficiary?: {
    type?: CodeableConcept;

    valueQuantity?: Quantity;
    valueMoney?: Money;

    exception?: {
      type: CodeableConcept;
      period?: Period;
    }[];
  }[];

  subrogation?: boolean;
  contract?: Reference<Contract>[];
}
