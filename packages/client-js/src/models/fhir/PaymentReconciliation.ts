import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Money } from "./Money";
import type { Organization } from "./Organization";
import type { Period } from "./Period";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";
import type { Task } from "./Task";

export declare class PaymentReconciliationDetail {
  identifier?: Identifier;
  predecessor?: Identifier;
  type: CodeableConcept;
  request?: Reference<Resource>;
  submitter?: Reference<Practitioner | PractitionerRole | Organization>;
  response?: Reference<Resource>;
  date?: string;
  responsible?: Reference<PractitionerRole>;
  payee?: Reference<Practitioner | PractitionerRole | Organization>;
  amount?: Money;
}

export declare class PaymentReconciliationProcessNote {
  type?: "display" | "print" | "printoper";
  text?: string;
}

export declare class PaymentReconciliation extends DomainResource {
  resourceType: "PaymentReconciliation";
  identifier?: Identifier[];
  status: "active" | "cancelled" | "draft" | "entered-in-error";
  period?: Period;
  created: string;
  paymentIssuer?: Reference<Organization>;
  request?: Reference<Task>;
  requestor?: Reference<Practitioner | PractitionerRole | Organization>;
  outcome?: "queued" | "complete" | "error" | "partial";
  disposition?: string;
  paymentDate: string;
  paymentAmount: Money;
  paymentIdentifier?: Identifier;
  detail?: PaymentReconciliationDetail[];
  formCode?: CodeableConcept;
  processNote?: PaymentReconciliationProcessNote[];
}
