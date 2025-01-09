import type { CodeableConcept } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import type { Money } from "./Money";
import type { Organization } from "./Organization";
import type { PaymentReconciliation } from "./PaymentReconciliation";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Reference } from "./Reference";
import type { DomainResource, Resource } from "./Resource";

export declare class PaymentNotice extends DomainResource{
  resourceType: 'PaymentNotice';
  identifier?: Identifier[];
  status: 'active' | 'cancelled' | 'draft' | 'entered-in-error';
  request?: Reference<Resource>;
  response?: Reference<Resource>;
  created: string;
  provider?: Reference<Practitioner | PractitionerRole | Organization>;
  payment: Reference<PaymentReconciliation>;
  paymentDate?: string;
  payee?: Reference<Practitioner | PractitionerRole | Organization>;
  recipient: Reference<Organization>;
  amount: Money;
  paymentStatus?: CodeableConcept;
}
