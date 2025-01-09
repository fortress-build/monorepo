import type { DomainResource } from "./Resource";
import type { Identifier } from "./Identifier";
import type { Reference } from "./Reference";
import type { CodeableConcept } from "./CodeableConcept";
import type { Period } from "./Period";
import type { Timing } from "./Timing";
import type { Quantity } from "./Quantity";
import type { Medication } from "./Medication";
import type { Substance } from "./Substance";
import type { Device } from "./Device";
import type { SupplyRequest } from "./SupplyRequest";
import type { Contract } from "./Contract";
import type { Patient } from "./Patient";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Organization } from "./Organization";
import type { Location } from "./Location";

export declare class SupplyDeliverySuppliedItem {
  quantity?: Quantity;
  itemCodeableConcept?: CodeableConcept;
  itemReference?: Reference<Medication | Substance | Device>;
}

export declare class SupplyDelivery extends DomainResource {
  resourceType: 'SupplyDelivery';
  identifier?: Identifier[];
  basedOn?: Reference<SupplyRequest>[];
  partOf?: Reference<SupplyDelivery | Contract>[];
  status?: 'in-progress' | 'completed' | 'abandoned' | 'entered-in-error';
  patient?: Reference<Patient>;
  type?: CodeableConcept;
  suppliedItem?: SupplyDeliverySuppliedItem;
  occurrenceDateTime?: string;
  occurrencePeriod?: Period;
  occurrenceTiming?: Timing;
  supplier?: Reference<Practitioner | PractitionerRole | Organization>;
  destination?: Reference<Location>;
  receiver?: Reference<Practitioner | PractitionerRole>[];
}
